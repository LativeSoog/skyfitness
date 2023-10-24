import { Link } from 'react-router-dom'
import * as S from './styles'
export const TrainingPage = () => {
  return (
    <>
      <S.ScillCard>
        <S.ScillImg src="/img/Group.jpg" alt="scill"></S.ScillImg>
        <S.ScillTitle>Йога</S.ScillTitle>
      </S.ScillCard>

      <S.ScillDescription>
        <S.ScillDescriptionTitle>
          Подойдет для вас, если:
        </S.ScillDescriptionTitle>

        <S.Description>
          <S.DescriptionTextOne>
            <S.Circle>1</S.Circle>
            <S.DescriptionText>
              Давно хотели попробовать йогу, но не решались начать.
            </S.DescriptionText>
          </S.DescriptionTextOne>

          <S.DescriptionTextOne>
            <S.Circle>2</S.Circle>
            <S.DescriptionText>
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </S.DescriptionText>
          </S.DescriptionTextOne>

          <S.DescriptionTextOne>
            <S.Circle>3</S.Circle>
            <S.DescriptionText>
              Ищете активность, полезную для тела и души.
            </S.DescriptionText>
          </S.DescriptionTextOne>
        </S.Description>
      </S.ScillDescription>

      <S.DirectionConteiner>
        <S.DescriptionText>Направления:</S.DescriptionText>
        <S.YogaDirection>
          <ul>
            <S.YogaText>Йога для новичков</S.YogaText>
            <S.YogaText>Классическая йога</S.YogaText>
            <S.YogaText>Йогатерапия</S.YogaText>
          </ul>
          <ul>
            <S.YogaText>Кундалини-йога</S.YogaText>
            <S.YogaText>Хатха-йога</S.YogaText>
            <S.YogaText>Аштанга-йога</S.YogaText>
          </ul>
        </S.YogaDirection>
      </S.DirectionConteiner>
      <S.DiscriptionYoga>
        <S.TextDiscriptionYoga>
          Благодаря комплексному воздействию упражнений происходит проработка
          всех групп мышц, тренировка суставов, улучшается циркуляция крови.
          Кроме того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
        </S.TextDiscriptionYoga>
      </S.DiscriptionYoga>

      <S.RecordBox>
          <S.RecordText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </S.RecordText>
          <Link to={'/profile'}>
            <S.btnRecord>Записаться на тренировку</S.btnRecord>
          </Link>

        <S.PhoneImg src="/img/phone.svg" alt="phone" />
      </S.RecordBox>
    </>
  )
}
