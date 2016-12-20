import { API_URL } from '../../../configuration.json'
import axios from 'axios'

export default {
  get: {
    posts: () => axios.get(`${API_URL}/posts`),
    images: () => axios.get(`${API_URL}/images`)
  }
}
