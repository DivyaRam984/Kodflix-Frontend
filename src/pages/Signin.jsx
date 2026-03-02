import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../services/api'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const data = await signin({ email, password })
      const token = data.data?.token ?? data.token ?? data.accessToken ?? data.access_token
      if (token) {
        localStorage.setItem('kodflix_token', token)
        window.location.href = 'https://YOUR-VERCEL-URL.vercel.app'
      } else {
        setError('Invalid response: no token received')
      }
    } catch (err) {
      setError(err.message || 'Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">Kodflix</div>
        <h1 className="auth-title">Sign In</h1>
        {error && <div className="auth-error" role="alert">{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="signin-email">Email</label>
          <input
            id="signin-email"
            type="email"
            className="auth-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <label htmlFor="signin-password">Password</label>
          <input
            id="signin-password"
            type="password"
            className="auth-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="auth-footer">
          New to Kodflix?{' '}
          <Link to="/signup" className="auth-link">Sign up now</Link>
        </p>
      </div>
    </div>
  )
}
