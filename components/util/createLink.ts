const createLink = (title:string)=>{
    title = stripDashes(title)
    return `/thoughts/${title.split(" ").join("-").toLocaleLowerCase()}/`
}
function escapeRegExp(string:string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
function replaceAll(str:String, find:string, replace:string) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }
const stripDashes = (str:string)=>replaceAll(str,"-"," ")
  export default createLink

export { replaceAll, stripDashes }