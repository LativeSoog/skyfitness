import * as S from './style/AppStyle'
import { AppRoutes } from './routes'
import { onAuthStateChanged } from 'firebase/auth'
import { setUser } from './store/slices/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { useEffect, useState } from 'react'
import { getCourses } from './api'
function App() {
  const dispatch = useDispatch()
  const [courses, setCourses] = useState({})
  useEffect(() => {
    getCourses().then((courses) => {
      setCourses(courses)
    })
    dispatch(
      setUser({
        id: JSON.parse(localStorage.getItem('user'))?.uid,
        email: JSON.parse(localStorage.getItem('user'))?.email,
        token: JSON.parse(localStorage.getItem('user'))?.stsTokenManager,
        login: JSON.parse(localStorage.getItem('login')),
      }),
    )
  }, [])

  return (
    <>
      <S.StyLeGlobal />
      <AppRoutes courses={courses} />
    </>
  )
}

export default App
