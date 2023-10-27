import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import { useDispatch } from 'react-redux'
import { setNewLogin, setNewPassword } from '../../store/slices/userSlice'
import { useAuth } from '../../hooks/use-auth'
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth'

export const ProfilePage = () => {
  const [openEditLogin, setOpenEditLogin] = React.useState(false)
  const [openFormOldPassword, setOpenFormOldPassword] = React.useState(false)
  const [openEditPassword, setOpenEditPassword] = React.useState(false)
  const [openWorkoutSelection, setOpenWorkoutSelection] = React.useState(false)
  const { email, login, password } = useAuth()

  const handleClickEditLogin = () => {
    document.body.style.overflow = 'hidden'
    setOpenEditLogin(true)
  }
  const handleClickEditPassword = () => {
    document.body.style.overflow = 'hidden'
    setOpenFormOldPassword(true)
  }

  const handleClickGreenButton = () => {
    document.body.style.overflow = 'hidden'
    setOpenWorkoutSelection(true)
  }

  return (
    <>
      {openEditLogin && <NewLoginForm setOpenEditLogin={setOpenEditLogin} />}
      {openFormOldPassword && (
        <OldPasswordForm
          setOpenFormOldPassword={setOpenFormOldPassword}
          setOpenEditPassword={setOpenEditPassword}
        />
      )}
      {openEditPassword && (
        <NewPasswordForm setOpenEditPassword={setOpenEditPassword} />
      )}
      {openWorkoutSelection && (
        <WorkoutSelectionForm
          setOpenWorkoutSelection={setOpenWorkoutSelection}
        />
      )}
      <S.ProfileBlock>
        <S.Title>Мой профиль</S.Title>
        <S.InfoBlock>
          <S.TextInfo>Логин: {login ? login : email}</S.TextInfo>
          <S.TextInfo>Пароль: {password ? password : '●●●●●●●●'}</S.TextInfo>
        </S.InfoBlock>
        <S.ButtonBlock>
          <S.Button onClick={handleClickEditLogin}>
            Редактировать логин
          </S.Button>
          <S.Button onClick={handleClickEditPassword}>
            Редактировать пароль
          </S.Button>
        </S.ButtonBlock>
      </S.ProfileBlock>

      <S.CourseBlock>
        <S.Title>Мои курсы</S.Title>
        <S.CourseItems>
          <S.Item>
            <S.ItemImg src="img/card-course/card-yoga1.jpeg" alt="card-yoga" />
            <S.ItemTitle>Йога</S.ItemTitle>
            <S.GreenButton onClick={handleClickGreenButton}>
              Перейти
            </S.GreenButton>
          </S.Item>

          <S.Item>
            <S.ItemImg
              src="img/card-course/card-stretching1.jpeg"
              alt="card-yoga"
            />
            <S.ItemTitle>Стретчинг</S.ItemTitle>
            <S.GreenButton onClick={handleClickGreenButton}>
              Перейти
            </S.GreenButton>
          </S.Item>

          <S.Item>
            <S.ItemImg
              src="img/card-course/card-bodyflex1.jpeg"
              alt="card-yoga"
            />
            <S.ItemTitle>Бодифлекс</S.ItemTitle>
            <S.GreenButton onClick={handleClickGreenButton}>
              Перейти
            </S.GreenButton>
          </S.Item>
        </S.CourseItems>
      </S.CourseBlock>
    </>
  )
}

const NewLoginForm = ({ setOpenEditLogin }) => {
  const dispatch = useDispatch()
  const { email, login } = useAuth()
  const [newLog, setNewLog] = React.useState(login ? login : email)

  const saveNewLogin = () => {
    setNewLog(newLog)
    dispatch(setNewLogin(newLog))
    localStorage.setItem('login', JSON.stringify(newLog))
    setOpenEditLogin(false)
  }

  const closeWindow = () => {
    document.body.style.overflow = null
    setOpenEditLogin(false)
  }

  const handleClickSaveLogin = () => {
    document.body.style.overflow = null
    saveNewLogin()
  }

  const handleClickBlackout = () => {
    closeWindow()
  }
  const handleClickForm = (event) => {
    event.stopPropagation()
  }

  return (
    <S.BlackoutWrapper onClick={handleClickBlackout}>
      <S.PopupLogin onClick={(event) => handleClickForm(event)}>
        <S.closeWindow src="/img/close.svg" onClick={closeWindow} />
        <S.LoginLogo>
          <img width={220} height={35} src="img/logo-dark.svg" alt="logo" />
        </S.LoginLogo>
        <S.Inputs>
          <S.TitleInput>Новый логин:</S.TitleInput>
          <S.Input
            type="text"
            placeholder="Логин"
            value={newLog}
            onChange={(e) => setNewLog(e.target.value)}
          />
        </S.Inputs>
        <S.Button disabled={!newLog.trim()} onClick={handleClickSaveLogin}>
          Сохранить
        </S.Button>
      </S.PopupLogin>
    </S.BlackoutWrapper>
  )
}

const OldPasswordForm = ({ setOpenFormOldPassword, setOpenEditPassword }) => {
  const [oldPass, setOldPass] = React.useState('')
  const [errorPassword, setErrorPassword] = React.useState(false)

  const checkOldPassword = () => {
    const auth = getAuth()
    const user = auth.currentUser

    const credential = EmailAuthProvider.credential(user.email, oldPass)

    reauthenticateWithCredential(user, credential)
      .then(() => {
        console.log('User re-authenticated.')
        setOpenFormOldPassword(false)
        setOpenEditPassword(true)
      })
      .catch((error) => {
        setErrorPassword(true)
      })
  }

  const closeWindow = () => {
    document.body.style.overflow = null
    setOpenFormOldPassword(false)
  }

  const handleClickBlackout = () => {
    closeWindow()
  }
  const handleClickForm = (event) => {
    event.stopPropagation()
  }

  return (
    <S.BlackoutWrapper onClick={handleClickBlackout}>
      <S.PopupLogin onClick={(event) => handleClickForm(event)}>
        <S.closeWindow src="/img/close.svg" onClick={closeWindow} />
        <S.LoginLogo>
          <img width={220} height={35} src="img/logo-dark.svg" alt="logo" />
        </S.LoginLogo>
        <S.Inputs>
          <S.TitleInput>Введите старый пароль:</S.TitleInput>
          <S.Input
            type="text"
            placeholder="Старый пароль"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
        </S.Inputs>
        {errorPassword && (
          <p
            style={{
              color: 'tomato',
              marginTop: '-20px',
              marginBottom: '10px',
            }}
          >
            Неверный пароль
          </p>
        )}
        <S.Button disabled={!oldPass.trim()} onClick={() => checkOldPassword()}>
          Далее
        </S.Button>
      </S.PopupLogin>
    </S.BlackoutWrapper>
  )
}

const NewPasswordForm = ({ setOpenEditPassword }) => {
  const dispatch = useDispatch()
  const [newPass, setNewPass] = React.useState('')
  const [repeatNewPass, setRepeatNewPass] = React.useState('')

  const saveNewPassword = () => {
    const auth = getAuth()
    const user = auth.currentUser

    updatePassword(user, newPass)
      .then(() => {
        document.body.style.overflow = null
        dispatch(setNewPassword(newPass))
        setOpenEditPassword(false)
        console.log('Пароль успешно изменен')
      })
      .catch((error) => {
        console.log('Ошибка при смене пароля')
      })
  }

  const closeWindow = () => {
    document.body.style.overflow = null
    setOpenEditPassword(false)
  }

  const handleClickBlackout = () => {
    closeWindow()
  }
  const handleClickForm = (event) => {
    event.stopPropagation()
  }

  return (
    <S.BlackoutWrapper onClick={handleClickBlackout}>
      <S.PopupPassword onClick={(event) => handleClickForm(event)}>
        <S.closeWindow src="/img/close.svg" onClick={closeWindow} />
        <S.LoginLogo>
          <img width={220} height={35} src="img/logo-dark.svg" alt="logo" />
        </S.LoginLogo>
        <S.Inputs>
          <S.TitleInput>Новый пароль:</S.TitleInput>
          <S.Input
            type="text"
            placeholder="Пароль"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          <S.Input
            type="text"
            placeholder="Повторите пароль"
            value={repeatNewPass}
            onChange={(e) => setRepeatNewPass(e.target.value)}
          />
        </S.Inputs>
        {newPass !== repeatNewPass ? (
          <S.WarningMessage>Пароли не совпадают</S.WarningMessage>
        ) : (
          <S.Button
            disabled={!newPass.trim() && !repeatNewPass.trim()}
            onClick={() => saveNewPassword()}
          >
            Сохранить
          </S.Button>
        )}
      </S.PopupPassword>
    </S.BlackoutWrapper>
  )
}

const WorkoutSelectionForm = ({ setOpenWorkoutSelection }) => {
  const closeWindow = () => {
    document.body.style.overflow = null
    setOpenWorkoutSelection(false)
  }

  const handleClickBlackout = () => {
    closeWindow()
  }
  const handleClickForm = (event) => {
    event.stopPropagation()
  }
  const handleClickLink = () => {
    document.body.style.overflow = null
  }
  return (
    <S.BlackoutWrapper onClick={handleClickBlackout}>
      <S.PopupWorkout onClick={(event) => handleClickForm(event)}>
        <S.closeWindow src="/img/close.svg" onClick={closeWindow} />
        <S.TitleWorkout>Выберите тренировку</S.TitleWorkout>
        <Link onClick={handleClickLink} to="/training-video">
          <S.ListWorkout>
            <S.WorkoutItem $active>
              <S.WorkoutName>Утренняя практика</S.WorkoutName>
              <S.WorkoutImg src="img/icon-done.svg" alt="done" />
              <S.WorkoutText>Йога на каждый день / 1 день </S.WorkoutText>
            </S.WorkoutItem>
            <S.WorkoutItem $active>
              <S.WorkoutName>Красота и здоровье</S.WorkoutName>
              <S.WorkoutImg src="img/icon-done.svg" alt="done" />
              <S.WorkoutText>Йога на каждый день / 2 день </S.WorkoutText>
            </S.WorkoutItem>
            <S.WorkoutItem>
              <S.WorkoutName>Асаны стоя</S.WorkoutName>
              <S.WorkoutText>Йога на каждый день / 3 день </S.WorkoutText>
            </S.WorkoutItem>
            <S.WorkoutItem>
              <S.WorkoutName>Растягиваем мышцы бедра</S.WorkoutName>
              <S.WorkoutText>Йога на каждый день / 4 день </S.WorkoutText>
            </S.WorkoutItem>
            <S.WorkoutItem>
              <S.WorkoutName>Гибкость спины</S.WorkoutName>
              <S.WorkoutText>Йога на каждый день / 5 день </S.WorkoutText>
            </S.WorkoutItem>
          </S.ListWorkout>
        </Link>
      </S.PopupWorkout>
    </S.BlackoutWrapper>
  )
}
