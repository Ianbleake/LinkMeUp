import { Home } from '@/Pages/Home';
import React from 'react'
import { Routes, Route } from "react-router";

export const Router = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}
