const createLink = (title:string)=>{
    return `/thoughts/${title.replace(" ","-")}/`
}
export default createLink