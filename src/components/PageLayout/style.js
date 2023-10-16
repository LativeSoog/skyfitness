import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0 30px;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 94px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
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
