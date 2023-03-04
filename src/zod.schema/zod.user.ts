import {TypeOf , z} from 'zod'


export const addUser = z.object({
    body:z.object({
        username:z.string({
            required_error:"username is required",
            invalid_type_error:"usernameis invalid"
        }).max(20, "username should be less than 20 characters")
          .min(2,"username should be more than 2 characters"),
         password:z.string({
            required_error:"password is required",
            invalid_type_error:"password is invalid"
        })
})
})

 
export type addUserSchema = TypeOf <typeof addUser>["body"]
 
