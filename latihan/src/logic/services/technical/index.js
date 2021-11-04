import { env } from "../../../env"

function handleHttp(response){
    return response.json().catch(console.log)
}

function get (){
    return fetch(this.API).then(handleHttp)
}
function post(data){
    const options = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }
    return fetch(this.API,options).then(handleHttp)
}
function put (id,data){
    const options = {
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }
    return fetch(this.API + '/' + id ,options).then(handleHttp)
}
function del (id){
    const options = {
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
    }
    return fetch(this.API + '/' + id , options ).then(handleHttp)
}


export const request = {
    init(API){
        console.log({API})
        this.API = API;
        return {
            get:get.bind(this),
            post:post.bind(this),
            put:put.bind(this),
            del:del.bind(this)
        }
    }
}