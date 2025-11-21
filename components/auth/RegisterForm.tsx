'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../common/FormField";
import Button from "../common/Button";
import Heading from "../common/Heading";
import SocialAuth from "./SocialAuth";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/RegisterSchema";

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });
    
    const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
        console.log("data : ", data)
    }


  return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col max-w-[500px] gap-2 m-auto mt-8">
          
          <Heading title="Create an Account" lg center />

          <FormField id="name" register={register} errors={errors} placeholder="name" />
          <FormField id="email" register={register} errors={errors} placeholder="email" />
          <FormField id="password" register={register} errors={errors} placeholder="password" type="password" />
          <FormField id="confirmPassword" register={register} errors={errors} placeholder="confirmPassword" type="password" />


          <Button type="submit" label="Register" />
          <div className="flex justify-center my-2">Or</div>
          <SocialAuth />
    </form>
  )
}

export default RegisterForm
