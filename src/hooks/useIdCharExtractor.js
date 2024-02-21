
const useIdCharExtractor = (chars, massive=[])=>{
    for (const char of chars) {
        const url = char;
        const characterId = url.substring(url.lastIndexOf('/') + 1);
        massive.push(characterId)
    }
}
export {
    useIdCharExtractor
}