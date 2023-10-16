import * as S from './style'

export const TrainingBlock = ({ urlImg, link, nameCourse }) => {
  return (
    <S.SectionTraining to={link}>
      <S.ImgTraining src={urlImg} />
      <S.TitleTraining>{nameCourse}</S.TitleTraining>
    </S.SectionTraining>
  )
}
