"use client";
import Image from "next/image";
import Background from "./Background.jpeg";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { qwitcher_grypen } from "./fonts";

export default function Home() {
  const searchParams = useSearchParams();

  const sendTo = searchParams.get("to")?.replaceAll("-", " ");

  return (
    <section className="max-w-lg mx-auto relative">
      <div className="absolute h-screen w-full bg-white/10">
        <div className="relative h-full w-full -z-10">
          <Image
            src={Background}
            alt="Background Image"
            fill
            loading="eager"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="h-screen pt-32 pb-36 container px-4 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <p className="uppercase font-semibold text-primary">The Wedding Of</p>
          <h1
            className={` text-7xl text-primary tracking-wider font-medium ${qwitcher_grypen.className}`}
          >
            Cindy & Juar
          </h1>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <p className="text-secondary text-sm tracking-widest">Yth. Bapak/Ibu/Saudara/i</p>
            <p className="text-secondary capitalize tracking-wide text-lg">{sendTo ?? "Tamu Undangan"}</p>
          </div>
          <Link href="/invitation" className="text-white btn-white z-10">
            Open the invitation
          </Link>
        </div>
      </div>
    </section>
  );
}
