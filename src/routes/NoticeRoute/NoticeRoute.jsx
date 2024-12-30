import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NoticePage from '../../pages/NoticePage/NoticePage';

function NoticeRoute() {
  return (
    <>
        <Routes>
            <Route path='/notice' element={<NoticePage />} />
        </Routes>
    </>
  )
}

export default NoticeRoute;