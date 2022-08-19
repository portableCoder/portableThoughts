import axios from "axios"

const getMarkdown = async (url:string) =>{

    const res = axios.get(url)
    return res
}
export default getMarkdown