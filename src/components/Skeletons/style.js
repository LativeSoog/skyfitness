
import styled, { keyframes } from 'styled-components'

export const HeaderSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const HeaderLogoSkeleton = styled.div`
    width: 280px;
    height: 30px;
background-color: rgba(255, 255, 255, 0.4);
animation: loading 1s infinite alternate;
`;

export const PersonalsSkeleton = styled.div`
display: flex;
align-items: center;
gap:15px;
  
`;

export const PersonalLogo = styled.div`
  width: 50px; 
  height: 50px; 
  border-radius: 50%; 
  background-color: rgba(255, 255, 255, 0.4); 
  position: relative; 
  }
`;

export const NameSkeleton = styled.div`
width: 120px;
height: 18px;
background-color:rgba(255, 255, 255, 0.4);
animation: loading 1s infinite alternate;
`;


export const ContentDescriptionPreTitleSkeleton = styled.div`
  width: 350px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 25px;
  animation: loading 1s infinite alternate;
`;

export const ContentDescriptionTitleSkeleton = styled.div`
  width: 600px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 17px;
  animation: loading 1s infinite alternate;
`;

export const ContentDescriptionImgSkeleton = styled.div`
  width: 150px;
  height: 150px;
  background-color:  rgba(255, 255, 255, 0.4).;
  position: absolute;
  top: 0;
  right: -50px;
  transform: rotate(15deg);
  animation: loading 1s infinite alternate;
`;

export const TrainingBlockSkeleton = styled.div`
  width: 350px;
  height: 470px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 52px;
  border-radius: 30px;
  animation: loading 1s infinite alternate;
`;

export const ContentFooterButtonSkeleton = styled.div`
  width: 150px;
  height: 48px;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius:46px;
  animation: loading 1s infinite alternate;
`;

export const loading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`
export const ContentDescriptionTitleImg = styled.div`
  position: relative;
`
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #271a58;
`
export const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 0 140px;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`

export const ContentDescription = styled.div`
padding-top: 35px;
`

export const ContentDescriptionPreTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  padding-top: 35px;
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




