import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('kodflix_token')
    navigate('/', { replace: true })
  }

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Welcome to Kodflix</h1>
      <p className="dashboard-subtitle">You're signed in.</p>
      <button type="button" className="btn-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}
