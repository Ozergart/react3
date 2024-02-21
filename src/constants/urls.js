
const baseURL = "https://rickandmortyapi.com/api"

const episodes = "/episode"
const chars = "/character"

const urls = {
    episodes:{
        base:episodes,
        byId: (id)=> `${episodes}/${id}`
    },
    chars:{
        base:chars,
        byIds: (Ids)=>`${chars}/${Ids}`
    }
}

export {
    urls,
    baseURL
}