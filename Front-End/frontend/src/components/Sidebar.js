import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import {
  MdDashboard, MdPeople, MdGroups,
  MdAssignment, MdCalendarMonth,
  MdBeachAccess, MdLogout
} from 'react-icons/md'
import { FaBolt } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((s) => s.auth)

  const handleLogout = async () => {
    await dispatch(logout())
    toast.success('Déconnecté avec succès')
    navigate('/login')
  }

  const navStyle = {
    sidebar: {
      width: 240,
      minHeight: '100vh',
      background: '#0F172A',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0, left: 0,
      zIndex: 100,
    },
    logo: {
      padding: '20px 16px',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    },
    navLink: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 16px',
      color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
      textDecoration: 'none',
      fontSize: '0.88rem',
      borderLeft: isActive ? '3px solid #2563EB' : '3px solid transparent',
      background: isActive ? 'rgba(37,99,235,0.12)' : 'transparent',
      transition: 'all 0.2s',
    }),
    footer: {
      padding: '14px 16px',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }

  return (
    <div style={navStyle.sidebar}>

      {/* Logo */}
      <div style={navStyle.logo}>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center justify-content-center rounded-2"
            style={{ width: 34, height: 34, background: '#2563EB' }}>
            <FaBolt color="#fff" size={16} />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', letterSpacing: 1 }}>
              DISPATCH <span style={{ color: '#60A5FA' }}>LIVE</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}>
              {user?.role === 'Admin' ? 'Administrateur' : 'Employé'}
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-grow-1 py-2">
        {user?.role === 'Admin' ? (
          <>
            <NavLink to="/dashboard" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdDashboard size={18}/> Dashboard
            </NavLink>
            <NavLink to="/users" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdPeople size={18}/> Employés
            </NavLink>
            <NavLink to="/equipes" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdGroups size={18}/> Équipes
            </NavLink>
            <NavLink to="/taches" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdAssignment size={18}/> Tâches
            </NavLink>
            <NavLink to="/plannings" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdCalendarMonth size={18}/> Plannings
            </NavLink>
            <NavLink to="/repos" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdBeachAccess size={18}/> Repos
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/mon-planning" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdCalendarMonth size={18}/> Mon Planning
            </NavLink>
            <NavLink to="/mes-repos" style={({isActive}) => navStyle.navLink(isActive)}>
              <MdBeachAccess size={18}/> Mes Repos
            </NavLink>
          </>
        )}
      </nav>

      {/* User footer */}
      <div style={navStyle.footer}>
        <div className="d-flex align-items-center gap-2 mb-3">
          <div className="d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 34, height: 34, background: '#2563EB', color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>
            {user?.nom?.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 600 }}>{user?.nom}</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.68rem' }}>{user?.equipe}</div>
          </div>
        </div>
        <button onClick={handleLogout}
          className="d-flex align-items-center gap-2 w-100"
          style={{
            background: 'rgba(239,68,68,0.1)',
            border: 'none',
            color: '#FCA5A5',
            padding: '8px 12px',
            borderRadius: 8,
            fontSize: '0.82rem',
            cursor: 'pointer'
          }}>
          <MdLogout size={16}/> Déconnexion
        </button>
      </div>
    </div>
  )
}