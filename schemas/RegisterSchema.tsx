
import { z } from "zod"

export const RegisterSchema = z.object({
    name: z.string().min(4,{message:"name must be 4 or more character long"}).max(30, {message: "name must be 30 or fewer character long"}),
    email: z.string().email(),
    password: z.string().min(6, { message: "Password must be 6 or more characters long!" }),
    confirmPassword: z.string()
}).refine(
    (values) => { return values.password === values.confirmPassword },
    { message: "Password must Match!", path: ["confirmPassword"] }
)

export type RegisterSchemaType = z.infer<typeof RegisterSchema>