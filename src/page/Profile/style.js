import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 30px;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 94px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`
export const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 140px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }
`

export const Personal = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Name = styled.p`
  margin-left: 15px;
  margin-right: 12px;
`

export const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 48px;
  color: #000;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const InfoBlock = styled.div``

export const TextInfo = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  color: #000;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 61px;
`

export const Button = styled.button`
  width: 275px;
  height: 52px;
  border: none;
  border-radius: 46px;
  padding: 12px 43px;
  background-color: #580ea2;
  color: #fff;
  font-size: 18px;
  margin-bottom: 15px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #3f007d;
  }
  &:active {
    background-color: #271a58;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    width: 150px;
    height: 36px;
    padding: 0 15px;
  }
`

export const PopupLogin = styled.div`
  --modal-width: 366px;
  --modal-height: 331px;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  border: 1px solid #d0cece;
  border-radius: 12px;
  padding: 33px 47px 47px 41px;
  background-color: #fff;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;
`

export const LoginLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: transparent;
`

export const TitleInput = styled.p`
  font-size: 18px;
  margin-top: 38px;
`

export const TextExit = styled(TitleInput)`
  text-align: center;
  margin-bottom: 35px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 5px;
  font-style: normal;
  font-size: 18px;

  &::placeholder {
    font-style: normal;

    font-size: 18px;
    color: #d0cece;
  }
`

export const PopupPassword = styled(PopupLogin)`
  height: 401px;
`

export const CourseBlock = styled.div`
  padding-bottom: 200px;
`

export const CourseItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 480px) {
    gap: 20px;
  }
`

export const Item = styled.div`
  position: relative;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`

export const ItemTitle = styled.h2`
  position: absolute;
  font-size: 36px;
  top: 30px;
  left: 30px;
`

export const ItemImg = styled.img`
  width: 360px;
  height: 480px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media (max-width: 768px) {
    width: 270px;
    height: 360px;
  }
  @media (max-width: 480px) {
    width: 210px;
    height: 280px;
  }
`
export const GreenButton = styled.button`
  width: 136px;
  height: 43px;
  border: 0;
  border-radius: 80px;
  padding: 10px 15px;
  background-color: #c7e957;
  font-size: 20px;
  position: absolute;
  bottom: 30px;
  left: 30px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #daf289;
  }
  &:active {
    background-color: #ebffab;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    width: 72px;
    height: 25px;
    padding: 0 5px;
  }
`

export const BlackoutWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const PopupWorkout = styled.div`
  --modal-width: 444;
  --modal-height: 626;
  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  border-radius: 12px;
  padding: 36px 54px 58px 54px;
  border: 1px solid #d0cece;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  @media (max-width: 768px) {
    width: 330px;
    height: 495px;
    padding: 20px;
  }
  @media (max-width: 480px) {
    width: 220px;
    height: 300px;
    padding: 12px;
  }
`

export const TitleWorkout = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`

export const ListWorkout = styled.ul`
  list-style-type: none;
  overflow: auto;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`

export const WorkoutItem = styled.li`
  border: 1px solid #000;
  border-radius: 26px;
  padding: 15px;
  margin-bottom: 12px;
  text-align: center;
  position: relative;
  cursor: pointer;
  ${(props) =>
    props.$active &&
    `
    color: #06B16E;
    border: 1px solid #06B16E;
    `}
  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 8px;
  }
  @media (max-width: 480px) {
    padding: 5px;
    margin-bottom: 5px;
  }
`
export const WorkoutName = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 3px;
  }
`

export const WorkoutImg = styled.img`
  position: absolute;
  top: 10px;
  right: 15px;
  @media (max-width: 768px) {
    width: 20px;
    heigth: 20px;
  }
  @media (max-width: 480px) {
    top: 5px;
    right: 10px;
    width: 15px;
    heigth: 15px;
  }
`

export const WorkoutText = styled.p`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 9px;
  }
`
