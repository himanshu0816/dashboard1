import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import { Documents } from './Screenwraper'




const ScreenPage = () => (
  <Routes>
    
      <Route
        path='documents'
        element={
          <>
            
            <Documents></Documents>
          </>
        }
      />
  </Routes>
)

export default ScreenPage
