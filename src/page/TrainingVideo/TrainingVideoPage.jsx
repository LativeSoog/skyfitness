import { useEffect, useState } from 'react'
import * as S from './styles'
import { getWorkout } from '../../api'
import { useParams } from 'react-router-dom'

// количество раз, которое сделал юзер (позже нужно будет вставить из базы юзера)
// все проценты и прогрессы высчитываются и отрисовываются автоматически
const progressPercent = {
  0: '2',
  1: '8',
  2: '4',
}
// чтобы прогресс бары были разными цветами
const colors = [
  '86, 94, 239',
  '255, 109, 0',
  '154, 72, 241',
  '101, 197, 5',
  '210 16 225',
]

export const TrainingVideoPage = () => {
  const [progressForm, setProgressForm] = useState(false)
  const [dataPage, setDataPage] = useState(null)

  const currentPage = useParams().id

  useEffect(() => {
    const fetchData = () => {
      getWorkout()
        .then((data) => {
          setDataPage(data[currentPage])
        })
        .catch((error) => {
          console.error('Error fetching workout data:', error)
        })
    }

    fetchData()
  }, [])

  const handleClickFillProgress = () => {
    document.body.style.overflow = 'hidden'
    setProgressForm(true)
  }

  function getYoutubeEmbedUrl(youtubeUrl) {
    let videoId = youtubeUrl.slice(17, youtubeUrl.length)
    const embedUrl = 'https://www.youtube.com/embed/' + videoId
    return embedUrl
  }

  return dataPage ? (
    <S.videoPage>
      {progressForm && (
        <ProgressForm setProgressForm={setProgressForm} dataPage={dataPage} />
      )}
      <S.videoPageTitle>{dataPage.title}</S.videoPageTitle>
      <S.breadcrumbs>{dataPage.name}</S.breadcrumbs>

      <S.video src={getYoutubeEmbedUrl(dataPage.url)}></S.video>

      {/* нет упражнений - нет прогресса */}
      {dataPage.exercises && (
        <S.exercise>
          <S.exerciseWrap>
            <S.exerciseText>Упражнения</S.exerciseText>
            <S.exerciseLists>
              {dataPage.exercises.map((item, index) => (
                <S.exerciseItem
                  key={index}
                >{`${item.name} (${item.times} повторений)`}</S.exerciseItem>
              ))}
            </S.exerciseLists>
            <S.fillProgress onClick={handleClickFillProgress}>
              Заполнить свой прогресс
            </S.fillProgress>
          </S.exerciseWrap>

          <S.progressBar>
            <S.progressBarText>
              Мой прогресс по тренировке {dataPage.number}:
            </S.progressBarText>
            <S.progressBarStats>
              {dataPage.exercises.map((item, index) => (
                <S.progressBarStat key={index}>
                  <S.progressBarStatText>{item.name}</S.progressBarStatText>
                  <S.progressBarStatPercent $rgbCode={colors[index]}>
                    <S.progressBarStatPercentFill
                      $percent={(progressPercent[index] * 100) / item.times}
                      $rgbCode={colors[index]}
                    >
                      <S.progressBarStatPercentFillNumber
                        $percent={(progressPercent[index] * 100) / item.times}
                      >
                        {`${Math.round(
                          (progressPercent[index] * 100) / item.times,
                        )}%`}
                      </S.progressBarStatPercentFillNumber>
                    </S.progressBarStatPercentFill>
                  </S.progressBarStatPercent>
                </S.progressBarStat>
              ))}
            </S.progressBarStats>
          </S.progressBar>
        </S.exercise>
      )}
    </S.videoPage>
  ) : (
    // тут должен быть скелетон
    <h1>Загрузка...</h1>
  )
}

const ProgressForm = ({ setProgressForm, dataPage }) => {
  const [done, setDone] = useState(false)

  const closeForm = () => {
    document.body.style.overflow = null
    setProgressForm(false)
  }

  // форма закроется, если кликнуть в любое пространство
  const handleClickSpace = () => {
    closeForm()
  }

  // чтобы не закрывалась, если кликнуть по форме
  const handleClickForm = (event) => {
    event.stopPropagation()
  }

  const handleClickSubmit = (event) => {
    event.preventDefault()
    setDone(true)
    setTimeout(() => {
      setDone(false)
      closeForm()
    }, 1500)
  }
  // без валидации
  return (
    <S.progressFormWrap onClick={handleClickSpace}>
      <S.progressForm onClick={(event) => handleClickForm(event)}>
        {done ? (
          <Done />
        ) : (
          <>
            <S.progressFormText>Мой прогресс</S.progressFormText>

            <S.progressFormInputs>
              {dataPage.exercises.map((item, index) => (
                <S.progressFormInputWrap key={index}>
                  <S.progressFormInputText>
                    {`Сколько раз вы сделали ${item.name.toLowerCase()}?`}
                  </S.progressFormInputText>
                  <S.progressFormInput
                    type="number"
                    name="quantity"
                    min="0"
                    placeholder="Введите значение"
                  />
                </S.progressFormInputWrap>
              ))}
            </S.progressFormInputs>

            <S.sendProgress onClick={(event) => handleClickSubmit(event)}>
              Отправить
            </S.sendProgress>
          </>
        )}
      </S.progressForm>
    </S.progressFormWrap>
  )
}

const Done = () => {
  return (
    <S.done>
      <S.doneText>Ваш прогресс засчитан!</S.doneText>
      <S.doneImg src="/img/VideoPage/done.png" alt="done" />
    </S.done>
  )
}
