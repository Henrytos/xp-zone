import { Eye, EyeOff } from "lucide-react"
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
        fullName: z.string().min(10),
        email: z.string().email("email invalid"),
        repeatEmail: z.string().email("repeat email invalidate"),
        password: z.string().min(6).max(20),
        repeatPassword: z.string().min(6).max(20),
    })
    .refine((fields) => {
        if (fields.email != fields.repeatEmail) {
            return false;
        }

        if (fields.password != fields.repeatPassword) {
            return false;
        }

        return true;
    });

type FormSingUpSchema = z.infer<typeof formSingUpSchema>;


interface SheetFormSingUpProps {
    open: boolean
    onOpenChange: () => void
}
export function SheetFormSingUp({ open, onOpenChange }: SheetFormSingUpProps) {
    const [isPasswordVisible, setIsPasswordVIsible] = useState<boolean>(true);
    const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState<boolean>(true);


    const { register, handleSubmit, watch, reset, formState: {
        errors
    }, getValues } = useForm<FormSingUpSchema>({
        resolver: zodResolver(formSingUpSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            repeatPassword: "",
            repeatEmail: "",
        },
        mode: "onChange"
    });

    const handleFormSingUpSUbmit = (data: FormSingUpSchema) => {
        console.log(data);
        reset();
        onOpenChange()
    }

    const isPasswordValid = !Boolean(errors.password) && getValues("password").length > 0;;
    const isRepeatPasswordValid = !Boolean(errors.repeatPassword) && getValues("repeatPassword").length > 0;
    const isEmailValid = !Boolean(errors.email) && getValues("email").length > 0;
    const isRepeatEmailValid = !Boolean(errors.repeatEmail) && getValues("repeatEmail").length > 0;
    const isFullNameValid = !Boolean(errors.fullName) && getValues("fullName").length > 10;

    const isPasswordsAreHitting: boolean = watch("password") == watch("repeatPassword");
    const isEmailsAreHitting: boolean = watch("email") == watch("repeatEmail");

    return <Sheet
        open={open as boolean}
        onOpenChange={onOpenChange}
        defaultOpen={true}
    >
        <SheetContent className="overflow-y-auto">
            <Image
                src="/logo/logo-linear-vertical.png"
                alt="logotipo da xp zone"
                width={110}
                height={120}
                className="w-28 h-32 mx-auto  object-contain cursor-pointer mb-9"
                quality={100}
            />

            <SheetTitle className="text-3xl font-bold text-center mb-5">
                Cadastre-se
            </SheetTitle>
            <h3 className="text-xl font-normal text-white text-center mb-9">
                Usando o Google ou o Facebook
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
                    <Form.Label htmlFor="fullName">
                        Nome e sobrenome <Form.FieldState isValid={isFullNameValid} />
                    </Form.Label>
                    <Form.Input id="fullName" className="placeholder-white/50" type="text" placeholder="Nome e sobrenome" {...register("fullName")} />
                </Form.Control>

                <Form.Control>
                    <Form.Label htmlFor="email">
                        Digite seu email <Form.FieldState isValid={isEmailsAreHitting && isEmailValid} />
                    </Form.Label>
                    <Form.Input id="email" className="placeholder-white/50" type="email" placeholder="Digite seu email" {...register("email")} />
                </Form.Control>

                <Form.Control>
                    <Form.Label htmlFor="repeatEmail">
                        Repita seu email <Form.FieldState isValid={isEmailsAreHitting && isRepeatEmailValid} />
                    </Form.Label>
                    <Form.Input id="repeatEmail" className="placeholder-white/50" type="email" placeholder="Repita seu email" {...register("repeatEmail")} />
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
                                setIsRepeatPasswordVisible((currentState) => !currentState)
                            }} />}
                            {!isRepeatPasswordVisible && <EyeOff className="w-6 h-6 " onClick={() => {
                                setIsRepeatPasswordVisible((currentState) => !currentState)
                            }} />}
                        </span>
                    </Form.Control>
                </Form.Control>


                <Form.Control className="grid grid-cols-2 gap-5 space-y-0 mb-9">
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

            <p className="text-sm text-white text-justify font-light">
                Ao clicar em “Criar conta”, certifico que tenho 16 anos ou mais e aceito os <span className="underline ">Termos de Uso</span>, as <span className="underline ">Políticas de Privacidade</span> e as <span className="underline ">Políticas de Cookies.</span>
            </p>
        </SheetContent>
    </Sheet>
}