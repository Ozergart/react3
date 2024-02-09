const axios = require("axios");


const apiService =  axios.create({baseURL})

export{
    apiService
}