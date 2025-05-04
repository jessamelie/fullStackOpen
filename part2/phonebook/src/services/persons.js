import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(url)
}

const create = newPerson => {
  return axios.post(url, newPerson)
}

const deletePerson = id => {
  return axios.delete(`${url}/${id}`)
}

const update = (id, updatedPerson) => {
  return axios.put(`${url}/${id}`, updatedPerson)
}

export default {
  getAll,
  create,
  deletePerson,
  update
}