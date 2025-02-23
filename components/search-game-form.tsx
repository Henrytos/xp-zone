"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem } from "./ui/form";

const searchGameFormSchema = z.object({
  search: z.string(),
  city: z.enum(["São Paulo", "Rio de Janeiro", "Santa catarina"]),
});

type SearchGameForm = z.infer<typeof searchGameFormSchema>;

export function SearchGameForm() {
  const form = useForm<SearchGameForm>({
    defaultValues: {
      city: "São Paulo",
      search: "",
    },
    resolver: zodResolver(searchGameFormSchema),
  });

  const handleSubmitSearchGameForm = (data: SearchGameForm) => {
    console.log(data);
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form
          className="flex items-center gap-5 w-1/2 border-[3px] rounded-md  "
          onSubmit={form.handleSubmit(handleSubmitSearchGameForm)}
        >
          <input
            type="text"
            placeholder="O que o dia de hoje está pedindo?"
            className="bg-transparent  text-2xl text-white placeholder:text-white/50 transition-all px-4 py-5 focus:outline-none w-[60%]"
            {...form.register("search")}
          />

          <button type="submit">
            <Search className="w-8 h-8 text-white" />
          </button>
          <span className=" w-1 h-12 bg-white rounded-sm" />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-[30%] text-2xl text-white  outline-none font-light flex gap-2 items-center focus:outline-none border-none focus:border-none  selection:border-none selection:outline-none w-[30%]">
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
