import * as S from './style/AppStyle'
import { AppRoutes } from './routes'
import { onAuthStateChanged } from 'firebase/auth'
import { setUser } from './store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      setUser({
        id: JSON.parse(localStorage.getItem('user'))?.uid,
        email: JSON.parse(localStorage.getItem('user'))?.email,
        token: JSON.parse(localStorage.getItem('user'))?.stsTokenManager
          .accessToken,
      }),
    )
  }, [])

  return (
    <>
      <S.StyLeGlobal />
      <AppRoutes />
    </>
  )
}

export default App
