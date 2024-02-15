import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/pages/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center p-4 justify-between overflow-hidden'
    >
     <Hero/>
    </main>
  );
}
