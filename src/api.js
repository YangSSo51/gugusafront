import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:8000/api"

export default {
    getAllPosts(){
        return axios.get('/project/')
    },
    getDetail(id){
        return axios.get('/project/'+String(id))
    }
}