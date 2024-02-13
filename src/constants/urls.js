
const baseURL = 'https://jsonplaceholder.typicode.com'
const todos = '/todos'
const albums = '/albums'
const comments = '/comments'

const urls = {
    todos: todos,
    albums: albums,
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    },
    posts:{
      buId: (id)=> `/posts/${id}`
    }
}
export {
    urls,
    baseURL
}