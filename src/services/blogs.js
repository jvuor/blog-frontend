import axios from 'axios'

var baseUrl = 'http://localhost:3003/api/blogs'
const hostname = window && window.location && window.location.hostname
if(hostname !== 'localhost') {
  baseUrl = '/api/blogs'
}

//TODO: add at least some kind of error handling

var token = null

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const postBlog = async (newBlog)=> { 
  const config = {
    headers: { 'Authorization': token}
  }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data

}

const deleteBlog = async (id) => {
  const config = {
    headers: { 'Authorization': token}
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, setToken, postBlog, deleteBlog }
