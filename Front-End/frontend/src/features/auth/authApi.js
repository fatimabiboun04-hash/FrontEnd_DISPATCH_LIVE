import api from '../../api/axios'

export const loginApi   = (data) => api.post('/login', data)
export const logoutApi  = ()     => api.post('/logout')
export const fetchMeApi = ()     => api.get('/me')