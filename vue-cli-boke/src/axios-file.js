import axios from 'axios'

const instance=axios.create({
  baseURL:'http://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common["SOMETHING"]='SOMETHING'

export default instance