import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-home-start  ">
      <div className="w-full h-full z-10 absolute ">
        <Header />
      </div>
    </main>
  );
}
