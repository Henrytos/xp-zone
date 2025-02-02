"use client";
import Image from "next/image";
import { Button } from "../button";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Eye, EyeOff } from "lucide-react"
import Form from "./form";


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

export function Header() {
  const router = useRouter();
  const [openSheetSingIn, setOpenSheetSingIn] = useState<boolean>(false);
  const [openSheetAdvertise, setOpenSheetAdvertise] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVIsible] = useState<boolean>(true);
  const [isRepeatPasswordVisible, setISRepeatPasswordVIsible] = useState<boolean>(true);


  const handleCLickInLogo = () => {
    router.push("/");
  };
  const handleCLickSingInButton = () => {
    setOpenSheetSingIn((currentState) => !currentState);
  };
  const handleCLickAdvertiseButton = () => {
    setOpenSheetAdvertise((currentState) => !currentState);
  };

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
    handleCLickSingInButton()
  }

  const isToRememberPassword: boolean = watch("rememberMyPassword") == true;
  const isPasswordsAreHitting: boolean = watch("password") == watch("repeatPassword");
  const isPasswordValid = !Boolean(errors.password) && getValues("password").length > 0;;
  const isRepeatPasswordValid = !Boolean(errors.repeatPassword) && getValues("repeatPassword").length > 0;
  const isEmailValid = !Boolean(errors.email) && getValues("email").length > 0;



  return (
    <header className="flex justify-between items-center mt-8 h-28 w-full max-w-[80%] m-auto">
      <Image
        src="/logo/logo-linear-vertical.png"
        alt="logotipo da xp zone"
        width={98}
        height={115.2}
        className=" h-full w-auto object-contain cursor-pointer mb-9"
        quality={100}
        onClick={handleCLickInLogo}
      />
      <div className="space-x-9">

        {/* button sing in */}
        <Button.Root color="secondary" onClick={handleCLickSingInButton}>
          {" "}
          Entrar
        </Button.Root>

        {/* button advertise */}
        <Button.Root color="primary" onClick={handleCLickAdvertiseButton}>
          Anunciar grátis
        </Button.Root>


        {/* sheet  sing in*/}

        <Sheet
          open={openSheetSingIn}
          onOpenChange={handleCLickSingInButton}
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
                <Form.Input id="email" type="email" placeholder="Digite seu email" {...register("email")} />
              </Form.Control>

              <Form.Control className="grid grid-cols-2 gap-3 space-y-0">
                <Form.Control className="col-span-1 relative mt-0">
                  <Form.Label htmlFor="password" >
                    Crie uma senha <Form.FieldState isValid={isPasswordsAreHitting && isPasswordValid} />
                  </Form.Label>
                  <Form.Input id="password" type={`${isPasswordVisible ? "text" : "password"}`} placeholder="Crie uma senha"  {...register("password")} />
                  <span className=" absolute top-[39px] right-3 cursor-pointer text-secondary-white ">
                    {isPasswordVisible && <Eye className="w-6 h-6 " onClick={() => {
                      setIsPasswordVIsible((currentState) => !currentState)
                    }} />}
                    {!isPasswordVisible && <EyeOff className="w-6 h-6 " onClick={() => {
                      setIsPasswordVIsible((currentState) => !currentState)
                    }} />}
                  </span>
                </Form.Control>

                <Form.Control className="col-span-1 relative  mt-0">
                  <Form.Label htmlFor="repeatPassword" >
                    Repita sua senha <Form.FieldState isValid={isPasswordsAreHitting && isRepeatPasswordValid} />
                  </Form.Label>
                  <Form.Input id="repeatPassword" type={`${isRepeatPasswordVisible ? "text" : "password"}`} placeholder="Repita sua senha"  {...register("repeatPassword")} />
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

              <div className=" col-span-2 flex justify-between items-center mb-5">
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

        {/* sheet  advertise*/}
        <Sheet
          open={openSheetAdvertise}
          onOpenChange={handleCLickAdvertiseButton}
          defaultOpen={true}
        >
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>


      </div>
    </header>
  );
}
