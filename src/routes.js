import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './page/NotFound/NotFoundPage'
import { MainPage } from './page/Main/MainPage'
import { TrainingPage } from './page/Training/TrainingPage'
import { ProfilePage } from './page/Profile/ProfilePage'
import { SignUpPage } from './page/SignUp/SignUpPage'
import { LoginPage } from './page/LogIn/LoginPage'
import { TrainingVideoPage } from './page/TrainingVideo/TrainingVideoPage'
import { ChangePasswordPage } from './page/ChangePassword/ChangePasswordPage'
import { ChangeLoginPage } from './page/ChangeLogin/ChangeLoginPage'
import { PageLayout } from './components/PageLayout/PageLayout'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/" element={<PageLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/training-video" element={<TrainingVideoPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/password-change" element={<ChangePasswordPage />} />
      <Route path="/login-change" element={<ChangeLoginPage />} />
    </Routes>
  )
}
