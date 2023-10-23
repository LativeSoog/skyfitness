import { useState } from 'react'
import * as S from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import { removeUser } from '../../store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { getAuth, signOut } from 'firebase/auth'
import { auth } from '../../firebase'

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [exitForm, setExitForm] = useState(false)
  const { email, login } = useAuth()

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
          <S.Personal onClick={() => setExitForm(true)}>
            <img src="img/avatar.svg" alt="avatar" />
            <S.Name>
              {login ? login : JSON.parse(localStorage.getItem('user')).email}
            </S.Name>
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
  let navigate = useNavigate()
  const auth = getAuth()

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <S.BlackoutWrapper>
      <S.PopupLogin>
        <S.HeaderLogo>
          <S.HeaderLogoImg src="/img/logo-dark.svg" alt="logo" />
        </S.HeaderLogo>
        <S.TextExit>
          Вы действительно хотите выйти из аккаунта: <br />
          <Link to="/profile">
            <b onClick={() => setExitForm(false)}>
              {login ? login : JSON.parse(localStorage.getItem('user')).email}
            </b>
          </Link>
          ?
        </S.TextExit>
        <S.Button
          onClick={() => {
            logout()
            dispatch(removeUser())
            localStorage.removeItem('user')
            navigate('/login')
          }}
        >
          Выйти
        </S.Button>
        <S.Button onClick={() => setExitForm(false)}>Назад</S.Button>
      </S.PopupLogin>
    </S.BlackoutWrapper>
  )
}
