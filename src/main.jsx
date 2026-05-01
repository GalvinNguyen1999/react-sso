// Author: TrungQuanDev | https://youtube.com/@trungquandev
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { RENDER_API_ROOT } from './utils/constants.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-enohvc7egd1m41wp.us.auth0.com'
    clientId='IfLk2S56b0VOcTUdJhReXQaNj4GCxCSE'
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: RENDER_API_ROOT
    }}
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    // cacheLocation='localstorage'
    cookieDomain='.cuong.local'
  >
    <App />
  </Auth0Provider>
)
