import { useState } from 'react'
import * as S from './styles'

/* Проценты выполнения упражнений, в зависимости от процента меняется прогресс закрашиваемого процента автоматически 
  не знаю что делать для процента ниже 20 (дизайнер ничего не нарисовал =((((( )
*/
const progressPercent = {
  forward: '45',
  back: '36',
  legs: '62',
}

export const TrainingVideoPage = () => {
  const [progressForm, setProgressForm] = useState(false)

  const handleClickFillProgress = () => {
    document.body.style.overflow = 'hidden'
    setProgressForm(true)
  }

  return (
    <S.videoPage>
      {progressForm && <ProgressForm setProgressForm={setProgressForm} />}
      <S.videoPageTitle>Йога</S.videoPageTitle>
      <S.breadcrumbs>
        Красота и здоровье / Йога на каждый день / 2 день
      </S.breadcrumbs>

      <S.video controls />

      <S.exercise>
        <S.exerciseWrap>
          <S.exerciseText>Упражнения</S.exerciseText>
          <S.exerciseLists>
            <S.exerciseItem>Наклон вперед (10 повторений)</S.exerciseItem>
            <S.exerciseItem>Наклон назад (10 повторений)</S.exerciseItem>
            <S.exerciseItem>
              Поднятие ног, согнутых в коленях (5&nbsp;повторений)
            </S.exerciseItem>
          </S.exerciseLists>
          <S.fillProgress onClick={handleClickFillProgress}>
            Заполнить свой прогресс
          </S.fillProgress>
        </S.exerciseWrap>

        <S.progressBar>
          <S.progressBarText>Мой прогресс по тренировке 2:</S.progressBarText>
          <S.progressBarStats>
            <S.progressBarStat>
              <S.progressBarStatText>Наклоны вперед</S.progressBarStatText>
              <S.progressBarStatPercentGreen>
                <S.progressBarStatPercentColorGreen
                  $percent={progressPercent.forward}
                >{`${progressPercent.forward}%`}</S.progressBarStatPercentColorGreen>
              </S.progressBarStatPercentGreen>
            </S.progressBarStat>

            <S.progressBarStat>
              <S.progressBarStatText>Наклоны назад</S.progressBarStatText>
              <S.progressBarStatPercentOrange>
                <S.progressBarStatPercentColorOrange
                  $percent={progressPercent.back}
                >{`${progressPercent.back}%`}</S.progressBarStatPercentColorOrange>
              </S.progressBarStatPercentOrange>
            </S.progressBarStat>

            <S.progressBarStat>
              <S.progressBarStatText>
                Поднятие ног, согнутых в коленях
              </S.progressBarStatText>
              <S.progressBarStatPercentPurple>
                <S.progressBarStatPercentColorPurple
                  $percent={progressPercent.legs}
                >{`${progressPercent.legs}%`}</S.progressBarStatPercentColorPurple>
              </S.progressBarStatPercentPurple>
            </S.progressBarStat>
          </S.progressBarStats>
        </S.progressBar>
      </S.exercise>
    </S.videoPage>
  )
}

const ProgressForm = ({ setProgressForm }) => {
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
              <S.progressFormInputWrap>
                <S.progressFormInputText>
                  Сколько раз вы сделали наклоны вперед?
                </S.progressFormInputText>
                <S.progressFormInput
                  type="number"
                  name="quantity"
                  min="0"
                  placeholder="Введите значение"
                />
              </S.progressFormInputWrap>

              <S.progressFormInputWrap>
                <S.progressFormInputText>
                  Сколько раз вы сделали наклоны назад?
                </S.progressFormInputText>
                <S.progressFormInput
                  type="number"
                  name="quantity"
                  min="0"
                  placeholder="Введите значение"
                />
              </S.progressFormInputWrap>

              <S.progressFormInputWrap>
                <S.progressFormInputText>
                  Сколько раз вы сделали поднятие ног, согнутых в коленях?
                </S.progressFormInputText>
                <S.progressFormInput
                  type="number"
                  name="quantity"
                  min="0"
                  placeholder="Введите значение"
                />
              </S.progressFormInputWrap>
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
