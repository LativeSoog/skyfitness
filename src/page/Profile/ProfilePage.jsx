import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

export const ProfilePage = () => {
  const [newLogin, setNewLogin] = React.useState(false)
  const [newPassword, setNewPassword] = React.useState(false)
  const [workoutSelection, setWorkoutSelection] = React.useState(false)

  return (
    <>
      {newLogin && <NewLoginForm setNewLogin={setNewLogin} />}
      {newPassword && <NewPasswordForm setNewPassword={setNewPassword} />}
      {workoutSelection && (
        <WorkoutSelectionForm setWorkoutSelection={setWorkoutSelection} />
      )}
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
          <S.Button onClick={() => setNewPassword(true)}>
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
            <S.GreenButton onClick={() => setWorkoutSelection(true)}>
              Перейти →
            </S.GreenButton>
          </S.Item>
          <S.Item>
            <S.ItemImg
              src="img/card-course/card-stretching1.jpeg"
              alt="card-yoga"
            />
            <S.ItemTitle>Стретчинг</S.ItemTitle>
            <S.GreenButton onClick={() => setWorkoutSelection(true)}>
              Перейти →
            </S.GreenButton>
          </S.Item>
          <S.Item>
            <S.ItemImg
              src="img/card-course/card-bodyflex1.jpeg"
              alt="card-yoga"
            />
            <S.ItemTitle>Бодифлекс</S.ItemTitle>
            <S.GreenButton onClick={() => setWorkoutSelection(true)}>
              Перейти →
            </S.GreenButton>
          </S.Item>
        </S.CourseItems>
      </S.CourseBlock>
    </>
  )
}

const NewLoginForm = ({ setNewLogin }) => {
  return (
    <S.BlackoutWrapper>
      <S.PopupLogin>
        <S.LoginLogo>
          <img width={220} height={35} src="img/logo-dark.svg" alt="logo" />
        </S.LoginLogo>
        <S.Inputs>
          <S.TitleInput>Новый логин:</S.TitleInput>
          <S.Input type="text" placeholder="Логин" />
        </S.Inputs>
        <S.Button onClick={() => setNewLogin(false)}>Сохранить</S.Button>
      </S.PopupLogin>
    </S.BlackoutWrapper>
  )
}

const NewPasswordForm = ({ setNewPassword }) => {
  return (
    <S.BlackoutWrapper>
      <S.PopupPassword>
        <S.LoginLogo>
          <img width={220} height={35} src="img/logo-dark.svg" alt="logo" />
        </S.LoginLogo>
        <S.Inputs>
          <S.TitleInput>Новый пароль:</S.TitleInput>
          <S.Input type="text" placeholder="Пароль" />
          <S.Input type="text" placeholder="Повторите пароль" />
        </S.Inputs>
        <S.Button onClick={() => setNewPassword(false)}>Сохранить</S.Button>
      </S.PopupPassword>
    </S.BlackoutWrapper>
  )
}

const WorkoutSelectionForm = ({ setWorkoutSelection }) => {
  return (
    <S.BlackoutWrapper>
      <S.PopupWorkout>
        <S.TitleWorkout>Выберите тренировку</S.TitleWorkout>
        <Link to="/training-video">
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
        <S.Button onClick={() => setWorkoutSelection(false)}>Назад</S.Button>
      </S.PopupWorkout>
    </S.BlackoutWrapper>
  )
}
