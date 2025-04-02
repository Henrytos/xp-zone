'use client';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormField, FormItem } from './ui/form';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const searchGameFormSchema = z.object({
  search: z.string({ message: 'opção invalida' }).min(2),
  city: z
    .enum(['São Paulo', 'Rio de Janeiro', 'Santa catarina'])
    .default('São Paulo'),
});

type SearchGameForm = z.infer<typeof searchGameFormSchema>;

export function SearchGameForm() {
  const form = useForm<SearchGameForm>({
    defaultValues: {
      city: 'São Paulo',
      search: '',
    },
    resolver: zodResolver(searchGameFormSchema),
    mode: 'all',
  });

  const handleSubmitSearchGameForm = (data: SearchGameForm) => {
    console.log(data);
    form.reset();
  };

  const isInvalidForm = Boolean(form.formState.errors.search);

  return (
    <>
      <Form {...form}>
        <form
          className={clsx(
            'flex items-center gap-5 w-1/2 border-[3px] rounded-md',
            {
              'border border-red-500': isInvalidForm,
            },
          )}
          onSubmit={form.handleSubmit(handleSubmitSearchGameForm)}
        >
          <motion.input
            type="text"
            placeholder="O que o dia de hoje está pedindo?"
            animate={isInvalidForm}
            variants={{
              true: {
                translateX: 10,
              },
            }}
            className={clsx(
              'bg-transparent  text-2xl   transition-all px-4 py-5 focus:outline-none w-[60%]',
              {
                'text-red-500': isInvalidForm,
                'text-white': !isInvalidForm,
              },
            )}
            {...form.register('search')}
          />

          <button type="submit">
            <Search
              className={twMerge(
                clsx('w-8 h-8 text-white', {
                  'text-red-500': isInvalidForm,
                }),
              )}
            />
          </button>
          <span
            className={twMerge(
              clsx('w-1 h-12 bg-white rounded-sm', {
                'bg-red-500': isInvalidForm,
              }),
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem
                className={twMerge(
                  clsx(
                    'text-2xl text-white  outline-none font-light flex gap-2 items-center focus:outline-none border-none focus:border-none  selection:border-none selection:outline-none w-[30%]',
                    {
                      'text-red-500': isInvalidForm,
                    },
                  ),
                )}
              >
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="text-2xl">
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
    </>
  );
}
