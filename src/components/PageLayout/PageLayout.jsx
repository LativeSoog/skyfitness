import * as S from './style'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />

        <Outlet />
      </S.Container>
    </S.Wrapper>
  )
}
