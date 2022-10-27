"use strict";
exports.__esModule = true;
exports.axiosfetchPrivateUpload = exports.axiosfetchPrivateSedesUPN = exports.axiosfetchPrivateEmail = exports.axiosfetchPrivateWSCV = exports.axiosfetchPrivate = void 0;
var axios_1 = require("axios");
var axiosfetchPublic = axios_1["default"].create({
    baseURL: "".concat('/api'),
    headers: {
        'Content-Type': 'application/json'
    }
});
exports["default"] = axiosfetchPublic;
// const { data } = await clienteAxios.post(`/users/login`, { email, password });
// const axiosfetchPrivate2 = axios.create({
//   url: '/post',
//   baseURL:`${'/api'}`,
//   method: 'POST',
//   timeout: 1000
// });
// export default axiosfetchPrivate2;
exports.axiosfetchPrivate = axios_1["default"].create({
    baseURL: "".concat(process.env.BACKEND_URL),
    headers: {
        'x-api-key': "".concat(process.env.BACKEND_APIKEY),
        'Content-Type': 'application/json'
    }
});
exports.axiosfetchPrivateWSCV = axios_1["default"].create({
    baseURL: "".concat(process.env.BACKEND_URL_WSCV),
    headers: {
        'x-api-key': "".concat(process.env.BACKEND_APIKEY_WSCV),
        'Content-Type': 'application/json'
    }
});
/* export const axiosfetchPrivateWSCV = axios.create({
  baseURL: `${'http://localhost:3619'}`,
/*   headers: {
    'x-api-key': `${process.env.BACKEND_APIKEY_WSCV}`,
    'Content-Type': 'application/json'
  }
}) */
exports.axiosfetchPrivateEmail = axios_1["default"].create({
    baseURL: "".concat(process.env.URL_SERVICE_EMAIL),
    headers: {
        'x-api-key': "".concat(process.env.APIKEY_EMAIL),
        'Content-Type': 'application/json'
    }
});
exports.axiosfetchPrivateSedesUPN = axios_1["default"].create({
    baseURL: "".concat(process.env.URL_SERVICE_SEDES_UPN),
    headers: {
        'x-api-key': "".concat(process.env.BACKEND_APIKEY_SEDES_UPN),
        'Content-Type': 'application/json',
        timeout: 2000
    }
});
exports.axiosfetchPrivateUpload = axios_1["default"].create({
    baseURL: "".concat(process.env.URL_UPLOAD)
});
