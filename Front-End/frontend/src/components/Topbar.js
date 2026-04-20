import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdNotifications, MdCheckCircle } from 'react-icons/md'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

export default function Topbar({ title }) {
  const { user }  = useSelector((s) => s.auth)
  const navigate  = useNavigate()
  const [notifs, setNotifs]   = useState([])
  const [show, setShow]       = useState(false)

  useEffect(() => {
    if (user?.role === 'Admin') fetchNotifs()
  }, [user])

  const fetchNotifs = async () => {
    try {
      const res = await api.get('/notifications')
      setNotifs(res.data)
    } catch (e) {}
  }

  const markRead = async (id) => {
    try {
      await api.put(`/notifications/${id}/read`)
      setNotifs(notifs.filter(n => n.id !== id))
    } catch (e) {}
  }

  return (
    <div className="d-flex align-items-center justify-content-between px-4 py-3 bg-white border-bottom">
      <h6 className="mb-0 fw-bold text-dark">{title}</h6>

      <div className="d-flex align-items-center gap-3">
        {user?.role === 'Admin' && (
          <div className="position-relative">
            <button
              onClick={() => setShow(!show)}
              className="btn btn-light btn-sm rounded-circle p-2 position-relative">
              <MdNotifications size={20} />
              {notifs.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.6rem' }}>
                  {notifs.length}
                </span>
              )}
            </button>

            {show && (
              <div className="position-absolute end-0 mt-2 shadow rounded-3 bg-white border"
                style={{ width: 320, zIndex: 999 }}>
                <div className="px-3 py-2 border-bottom">
                  <small className="fw-bold text-muted">Notifications</small>
                </div>
                {notifs.length === 0 ? (
                  <div className="p-3 text-center text-muted" style={{ fontSize: '0.82rem' }}>
                    Aucune notification
                  </div>
                ) : (
                  notifs.map(n => (
                    <div key={n.id}
                      className="d-flex align-items-start gap-2 px-3 py-2 border-bottom"
                      style={{ fontSize: '0.82rem' }}>
                      <div className="flex-grow-1">
                        <div className="fw-600">{n.message}</div>
                        <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                          Motif: {n.motif} — {n.duree} jours
                        </div>
                      </div>
                      <button
                        onClick={() => { markRead(n.id); navigate('/repos') }}
                        className="btn btn-sm p-0"
                        title="Marquer comme lu">
                        <MdCheckCircle color="#10B981" size={18} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center justify-content-center rounded-circle"
            style={{ width: 32, height: 32, background: '#2563EB', color: '#fff', fontWeight: 700, fontSize: '0.8rem' }}>
            {user?.nom?.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{user?.nom}</div>
            <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>{user?.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}