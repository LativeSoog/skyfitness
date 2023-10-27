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

        <S.TrainingBlock>
          <TrainingBlock courses={courses} />
        </S.TrainingBlock>

        <S.ContentFooter>
          <S.ContentFooterButton onClick={handleClickGoToUp}>
            Наверх
          </S.ContentFooterButton>
        </S.ContentFooter>
      </S.Container>
    </S.Wrapper>
  )
}
