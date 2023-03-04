import {TypeOf , z} from 'zod'


export const addBook = z.object({
    body:z.object({
        username:z.string({
            required_error:"book name is required",
            invalid_type_error:"book name is invalid"
        }).max(20, "book name should be less than 20 characters")
          .min(2,"book name should be more than 2 characters"),
         genre:z.string({
            required_error:"genre is required",
            invalid_type_error:"genre is invalid"
        })
})
})

 
export type addBookSckema = TypeOf <typeof addBook>["body"]
 
