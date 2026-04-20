import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, clearError } from '../../features/auth/authSlice'
import { FaBolt } from 'react-icons/fa'
import { MdEmail, MdLock } from 'react-icons/md'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const dispatch  = useDispatch()
  const navigate  = useNavigate()
  const { loading, error, token } = useSelector((s) => s.auth)
  const [form, setForm] = useState({ email: '', password: '' })

  useEffect(() => {
    if (token) navigate('/dashboard')
  }, [token])

  useEffect(() => {
    if (error) { toast.error(error); dispatch(clearError()) }
  }, [error])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await dispatch(login(form))
    if (res.meta.requestStatus === 'fulfilled') {
      navigate(res.payload.user.role === 'Admin' ? '/dashboard' : '/mon-planning')
    }
  }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)' }}>
      <div className="bg-white rounded-4 p-4 shadow-lg" style={{ width: '100%', maxWidth: 400 }}>

        {/* Logo */}
        <div className="text-center mb-4">
          <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
            style={{ width: 56, height: 56, background: '#2563EB' }}>
            <FaBolt color="#fff" size={24} />
          </div>
          <h5 className="fw-bold mb-1">
            DISPATCH <span style={{ color: '#2563EB' }}>LIVE</span>
          </h5>
          <small className="text-muted">Plateforme de gestion des plannings</small>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <MdEmail color="#94A3B8" size={18} />
              </span>
              <input
                type="email"
                className="form-control border-start-0 ps-0"
                placeholder="email@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label small fw-semibold">Mot de passe</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <MdLock color="#94A3B8" size={18} />
              </span>
              <input
                type="password"
                className="form-control border-start-0 ps-0"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn w-100 text-white fw-semibold py-2"
            style={{ background: '#2563EB', borderRadius: 8 }}
            disabled={loading}>
            {loading
              ? <><span className="spinner-border spinner-border-sm me-2" />Connexion...</>
              : 'Se connecter'
            }
          </button>
        </form>
      </div>
    </div>
  )
}