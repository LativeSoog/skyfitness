import { useState } from 'react'
import * as S from './style'

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [exitForm, setExitForm] = useState(false)
  return (
    <>
      <S.Header>
        <S.HeaderLogo to={'/'}>
          <S.HeaderLogoImg src="/img/logo-dark.svg" alt="logo" />
        </S.HeaderLogo>
        {exitForm && <ExitForm setExitForm={setExitForm} />}
        {isLogin ? (
          <S.Personal onClick={() => setExitForm(true)}>
            <img src="img/avatar.svg" alt="avatar" />
            <S.Name>Сергей</S.Name>
            <img src="img/arrow-down.svg" alt="arrow-down" />
          </S.Personal>
        ) : (
          <S.HeaderSectionButton>
            <S.HeaderButtonLink to="/login">
              <S.HeaderButton>Войти</S.HeaderButton>
            </S.HeaderButtonLink>
          </S.HeaderSectionButton>
        )}
      </S.Header>
    </>
  )
}

export const HeaderPurple = ({ nameColor = 'red' }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [exitForm, setExitForm] = useState(false)
  return (
    <>
      <S.Header>
        <S.HeaderLogo to={'/'}>
          <S.HeaderLogoImg src="/img/logo-light.svg" alt="logo" />
        </S.HeaderLogo>
        {exitForm && <ExitForm setExitForm={setExitForm} />}
        {isLogin ? (
          <S.Personal onClick={() => setExitForm(true)}>
            <img src="img/avatar.svg" alt="avatar" />
            <S.NameLight>Сергей</S.NameLight>
            <img src="img/arrow-down-light.svg" alt="arrow-down" />
          </S.Personal>
        ) : (
          <S.HeaderSectionButton>
            <S.HeaderButtonLink to="/login">
              <S.HeaderButton>Войти</S.HeaderButton>
            </S.HeaderButtonLink>
          </S.HeaderSectionButton>
        )}
      </S.Header>
    </>
  )
}

const ExitForm = ({ setExitForm }) => {
  return (
    <S.BlackoutWrapper>
      <S.PopupLogin>
        <S.HeaderLogo>
          <S.HeaderLogoImg src="/img/logo-light.svg" alt="logo" />
        </S.HeaderLogo>
        <S.TextExit>
          Вы действительно хотите выйти из аккаунта: <b>Сергей</b> ?{' '}
        </S.TextExit>
        <S.Button onClick={() => alert('Функция дорабатывается...')}>
          Выйти
        </S.Button>
        <S.Button onClick={() => setExitForm(false)}>Назад</S.Button>
      </S.PopupLogin>
    </S.BlackoutWrapper>
  )
}
