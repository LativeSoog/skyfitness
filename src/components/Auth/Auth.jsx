import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as S from './styles.js'
import { useEffect, useState } from 'react'

export default function AuthPage({ isLoginMode = false }) {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [disable, setDisable] = useState(false)
  let navigate = useNavigate()

  const loginUser = () => {
    console.log('user logged in')
  }

  const registerUser = () => {
    console.log('user registered')
  }

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Заполните все поля')
      return
    }
    setDisable(true)
    loginUser()
    setDisable(false)
  }

  const handleRegister = async () => {
    if (!email || !password || !repeatPassword) {
      setError('Заполните все поля')
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    setDisable(true)
    registerUser()
    setDisable(false)
  }

  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo-dark.svg" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Логин"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              {disable ? (
                <p style={{ color: '#000' }}>Выполняется вход...</p>
              ) : (
                <S.PrimaryButton
                  onClick={() => handleLogin({ email, password })}
                >
                  Войти
                </S.PrimaryButton>
              )}

              <Link to="/signup">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              {disable ? (
                <p style={{ color: '#000' }}>Регистрируем пользователя...</p>
              ) : (
                <S.PrimaryButton onClick={handleRegister}>
                  Зарегистрироваться
                </S.PrimaryButton>
              )}
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
