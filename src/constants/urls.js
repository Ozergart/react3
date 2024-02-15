const baseURL = 'https://jsonplaceholder.typicode.com'
const users = "/users"
const posts = '/posts'

const urls = {
    users:{
        base: users,
        byID: users+"/"
    },
    posts:{
        base:posts,
        biID:posts+"/"
    }
}
export {
    urls,
    baseURL
}