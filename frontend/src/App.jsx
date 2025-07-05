import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OnboardingPage from './pages/OnboardingPage'
import NotificationPage from './pages/NotificationPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import CallPafe from './pages/CallPage'
import ChatPage from './pages/ChatPage'

const App = () => {

  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/onboarding' element={<OnboardingPage />} />
      <Route path='/notification' element={<NotificationPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/call' element={<CallPafe />} />
      <Route path='/chat' element={<ChatPage />} />
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  )
}

export default App