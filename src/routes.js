import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './page/NotFound/NotFoundPage'
import { MainPage } from './page/Main/MainPage'
import { TrainingPage } from './page/Training/TrainingPage'
import { ProfilePage } from './page/Profile/ProfilePage'
import { SignUpPage } from './page/SignUp/SignUpPage'
import { LoginPage } from './page/LogIn/LoginPage'
import { TrainingVideoPage } from './page/TrainingVideo/TrainingVideoPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route index element={<MainPage />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/training-video" element={<TrainingVideoPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
