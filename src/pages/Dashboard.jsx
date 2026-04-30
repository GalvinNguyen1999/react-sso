// Author: TrungQuanDev | https://youtube.com/@trungquandev
import ReactJson from 'react-json-view'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { RENDER_API_ROOT } from '../utils/constants'
import customAxiosInstance from '../utils/customAxios'

const Dashboard = () => {
  const { isLoading, user } = useAuth0()
  const [privateUsers, setPrivateUsers] = useState(null)

  useEffect(() => {
    const fetchPrivateUsers = async () => {
      try {
        const res = await customAxiosInstance.get(`${RENDER_API_ROOT}/api-v1/users/private/get_all`)
        setPrivateUsers(res.data)
      } catch (error) {
        console.error('Error fetching private users:', error)
      }
    }

    fetchPrivateUsers()
  }, [])

  return (
    <div className="dashboard">
      <div className="user-from-auth0">
        <div className="title">User from Auth0:</div>

        {isLoading ? <div className="loading">Loading...</div> : (
          <div className="preview-user">
            <img className="user-avatar" src={user?.picture} alt={user?.name} />
            <div className="user-info">
              <p>Sub: <span className="value">{user?.sub}</span></p>
              <p>Email: <span className="value">{user?.email}</span></p>
              <p>Name: <span className="value">{user?.name}</span></p>
            </div>
          </div>
        )}

        {user && (
          <div className="more-info">
            <ReactJson
              enableClipboard={false}
              collapsed={true}
              theme={'google'}
              src={user}
            />
          </div>
        )}
      </div>

      <div className="user-from-our-database">
        <div className="title">Private users from our database:</div>
          {(privateUsers || []).length ? (
            <div className="list-private-users">
              {privateUsers.map((privateUser) => (
                <div key={privateUser.email} className="private-user">
                  <p>Email: <span className="value">{privateUser.email}</span></p>
                </div>
              ))}
            </div>
          ) : (
            <div className="loading">No private users found.</div>
          )}
      </div>
    </div>
  )
}

export default Dashboard
