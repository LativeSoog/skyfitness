import * as S from './style/AppStyle'
import { AppRoutes } from './routes'
import { useEffect, useState } from 'react'
import { getCourses } from './api'

function App() {
  const [courses, setCourses] = useState({})
  
  useEffect(() => {
    getCourses()
      .then((courses) => {
        console.log(courses)
        setCourses(courses)
      })
      .catch((error) => alert(error))
  }, [])

  return (
    <>
      <S.StyLeGlobal />
      <AppRoutes courses={courses} />
    </>
  )
}

export default App
