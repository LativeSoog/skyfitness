import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SectionTraining = styled(Link)`
  position: relative;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`

export const ImgTraining = styled.img`
  max-width: 360px;
  max-height: 480px;
  box-shadow: 10px -10px 16px 0px #0000001a;
  border-radius: 30px;

  @media (max-width: 768px) {
    width: 260px;
  }
`
export const TitleTraining = styled.p`
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 36px;
  font-weight: 800;
`
