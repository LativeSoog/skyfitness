import { HeaderPurple } from '../../components/Header/Header'
import { TrainingBlock } from '../../components/TrainingBlock/TrainingBlock'
import * as S from './styles'

export const MainPage = () => {
  const handleClickGoToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <S.Wrapper>
      <HeaderPurple />
      <S.Container>
        <S.ContentDescription>
          <S.ContentDescriptionImg src="/img/sale-sticker.png" />
          <S.ContentDescriptionPreTitle>
            Онлайн-тренировки для занятий дома
          </S.ContentDescriptionPreTitle>
          <S.ContentDescriptionTitle>
            Начните заниматься спортом и улучшите качество жизни
          </S.ContentDescriptionTitle>
        </S.ContentDescription>

        <S.TrainingBlocks>
          <TrainingBlock
            urlImg="/img/card-course/card-yoga.jpeg"
            link="/training"
            nameCourse="Йога"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-stretching.jpeg"
            link="/"
            nameCourse="Стретчинг"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-dance.jpeg"
            link="/"
            nameCourse="Танцевальный фитнес"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-step-aero.jpeg"
            link="/"
            nameCourse="Степ-аэробика"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-bodyflex.jpeg"
            link="/"
            nameCourse="Бодифлекс"
          />
        </S.TrainingBlocks>

        <S.ContentFooter>
          <S.ContentFooterButton onClick={handleClickGoToUp}>
            Наверх
          </S.ContentFooterButton>
        </S.ContentFooter>
      </S.Container>
    </S.Wrapper>
  )
}
