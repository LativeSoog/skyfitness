import styled from 'styled-components'

export const Main = styled.div`
  padding: 0 140px;
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
`

export const Item = styled.img`
  width: 360px;
  height: 480px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: 270px;
    height: 360px;
  }
  @media (max-width: 480px) {
    width: 210px;
    height: 280px;
  }
`

export const Wrapper = styled.div``

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
`

export const TitleWorkout = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 40px;
`

export const ListWorkout = styled.ul`
  list-style-type: none;
  overflow: auto;
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
`
export const WorkoutName = styled.h3`
  font-size: 20px;
  margin-bottom: 6px;
`

export const WorkoutImg = styled.img`
  position: absolute;
  top: 10px;
  right: 15px;
`

export const WorkoutText = styled.p`
  font-size: 16px;
`
