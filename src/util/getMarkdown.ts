import axios from "axios"

const getMarkdown = async (url) =>{

    const res = axios.get(url)
    return res
}
export default getMarkdown