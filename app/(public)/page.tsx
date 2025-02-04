import { CarrouselVideoGamesPlatforms } from "@/components/carrousel-video-game-platforms";
import { Header } from "@/components/header/";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, Search } from "lucide-react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",

})
export default function HomePage() {

  return (
    <main className="min-h-screen w-full bg-home-start  ">
      <section className="w-full h-full z-10 absolute ">
        <Header />
        <div className="mt-20 max-w-[80%] mx-auto flex flex-col gap-20">
          <div className={`${orbitron.className} w-1/2 text-white font-medium text-5xl/tight`}>
            <h1 >
              <span className="text-transparent  bg-radiant-linear bg-clip-text"> >> {" "}</span>
              Compre

            </h1>
            <h1 className=" text-transparent inline-block bg-radiant-linear bg-clip-text">
              Os melhores artigos gamers na sua cidade!
            </h1>
          </div>

          <div className="w-[35%] text-[#BFB4D0] text-2xl font-semibold">
            Nunca foi tão fácil conseguir aquele jogo ou console tão sonhado com a XP Zone.
          </div>
          <form className="flex items-center gap-5 w-1/2 border-[3px] rounded-md  ">

            <input type="text" name="" id="" placeholder="O que o dia de hoje está pedindo?" className="bg-transparent  text-2xl text-white placeholder:text-white/50 transition-all px-2 py-5 focus:outline-none w-[52%]" />
            <button type="submit">
              <Search className="w-8 h-8 text-white" />
            </button>
            <span className=" w-1 h-12 bg-white rounded-sm" />



            <Select>
              <SelectTrigger className="w-[30%] text-2xl text-white  outline-none font-light flex gap-2 items-center focus:outline-none border-none focus:border-none  selection:border-none selection:outline-none">
                <SelectValue placeholder="Filtre sua cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="São Paulo" className="text-2xl text-black">São Paulo</SelectItem>
                <SelectItem value="Rio de Janeiro" className="text-2xl text-black">Rio de Janeiro</SelectItem>
                <SelectItem value="Santa catarina" className="text-2xl text-black">Santa catarina</SelectItem>
              </SelectContent>
            </Select>
          </form>
        </div>
        <CarrouselVideoGamesPlatforms />
      </section>
    </main>
  );
}
