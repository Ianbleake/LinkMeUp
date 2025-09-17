import React from 'react'
import { BrowserRouter } from "react-router";
import { Router } from './Routes';

export const Navigation = ():React.ReactElement => {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
}
