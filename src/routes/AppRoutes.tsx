import { Route, Routes } from 'react-router-dom'
import { DocCleanupGuide, DocComponentDetail, DocOverview, DocReactDafn, Home, Login, NotFound } from '../pages'
import { paths } from './paths'

export const AppRoutes = () => (
  <Routes>
    <Route path={paths.home} element={<Home />} />
    <Route path={paths.login} element={<Login />} />
    <Route path={paths.docReactDafn} element={<DocReactDafn />}>
      <Route index element={<DocOverview />} />
      <Route path="como-remover" element={<DocCleanupGuide />} />
      <Route path=":slug" element={<DocComponentDetail />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
