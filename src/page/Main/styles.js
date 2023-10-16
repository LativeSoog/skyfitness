import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: scroll;
  background-color: #271a58;
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

export const ContentDescription = styled.div``

export const ContentDescriptionPreTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  padding-top: 35px;
`

export const ContentDescriptionTitleImg = styled.div`
  position: relative;
`

export const ContentDescriptionTitle = styled.h1`
  font-size: 60px;
  font-weight: 400;
  line-height: 55px;
  color: #f4f4f4;
  max-width: 840px;
  padding-top: 17px;
`

export const ContentDescriptionImg = styled.img`
  position: absolute;
  top: 0;
  right: -50px;
  transform: rotate(15deg);

  @media (max-width: 1285px) {
    display: none;
  }
`

export const TrainingBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 52px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const ContentFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 0 60px 0;
`

export const ContentFooterButton = styled.button`
  width: 150px;
  height: 48px;
  border: none;
  border-radius: 46px;
  padding: 7px 24px 9px 24px;
  background-color: #c7e957;
  font-size: 24px;
  font-weight: 400;
  color: #000;

  &:hover {
    background-color: #daf289;
  }

  &:active {
    background-color: #ebffab;
  }
`
