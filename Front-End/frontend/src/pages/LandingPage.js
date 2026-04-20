import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FaBolt, FaWhatsapp } from 'react-icons/fa'
import {
  MdCalendarMonth, MdGroups, MdAssignment,
  MdBeachAccess, MdNotifications, MdArrowForward,
  MdCheckCircle,MdPeople
} from 'react-icons/md'

export default function LandingPage() {
  const navigate  = useNavigate()
  const { token } = useSelector((s) => s.auth)

  useEffect(() => {
    if (token) navigate('/dashboard')
  }, [token])

  const features = [
    {
      icon: <MdCalendarMonth size={28} color="#2563EB" />,
      title: 'Gestion des Plannings',
      desc: 'Créez et gérez les plannings hebdomadaires avec shifts J, J+, A, N, HO, R',
      bg: '#EFF6FF'
    },
    {
      icon: <MdGroups size={28} color="#7C3AED" />,
      title: 'Gestion des Équipes',
      desc: 'Organisez vos équipes Fixes et Mobiles avec suivi en temps réel',
      bg: '#F5F3FF'
    },
    {
      icon: <MdAssignment size={28} color="#059669" />,
      title: 'Catalogue des Tâches',
      desc: 'Gérez les missions permanentes et en rotation pour chaque employé',
      bg: '#ECFDF5'
    },
    {
      icon: <FaWhatsapp size={28} color="#25D366" />,
      title: 'Notifications WhatsApp',
      desc: 'Envoi automatique du planning sur le groupe WhatsApp de l\'équipe',
      bg: '#F0FDF4'
    },
    {
      icon: <MdBeachAccess size={28} color="#D97706" />,
      title: 'Demandes de Repos',
      desc: 'Soumettez et validez les demandes de repos avec notification email',
      bg: '#FFFBEB'
    },
    {
      icon: <MdNotifications size={28} color="#DC2626" />,
      title: 'Tableau de Bord',
      desc: 'Statistiques, rapports hebdomadaires et suivi des performances',
      bg: '#FEF2F2'
    },
  ]

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>

      {/* Navbar */}
      <nav className="d-flex align-items-center justify-content-between px-4 py-3"
        style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center justify-content-center rounded-2"
            style={{ width: 34, height: 34, background: '#2563EB' }}>
            <FaBolt color="#fff" size={16} />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1rem', color: '#0F172A', letterSpacing: 1 }}>
            DISPATCH <span style={{ color: '#2563EB' }}>LIVE</span>
          </span>
        </div>
        <button
          onClick={() => navigate('/login')}
          className="btn btn-sm px-4 text-white fw-semibold"
          style={{ background: '#2563EB', borderRadius: 8 }}>
          Se connecter
        </button>
      </nav>

      {/* Hero */}
      <div className="d-flex align-items-center justify-content-center text-center py-5"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)', minHeight: '88vh' }}>
        <div className="px-3" style={{ maxWidth: 700 }}>

          {/* Badge */}
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
            style={{ background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.4)' }}>
            <FaBolt color="#60A5FA" size={12} />
            <span style={{ color: '#60A5FA', fontSize: '0.78rem', fontWeight: 600 }}>
              Plateforme Intelligente de Gestion
            </span>
          </div>

          {/* Title */}
          <h1 style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.2 }}>
            DISPATCH{' '}
            <span style={{
              color: 'transparent',
              backgroundImage: 'linear-gradient(90deg, #60A5FA, #818CF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              LIVE
            </span>
          </h1>

          <p className="mt-3 mb-4"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Modernisez la gestion de vos équipes en rotation.
            Plannings automatisés, notifications en temps réel,
            rapports hebdomadaires et bien plus.
          </p>

          {/* Buttons */}
          <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
            <button
              onClick={() => navigate('/login')}
              className="btn px-4 py-2 fw-semibold d-flex align-items-center gap-2"
              style={{ background: '#2563EB', color: '#fff', borderRadius: 10, fontSize: '0.95rem' }}>
              Accéder à la plateforme <MdArrowForward size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="d-flex align-items-center justify-content-center gap-4 mt-5 flex-wrap">
            {[
              { label: 'Équipes gérées', value: '4+' },
              { label: 'Shifts disponibles', value: '6' },
              { label: 'Notifications', value: 'Auto' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.6rem' }}>{s.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-5 px-3" style={{ background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="text-center mb-5">
            <h2 style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.8rem' }}>
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-muted mt-2">
              Une solution complète pour la gestion des plannings et des équipes
            </p>
          </div>

          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="h-100 p-4 rounded-4 border"
                  style={{ background: '#fff', borderColor: '#E2E8F0' }}>
                  <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 52, height: 52, background: f.bg }}>
                    {f.icon}
                  </div>
                  <h6 className="fw-bold mb-2" style={{ color: '#0F172A' }}>{f.title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Roles section */}
      <div className="py-5 px-3">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="text-center mb-5">
            <h2 style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.8rem' }}>
              Deux profils, une plateforme
            </h2>
          </div>

          <div className="row g-4">
            {/* Admin */}
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100"
                style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="d-flex align-items-center justify-content-center rounded-2"
                    style={{ width: 36, height: 36, background: '#2563EB' }}>
                    <MdGroups color="#fff" size={18} />
                  </div>
                  <span style={{ color: '#fff', fontWeight: 700 }}>Administrateur</span>
                </div>
                {[
                  'Gérer les équipes et les employés',
                  'Créer et modifier les plannings',
                  'Valider les demandes de repos',
                  'Recevoir les notifications in-app',
                  'Consulter les rapports hebdomadaires',
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-center gap-2 mb-2">
                    <MdCheckCircle color="#10B981" size={16} />
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Employe */}
            <div className="col-12 col-md-6">
              <div className="p-4 rounded-4 h-100"
                style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="d-flex align-items-center justify-content-center rounded-2"
                    style={{ width: 36, height: 36, background: '#EFF6FF' }}>
                    <MdPeople color="#2563EB" size={18} />
                  </div>
                  <span style={{ color: '#0F172A', fontWeight: 700 }}>Employé</span>
                </div>
                {[
                  'Consulter son planning personnel',
                  'Voir le planning de son équipe',
                  'Soumettre des demandes de repos',
                  'Recevoir les notifications WhatsApp',
                  'Consulter son profil et rating',
                ].map((item, i) => (
                  <div key={i} className="d-flex align-items-center gap-2 mb-2">
                    <MdCheckCircle color="#2563EB" size={16} />
                    <span style={{ color: '#475569', fontSize: '0.85rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-5"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)' }}>
        <h3 style={{ color: '#fff', fontWeight: 800 }}>Prêt à commencer?</h3>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem' }} className="mt-2 mb-4">
          Connectez-vous pour accéder à votre espace
        </p>
        <button
          onClick={() => navigate('/login')}
          className="btn px-5 py-2 fw-semibold d-inline-flex align-items-center gap-2"
          style={{ background: '#2563EB', color: '#fff', borderRadius: 10 }}>
          Se connecter <MdArrowForward size={18} />
        </button>
      </div>

      {/* Footer */}
      <div className="text-center py-3" style={{ background: '#0F172A' }}>
        <small style={{ color: 'rgba(255,255,255,0.3)' }}>
          © 2026 Dispatch Live — ISAC
        </small>
      </div>
    </div>
  )
}