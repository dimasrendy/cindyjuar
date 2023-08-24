"use client";
import Image from "next/image";
import Background from "./Background.jpeg";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const sendTo = searchParams.get("to");

  return (
    <section className="max-w-md mx-auto relative">
      <div className="absolute h-screen w-full bg-white/10">
        <div className="relative h-full w-full -z-10">
          <Image
            src={Background}
            alt="Background Image"
            layout="fill"
            loading="eager"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="h-screen py-36 container px-4 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <p className="uppercase text-white font-semibold">The Wedding Of</p>
          <h1 className="text-white font-bold text-3xl">Cindy & Juar</h1>
        </div>

        <Link href={""} className="text-white">
          Buka Undangan
        </Link>
      </div>
    </section>
  );
}
