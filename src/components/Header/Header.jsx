import * as S from './style'

export const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderLogo>
          <S.HeaderLogoImg src="/img/logo-light.svg" alt="logo" />
        </S.HeaderLogo>

        <S.HeaderSectionButton>
          <S.HeaderButtonLink to="/login">
            <S.HeaderButton>Войти</S.HeaderButton>
          </S.HeaderButtonLink>
        </S.HeaderSectionButton>
      </S.Header>
    </>
  )
}
