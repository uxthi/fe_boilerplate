import axios from 'axios'

const api = axios.create({
  baseURL: '',
})

export const logout = () => {
  localStorage.clear()
  window.location.href = ''
}
