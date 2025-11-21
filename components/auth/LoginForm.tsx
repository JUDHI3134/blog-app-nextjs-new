'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/schemas/LoginSchema";
import FormField from "../common/FormField";
import { da } from "zod/locales";
import Button from "../common/Button";
import Heading from "../common/Heading";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });
    
    const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
        console.log("data : ", data)
    }


  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[500px] gap-2 m-auto mt-8">
          
          <Heading title="Login to JB-Blogs" lg center />

          <FormField id="email" register={register} errors={errors} placeholder="email" />
          <FormField id="password" register={register} errors={errors} placeholder="password" type="password" />


          <Button type="submit" label="Login"/>
    </form>
  )
}

export default LoginForm
