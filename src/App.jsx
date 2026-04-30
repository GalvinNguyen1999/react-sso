// Author: TrungQuanDev | https://youtube.com/@trungquandev
import './App.css'
import Dashboard from './pages/Dashboard'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { injectFn } from './utils/customAxios'

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  injectFn(getAccessTokenSilently)

  return (
    <div className="app-container">
      <div className="fixed-box">
        <h1>Auth0 SSO | TrungQuanDev</h1>
        <div className="actions">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        {/* Phần dashboard sau khi đăng nhập */}
        {/* <Dashboard /> */}
        {isAuthenticated && <Dashboard /> }
      </div>      
    </div>
  )
}

export default App
