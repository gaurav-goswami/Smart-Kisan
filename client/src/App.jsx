import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CommodityPricePage from './pages/CommodityPricePage'
import LabTestPage from './pages/LabTestPage'
import SellCommodityPage from './pages/SellCommodityPage'
import BuyCommodityPage from './pages/BuyCommodityPage'
import StorePage from './pages/StorePage'
import EducationPage from './pages/EducationPage'
import TipsPage from './pages/TipsPage'
import NewsPage from './pages/NewsPage'
import ErrorPage from './pages/ErrorPage'
import ColdStorage from './pages/ColdStorage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import VerifyEmail from './pages/VerifyEmail'

import HomeRedirect from './Redirect/HomeRedirect'
import LoginRedirect from './Redirect/LoginRedirect'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<HomeRedirect />}>
            <Route path='/auth/login' element={<LoginPage />}/>
            <Route path='/auth/verify-email' element={<VerifyEmail />}/>
            <Route path='/auth/signup' element={<SignUpPage />}/>  
          </Route>

          <Route element={<LoginRedirect />}>
            <Route path='/commodity/sell-commodity' element={<SellCommodityPage />}/>
            <Route path='/commodity/buy-commodity' element={<BuyCommodityPage />}/>
            <Route path='/commodity/commodity-price' element={<CommodityPricePage />}/>
            <Route path='/farmer/store' element={<StorePage />}/>
          </Route>

          <Route path='/' element={<HomePage />}/>
          <Route path='/lab-test' element={<LabTestPage />}/>
          <Route path='/cold-storage' element={<ColdStorage />}/>
          <Route path='/farmer/education' element={<EducationPage />}/>
          <Route path='/farming/tips' element={<TipsPage />}/>
          <Route path='/farming/news' element={<NewsPage />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
