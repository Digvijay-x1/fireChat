import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OnboardingPage from './pages/OnboardingPage'
import NotificationPage from './pages/NotificationPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import CallPafe from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import PageLoader from './components/PageLoader'
import useAuthUser from '../hooks/useAuthUser'

const App = () => {

  const {isLoading, authUser} = useAuthUser();


  if(isLoading) return <PageLoader />

  const isAuthenticated = Boolean(authUser);

  const isOnboarded = authUser?.isOnboarded;

  


  return (
    <Routes>
      <Route path='/home' element={isAuthenticated && isOnboarded ?  <HomePage /> : <Navigate to={!isAuthenticated ? '/login' : '/onboarding'} /> } />
      <Route path='/onboarding' element={isAuthenticated ? <OnboardingPage /> : <Navigate to='/login' />} />
      <Route path='/notification' element={isAuthenticated ? <NotificationPage /> : <Navigate to='/login' />} />
      <Route path='/signup' element={!isAuthenticated ? <SignUpPage /> : <Navigate to='/home' />} />
      <Route path='/login' element={!isAuthenticated ? <LoginPage /> : <Navigate to='/home' />} />
      <Route path='/call' element={isAuthenticated ? <CallPafe /> : <Navigate to='/login' />} />
      <Route path='/chat' element={isAuthenticated ? <ChatPage /> : <Navigate to='/login' />} />
      <Route path='*' element={isAuthenticated ? <Navigate to='/home' /> : <Navigate to='/login' />} />
    </Routes>
  )
}

export default App