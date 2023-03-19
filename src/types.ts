export interface character{
    id:number,
    name:string, 
    status:string,
    species:string,
    type:string,
    gender:string,
    origin:{
        name:string,
        url:string
    }
    location:object,
    image:string,
    episode:[],
    url:string,
    created:string
}