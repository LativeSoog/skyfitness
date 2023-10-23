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
      <S.Container>
        <HeaderPurple />
        <S.ContentDescription>
          <S.ContentDescriptionPreTitle>
            Онлайн-тренировки для занятий дома
          </S.ContentDescriptionPreTitle>
          <S.ContentDescriptionTitleImg>
            <S.ContentDescriptionTitle>
              Начните заниматься спортом и улучшите качество жизни
            </S.ContentDescriptionTitle>
            <S.ContentDescriptionImg src="/img/sale-sticker.png" />
          </S.ContentDescriptionTitleImg>
        </S.ContentDescription>

        <S.TrainingBlock>
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
        </S.TrainingBlock>

        <S.ContentFooter>
          <S.ContentFooterButton onClick={handleClickGoToUp}>
            Наверх &#8593;
          </S.ContentFooterButton>
        </S.ContentFooter>
      </S.Container>
    </S.Wrapper>
  )
}
