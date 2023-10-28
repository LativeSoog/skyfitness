import { Link, useParams } from 'react-router-dom'
import * as S from './styles'
import { TrainingSkillSkeleton } from '../../components/Skeletons/ТrainingSkillSkeleton'
import React, { useEffect, useState } from 'react'
import { getWorkout } from '../../api'
import { useAuth } from '../../hooks/use-auth'

export const TrainingPage = ({ courses }) => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [dataCourse, setDataCourses] = useState(null)

  const param = useParams()
  let scills = Object.values(courses).find((course) => course.id === param.id)

  const userId = useAuth().id

  useEffect(() => {
    const fetchData = () => {
      getWorkout()
        .then((data) => {
          for (let item in data) {
            if (data[item]._id === param.id) {
              setDataCourses(data[item])
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching workout data:', error)
        })
    }
    fetchData()

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isLoading ? (
        <>
          <TrainingSkillSkeleton />
        </>
      ) : (
        <>
          <S.ScillCard>
            <S.ScillImg src="/img/Group.jpg" alt="scill"></S.ScillImg>
            <S.ScillTitle>{scills?.name}</S.ScillTitle>
          </S.ScillCard>

          <S.ScillDescription>
            <S.ScillDescriptionTitle>
              Подойдет для вас, если:
            </S.ScillDescriptionTitle>

            <S.Description>
              <S.DescriptionTextOne>
                <S.Circle>1</S.Circle>
                <S.DescriptionText>{scills?.towards[0]}</S.DescriptionText>
              </S.DescriptionTextOne>

              <S.DescriptionTextOne>
                <S.Circle>2</S.Circle>
                <S.DescriptionText>{scills?.towards[1]}</S.DescriptionText>
              </S.DescriptionTextOne>

              <S.DescriptionTextOne>
                <S.Circle>3</S.Circle>
                <S.DescriptionText>{scills?.towards[2]}</S.DescriptionText>
              </S.DescriptionTextOne>
            </S.Description>
          </S.ScillDescription>

          <S.DirectionConteiner>
            <S.DescriptionText>Направления:</S.DescriptionText>
            <S.YogaDirection>
              <S.Direct>
                {scills?.directions.map((item, index) => (
                  <S.YogaText key={index}>{item}</S.YogaText>
                ))}
              </S.Direct>
            </S.YogaDirection>
          </S.DirectionConteiner>
          <S.DiscriptionYoga>
            <S.TextDiscriptionYoga>{scills?.description}</S.TextDiscriptionYoga>
          </S.DiscriptionYoga>

          {!dataCourse.users.find((obj) => obj.userId === userId) ? (
            <S.RecordBox>
              <S.RecordText>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
                с выбором направления и тренера, с которым тренировки принесут
                здоровье и радость!
              </S.RecordText>
              <Link to={'/profile'}>
                <S.btnRecord>Записаться на тренировку</S.btnRecord>
              </Link>

              <S.PhoneImg src="/img/phone.svg" alt="phone" />
            </S.RecordBox>
          ) : (
            <Link to={'/profile'}>
              <S.goToProfile>перейти в профиль</S.goToProfile>
            </Link>
          )}
        </>
      )}
    </div>
  )
}
