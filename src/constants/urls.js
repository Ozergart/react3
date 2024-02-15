const baseURL = 'https://jsonplaceholder.typicode.com'
const users = "/users"
const posts = '/posts'
const comments = '/comments'

const urls = {
    users:{
        base: users,
        byID: users+"/"
    },
    posts:{
        base:posts,
        biID:posts+"/"
    },
    comments:{
        byPostId: (postId)=> comments+'?postId='+postId
    }
}
export {
    urls,
    baseURL
}