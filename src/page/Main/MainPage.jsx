import { HeaderPurple } from '../../components/Header/Header'
import { TrainingBlock } from '../../components/TrainingBlock/TrainingBlock'
import * as S from './styles'

export const MainPage = () => {
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
            link="/courses/yoga1"
            nameCourse="Йога"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-stretching.jpeg"
            link="/courses/stretching1"
            nameCourse="Стретчинг"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-dance.jpeg"
            link="/courses/dance1"
            nameCourse="Танцевальный фитнес"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-step-aero.jpeg"
            link="/courses/step1"
            nameCourse="Степ-аэробика"
          />
          <TrainingBlock
            urlImg="/img/card-course/card-bodyflex.jpeg"
            link="/courses/bodyflex1"
            nameCourse="Бодифлекс"
          />
        </S.TrainingBlock>

        <S.ContentFooter>
          <S.ContentFooterButton>Наверх &#8593;</S.ContentFooterButton>
        </S.ContentFooter>
      </S.Container>
    </S.Wrapper>
  )
}
