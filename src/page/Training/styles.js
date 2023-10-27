import styled from 'styled-components'

export const MainScills = styled.div`
  padding: 0 140px;
  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`
export const ScillCard = styled.div`
  position: relative;
  width: 100%;
  height: 310px;
  margin-top: 75px;
  @media (max-width: 480px) {
    height: 200px;
  }
`
export const ScillImg = styled.img`
  position: absolute;
  z-index: 0;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`
export const ScillTitle = styled.h1`
  position: absolute;
  z-index: 1;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 112.5% */
  letter-spacing: -0.8px;
  margin-top: 30px;
  margin-left: 30px;
`
export const ScillDescription = styled.div`
  margin-top: 75px;
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`
export const ScillDescriptionTitle = styled.h2`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
`
export const Description = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 87px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`
export const Circle = styled.div`
  border-radius: 1202.287px;
  background: #c7e957;
  display: flex;
  width: 45.6px;
  height: 45.6px;
  padding: 10.687px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13.359px;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`
export const DescriptionText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  width: 244px;
`
export const DescriptionTextOne = styled.div`
  display: flex;
  gap: 24px;
`
export const DirectionConteiner = styled.div`
  margin-top: 75px;
  margin-bottom: 22px;
`
export const DirectionText = styled.h3`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
`
export const YogaDirection = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 168px;
  margin-left: 25px;
  @media (max-width: 480px) {
    gap: 29px;
  }
`
export const YogaText = styled.li`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`
export const DiscriptionYoga = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
`
export const TextDiscriptionYoga = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`
export const RecordBox = styled.div`
  width: 100%;
  height: 300px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #f9ebff;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 95px;
  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`
export const Record = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 52px;
  @media (max-width: 480px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`
export const RecordText = styled.p`
  width: 100%;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 20px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 20px;
  }
`
export const btnRecord = styled.button`
  border-radius: 46px;
  background: var(--palette-purple-90, #580ea2);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: 'StratosSkyeng', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  margin-top: 34px;
  width: 275px;
  height: 52px;
  border: 0;
  :hover {
    background: #3f007d;
  }
`
export const PhoneImg = styled.img`
  @media (max-width: 480px) {
    display: none;
  }
`
export const Direct = styled.ul`
  list-style-position: inside;
  -webkit-column-count: 2;
`
