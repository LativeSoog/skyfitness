import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`
export const HeaderLogo = styled(Link)``

export const HeaderLogoImg = styled.img``

export const HeaderSectionButton = styled.div``

export const HeaderButton = styled.button`
  width: 77px;
  height: 35px;
  border: none;
  border-radius: 46px;
  padding: 7px 16px;
  background-color: #140d40;
  color: #fff;

  &:hover {
    background-color: #2d1f79;
  }

  &:active {
    background-color: #3b29a1;
  }
`

export const HeaderButtonLink = styled(Link)``

export const Personal = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Name = styled.p`
  margin-left: 15px;
  margin-right: 12px;
`

export const NameLight = styled.p`
  color: #fff;
  margin-left: 15px;
  margin-right: 12px;
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

export const TextExit = styled.p`
  font-size: 18px;
  margin-top: 38px;
  text-align: center;
  margin-bottom: 35px;
  & b {
    color: #580ea2;
    text-decoration: underline;
  }
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
