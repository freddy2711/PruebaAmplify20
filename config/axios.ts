import axios from 'axios'

const axiosfetchPublic = axios.create({
  baseURL: `${'/api'}`,
  headers: {
    'Content-Type': 'application/json',
  },
  // timeout: 2000,
})

export default axiosfetchPublic

// const { data } = await clienteAxios.post(`/users/login`, { email, password });

// const axiosfetchPrivate2 = axios.create({
//   url: '/post',
//   baseURL:`${'/api'}`,
//   method: 'POST',
//   timeout: 1000
// });
// export default axiosfetchPrivate2;

export const axiosfetchPrivate = axios.create({
  baseURL: `${process.env.BACKEND_URL}`,
  headers: {
    'x-api-key': `${process.env.BACKEND_APIKEY}`,
    'Content-Type': 'application/json',
    // timeout: 5000,
  },
})

export const axiosfetchPrivateWSCV = axios.create({
  baseURL: `${process.env.BACKEND_URL_WSCV}`,
  headers: {
    'x-api-key': `${process.env.BACKEND_APIKEY_WSCV}`,
    'Content-Type': 'application/json' 
  }
})


/* export const axiosfetchPrivateWSCV = axios.create({
  baseURL: `${'http://localhost:3619'}`,
/*   headers: {
    'x-api-key': `${process.env.BACKEND_APIKEY_WSCV}`,
    'Content-Type': 'application/json' 
  } 
}) */


export const axiosfetchPrivateEmail = axios.create({
  baseURL: `${process.env.URL_SERVICE_EMAIL}`,
  headers: {
    'x-api-key': `${process.env.APIKEY_EMAIL}`,
    'Content-Type': 'application/json',
  },
})

export const axiosfetchPrivateSedesUPN = axios.create({
  baseURL: `${process.env.URL_SERVICE_SEDES_UPN}`,
  headers: {
    'x-api-key': `${process.env.BACKEND_APIKEY_SEDES_UPN}`,
    'Content-Type': 'application/json',
    timeout: 2000,
  },
})

export const axiosfetchPrivateUpload = axios.create({
  baseURL: `${process.env.URL_UPLOAD}`,
})
