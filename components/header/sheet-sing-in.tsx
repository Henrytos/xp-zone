"use client"
import { Eye, EyeOff, Check } from "lucide-react"
import { Button } from "../button"
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet"
import Image from "next/image"
import Form from "./form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"


const formSingUpSchema = z
    .object({
        email: z.string().email("email invali"),
        password: z.string().min(6).max(20),
        repeatPassword: z.string().min(6).max(20),
        rememberMyPassword: z.boolean().optional().default(false),
    })
    .refine((fields) => {
        if (fields.password != fields.repeatPassword) {
            return false;
        }

        return true;
    });

type FormSingUpSchema = z.infer<typeof formSingUpSchema>;


interface SheetFormSingInProps {
    open: boolean
    onOpenChange: () => void
}
export function SheetFormSingIn({ open, onOpenChange }: SheetFormSingInProps) {
    const [isPasswordVisible, setIsPasswordVIsible] = useState<boolean>(true);
    const [isRepeatPasswordVisible, setISRepeatPasswordVIsible] = useState<boolean>(true);


    const { register, handleSubmit, watch, setValue, reset, formState: {
        errors
    }, getValues } = useForm<FormSingUpSchema>({
        resolver: zodResolver(formSingUpSchema),
        defaultValues: {
            email: "",
            password: "",
            repeatPassword: "",
            rememberMyPassword: false,
        },
        mode: "onChange"
    });

    const handleFormSingUpSUbmit = (data: FormSingUpSchema) => {
        console.log(data);
        reset();
        onOpenChange()
    }

    const isToRememberPassword: boolean = watch("rememberMyPassword") == true;
    const isPasswordsAreHitting: boolean = watch("password") == watch("repeatPassword");
    const isPasswordValid = !Boolean(errors.password) && getValues("password").length > 0;;
    const isRepeatPasswordValid = !Boolean(errors.repeatPassword) && getValues("repeatPassword").length > 0;
    const isEmailValid = !Boolean(errors.email) && getValues("email").length > 0;

    return <Sheet
        open={open as boolean}
        onOpenChange={onOpenChange}
        defaultOpen={true}
    >
        <SheetContent >
            <Image
                src="/logo/logo-linear-vertical.png"
                alt="logotipo da xp zone"
                width={110}
                height={120}
                className="w-28 h-32 mx-auto  object-contain cursor-pointer mb-9"
                quality={100}
            />

            <SheetTitle className="text-3xl font-bold text-center mb-5">
                Já possui uma conta?
            </SheetTitle>
            <h3 className="text-xl font-normal text-white text-center mb-9">
                Faça seu login e acesse o sistema
            </h3>

            <Button.Root color="tertiary" className="w-full mb-5">
                <Button.Icon>
                    <Image
                        src="/logo/gogle-icon.png"
                        alt="logotipo da xp zone"
                        width={30}
                        height={30}
                        className=" h-full w-auto object-contain cursor-pointer inline mr-2"
                        quality={100}
                    />
                </Button.Icon>
                Entrar com o Google
            </Button.Root>

            <Button.Root className="bg-secondary-white w-full mb-9">
                <Button.Icon>
                    <Image
                        src="/logo/facebook-icon.png"
                        alt="logotipo da xp zone"
                        width={30}
                        height={30}
                        className=" h-full w-auto object-contain cursor-pointer inline mr-2"
                        quality={100}
                    />
                </Button.Icon>
                Entrar com o facebook
            </Button.Root>

            <h3 className="text-xl font-normal text-white text-center mb-9">
                Ou inscreva-se com seu email
            </h3>

            <Form.Root onSubmit={handleSubmit(handleFormSingUpSUbmit)}>
                <Form.Control>
                    <Form.Label htmlFor="email">
                        Digite seu email <Form.FieldState isValid={isEmailValid} />
                    </Form.Label>
                    <Form.Input id="email" className="placeholder-white/50" type="email" placeholder="Digite seu email" {...register("email")} />
                </Form.Control>

                <Form.Control className="grid grid-cols-2 gap-3 space-y-0">
                    <Form.Control className="col-span-1 relative mb-0">
                        <Form.Label htmlFor="password" >
                            Crie uma senha <Form.FieldState isValid={isPasswordsAreHitting && isPasswordValid} />
                        </Form.Label>
                        <Form.Input id="password" className="placeholder-white/50" type={`${isPasswordVisible ? "text" : "password"}`} placeholder="Crie uma senha"  {...register("password")} />
                        <span className=" absolute top-[39px] right-3 cursor-pointer text-secondary-white ">
                            {isPasswordVisible && <Eye className="w-6 h-6 " onClick={() => {
                                setIsPasswordVIsible((currentState) => !currentState)
                            }} />}
                            {!isPasswordVisible && <EyeOff className="w-6 h-6 " onClick={() => {
                                setIsPasswordVIsible((currentState) => !currentState)
                            }} />}
                        </span>
                    </Form.Control>

                    <Form.Control className="col-span-1 relative mb-5">
                        <Form.Label htmlFor="repeatPassword" >
                            Repita sua senha <Form.FieldState isValid={isPasswordsAreHitting && isRepeatPasswordValid} />
                        </Form.Label>
                        <Form.Input id="repeatPassword" className="placeholder-white/50" type={`${isRepeatPasswordVisible ? "text" : "password"}`} placeholder="Repita sua senha"  {...register("repeatPassword")} />
                        <span className=" absolute top-[39px] right-3 cursor-pointer text-secondary-white ">
                            {isRepeatPasswordVisible && <Eye className="w-6 h-6 " onClick={() => {
                                setISRepeatPasswordVIsible((currentState) => !currentState)
                            }} />}
                            {!isRepeatPasswordVisible && <EyeOff className="w-6 h-6 " onClick={() => {
                                setISRepeatPasswordVIsible((currentState) => !currentState)
                            }} />}
                        </span>
                    </Form.Control>
                </Form.Control>

                <div className=" col-span-2 flex justify-between items-center mb-8">
                    <div className="flex gap-1.5 relative" >
                        <input id="rememberMyPassword" type="checkbox" className="appearance-none p-0 m-0 w-7 h-7  rounded-lg bg-gradient-to-r from-[#fe9652] to-[#e54a64] relative before:w-[24px] before:h-[24px] before:bg-secondary before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-lg scale-90" {...register("rememberMyPassword")} />
                        {isToRememberPassword && <Check className="text-[#fe9652] absolute top-0.5 left-0.5" onClick={() => {
                            setValue("rememberMyPassword", false)
                        }} />}
                        <label htmlFor="rememberMyPassword" className="font-light text-sm text-white py-auto translate-y-1"  >Lembrar minha senha</label>
                    </div>

                    <span className="font-light text-sm text-secondary-white cursor-pointer hover:underline transition-all ">
                        esqueci minha senha
                    </span>
                </div>

                <Form.Control className="grid grid-cols-2 gap-3 space-y-0">
                    <Button.Root color="secondary" className="col-span-1">
                        Acessar
                    </Button.Root>
                    <Button.Root color="primary" className="col-span-1" onClick={(ev) => {
                        ev.preventDefault()
                    }}>
                        Criar conta
                    </Button.Root>
                </Form.Control>
            </Form.Root>
        </SheetContent>
    </Sheet>
}