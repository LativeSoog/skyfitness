import * as S from './style'

export const TrainingBlock = ({ urlImg, link }) => {
  return (
    <S.SectionTraining to={link}>
      <S.ImgTraining src={urlImg} />
    </S.SectionTraining>
  )
}
