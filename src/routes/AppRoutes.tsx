import { Route, Routes } from 'react-router-dom'
import { Home, Login, NotFound } from '../pages'
import { paths } from './paths'

export const AppRoutes = () => (
  <Routes>
    <Route path={paths.home} element={<Home />} />
    <Route path={paths.login} element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)
