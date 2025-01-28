import { Button } from "@/components/button";
export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-home-start  ">
      <div className="w-full h-full z-10 absolute ">
        <Button.Root>my names henry</Button.Root>
        <Button.Root color="secundary">my names henry</Button.Root>
      </div>
    </main>
  );
}
