import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9r3zOxhlHseDYLLwMYof2xStO84OwuVUWCcp5NV95Fg'
  }
})