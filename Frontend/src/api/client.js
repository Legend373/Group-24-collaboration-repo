import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1',
  withCredentials: true
})
api.interceptors.response.use(undefined, async (error) => {
  const original = error.config
  if (error.response?.status === 401 && !original._retry) {
    original._retry = true
    try {
      await axios.post(`${api.defaults.baseURL.replace('/api/v1','')}/api/v1/auth/refresh`, {}, { withCredentials: true })
      return api(original)
    } catch (e) { /* fallthrough */ }
  }
  return Promise.reject(error)
})
export { api }
