import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {character} from "../../types";

export const api = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({baseUrl:"https://rickandmortyapi.com/api/"}),
    endpoints:(builder)=>({
        getAllCharacters:builder.query<Array<character>, void>({
            query:()=> `character`,
            transformResponse: (response: { info:object, results: Array<character>,}, meta, arg) => {
                const cards = response.results.filter((character, index)=>index<8);
                cards.sort((a,b)=>{
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1;
                    }
                    else{
                        return -1;
                    }
                })
                return cards;
            }
        })
    })
})

export const { useGetAllCharactersQuery } = api;