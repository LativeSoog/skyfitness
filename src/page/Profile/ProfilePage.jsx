import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export const ProfilePage = () => {
  const [newLogin, setNewLogin] = React.useState(false)
  const [newPassword, setNewPassword] = React.useState(false)
  return (
    <S.Main>
      <S.Header>
        <Link to="/">
          <img src="img/logo-black.png" alt="logo" />
        </Link>
        <S.Personal>
          <img src="img/avatar.svg" alt="avatar" />
          <S.Name>Сергей</S.Name>
          <img src="img/arrow-down.svg" alt="arrow-down" />
        </S.Personal>
      </S.Header>
      <S.ProfileBlock>
        <S.Title>Мой профиль</S.Title>
        <S.InfoBlock>
          <S.TextInfo>Логин: sergey.petrov96</S.TextInfo>
          <S.TextInfo>Пароль: 4fkhdj880d</S.TextInfo>
        </S.InfoBlock>
        <S.ButtonBlock>
          <S.Button onClick={() => setNewLogin(true)}>
            Редактировать логин
          </S.Button>
          {newLogin && (
            <S.PopupLogin>
              <S.LoginLogo>
                <img
                  width={220}
                  height={35}
                  src="img/logo-black.png"
                  alt="logo"
                />
              </S.LoginLogo>
              <S.Inputs>
                <S.TitleInput>Новый логин:</S.TitleInput>
                <S.Input type="text" placeholder="Логин" />
              </S.Inputs>
              <S.Button onClick={() => setNewLogin(false)}>Сохранить</S.Button>
            </S.PopupLogin>
          )}
          <S.Button onClick={() => setNewPassword(true)}>
            Редактировать пароль
          </S.Button>
          {newPassword && (
            <S.PopupPassword>
              <S.LoginLogo>
                <img
                  width={220}
                  height={35}
                  src="img/logo-black.png"
                  alt="logo"
                />
              </S.LoginLogo>
              <S.Inputs>
                <S.TitleInput>Новый пароль:</S.TitleInput>
                <S.Input type="text" placeholder="Пароль" />
                <S.Input type="text" placeholder="Повторите пароль" />
              </S.Inputs>
              <S.Button onClick={() => setNewPassword(false)}>
                Сохранить
              </S.Button>
            </S.PopupPassword>
          )}
        </S.ButtonBlock>
      </S.ProfileBlock>
      <S.CourseBlock>
        <S.Title>Мои курсы</S.Title>
        <S.CourseItems>
          <Link to="/training-video">
            <S.Item src="img/card-yoga.png" alt="card-yoga" />
          </Link>
          <Link to="/training-video">
            <S.Item src="img/card-stretching.png" alt="card-stretching" />
          </Link>
          <Link to="/training-video">
            <S.Item src="img/card-bodyflex.png" alt="card-bodyflex" />
          </Link>
        </S.CourseItems>
      </S.CourseBlock>
    </S.Main>
  )
}
