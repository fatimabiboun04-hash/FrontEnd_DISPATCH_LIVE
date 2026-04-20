import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar  from './Topbar'

const titles = {
  '/dashboard':   'Dashboard',
  '/users':       'Gestion des Employés',
  '/equipes':     'Gestion des Équipes',
  '/taches':      'Catalogue des Tâches',
  '/plannings':   'Gestion des Plannings',
  '/repos':       'Demandes de Repos',
  '/mon-planning':'Mon Planning',
  '/mes-repos':   'Mes Demandes de Repos',
}

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ marginLeft: 240, flex: 1, minHeight: '100vh', background: '#F1F5F9' }}>
        <Topbar title={titles[pathname] || 'Dispatch Live'} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}