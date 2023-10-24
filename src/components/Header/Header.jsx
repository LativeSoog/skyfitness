import { useState } from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import { removeUser } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux'

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [exitForm, setExitForm] = useState(false)
  const { email, login } = useAuth()

  const handleClickExitForm = () => {
    document.body.style.overflow = 'hidden'
    setExitForm(true)
  }

  return (
    <>
      <S.Header>
        <Link to="/profile">
          <S.HeaderLogo to={'/'}>
            <S.HeaderLogoImg src="/img/logo-dark.svg" alt="logo" />
          </S.HeaderLogo>
        </Link>
        {exitForm && <ExitForm setExitForm={setExitForm} />}
        {isLogin ? (
          <S.Personal onClick={handleClickExitForm}>
            <img src="img/avatar.svg" alt="avatar" />
            <S.Name>{login ? login : email}</S.Name>
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
  const { email, login } = useAuth()

  const handleClickExitForm = () => {
    document.body.style.overflow = 'hidden'
    setExitForm(true)
  }
  return (
    <>
      <S.Header>
        <S.HeaderLogo to={'/'}>
          <S.HeaderLogoImg src="/img/logo-light.svg" alt="logo" />
        </S.HeaderLogo>
        {exitForm && <ExitForm setExitForm={setExitForm} />}
        {isLogin ? (
          <S.Personal onClick={handleClickExitForm}>
            <img src="img/avatar.svg" alt="avatar" />
            <S.NameLight>{login ? login : email}</S.NameLight>
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
  const dispatch = useDispatch()
  const { email, login } = useAuth()

  const closeWindow = () => {
    document.body.style.overflow = null
    setExitForm(false)
  }

  const handleClickForm = (event) => {
    event.stopPropagation()
  }

  const handleClickLogout = () => {
    document.body.style.overflow = null
    dispatch(removeUser())
  }

  return (
    <S.BlackoutWrapper onClick={closeWindow}>
      <S.PopupLogin onClick={(event) => handleClickForm(event)}>
        <S.closeWindow src="/img/close.svg" onClick={closeWindow} />
        <S.HeaderLogo>
          <S.HeaderLogoImg src="/img/logo-dark.svg" alt="logo" />
        </S.HeaderLogo>
        <S.TextExit>
          Вы действительно хотите выйти из аккаунта: <br />
          <Link to="/profile">
            <b onClick={closeWindow}>{login ? login : email}</b>
          </Link>
          ?
        </S.TextExit>
        <S.Button onClick={handleClickLogout}>Выйти</S.Button>
      </S.PopupLogin>
    </S.BlackoutWrapper>
  )
}
