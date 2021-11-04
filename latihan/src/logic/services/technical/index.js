import { env } from "../../../env"

function handleHttp(response){
    return response.json().catch(console.log)
}

class Requester{
    constructor(API){
        this.API = API
    }
    
    get (){
        return fetch(this.API).then(handleHttp)
    }
    post(data){
        const options = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }
        return fetch(this.API,options).then(handleHttp)
    }
    put (id,data){
        const options = {
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }
        return fetch(this.API + '/' + id ,options).then(handleHttp)
    }
    del (id){
        const options = {
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
        }
        return fetch(this.API + '/' + id , options ).then(handleHttp)
    }
}

export const request = {
    init(API){
        console.log({API})
        return new Requester(API);
    }
}