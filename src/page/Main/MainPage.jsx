import { HeaderPurple } from '../../components/Header/Header'
import { TrainingBlock } from '../../components/TrainingBlock/TrainingBlock'
import * as S from './styles'

export const MainPage = ({ courses }) => {
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
          <TrainingBlock courses={courses} />
        </S.TrainingBlock>
        <S.ContentFooter>
          <S.ContentFooterButton>Наверх &#8593;</S.ContentFooterButton>
        </S.ContentFooter>
      </S.Container>
    </S.Wrapper>
  )
}
