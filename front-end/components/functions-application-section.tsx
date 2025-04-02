'use client';
import Image from 'next/image';
import { Title } from './title';
import { Text } from './text';
import { Form, FormField, FormItem } from './ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const selectCitySchema = z.object({
  city: z
    .enum(['São Paulo', 'Rio de Janeiro', 'Santa catarina'])
    .default('São Paulo'),
});
type SelectCitySchema = z.infer<typeof selectCitySchema>;

export function FunctionsApplicationSection() {
  const form = useForm<SelectCitySchema>({
    resolver: zodResolver(selectCitySchema),
    mode: 'onChange',
  });

  const handleSubmitSearchGameForm = (data: SelectCitySchema) => {
    console.log(data);
  };

  return (
    <>
      <section className="w-[80%] m-auto flex flex-col gap-24 justify-center items-center">
        <Title color="gradient" size="h2">
          Como funciona
        </Title>
        <div className="w-full grid grid-cols-5 gap-16">
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/search-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Pesquise o artigo que deseja
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/list-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Filtre por comprar ou trocar
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/control-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Escolha como pagar ou o item de troca
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/pin-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Combine a troca ou o tipo de entrega
            </Text>
          </div>
          <div className="space-y-10 flex flex-col justify-center items-center">
            <div className="w-48 h-48 rounded-full bg-secondary flex justify-center items-center">
              <Image
                width={62}
                height={62}
                alt="icone de busca"
                src="/images/icons/fire-icon.png"
                className="object-contain"
              />
            </div>
            <Text color="white" size="2xl" className="text-center">
              Finalize a negociação e ganhe XP
            </Text>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitSearchGameForm)}>
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-64 p-2 text-white border-2 rounded">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="text-2xl font-medium">
                      <SelectValue placeholder="Filtre sua cidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="São Paulo"
                        className="text-2xl text-black"
                      >
                        São Paulo
                      </SelectItem>
                      <SelectItem
                        value="Rio de Janeiro"
                        className="text-2xl text-black"
                      >
                        Rio de Janeiro
                      </SelectItem>
                      <SelectItem
                        value="Santa catarina"
                        className="text-2xl text-black"
                      >
                        Santa catarina
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </section>
    </>
  );
}
