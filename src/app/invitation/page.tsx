"use client";
import ImageTop from "@/app/ImageTop.webp";
import Flower from "@/app/Flower.png";
import AkadImage from "@/app/AkadImage.png";
import ResepsiImage from "@/app/ResepsiImage.png";
import LocationImage from "@/app/LocationImage.png";
import SoundOn from "@/app/soundOn.png";
import SoundOff from "@/app/soundOff.png";
import Image from "next/image";
import { cormorand_garamont, inter, qwitcher_grypen } from "../fonts";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
import ReactHowler from "react-howler";
import GalleryContainer from "@/components/Gallery/page";
import FooterImage from "@/components/Gallery/Photo1.jpeg";
dayjs.extend(duration);

const Invitation = () => {
  const weddingDate = dayjs("2023-09-16 09:00");
  const [currentTime, setCurrentTime] = useState(dayjs());
  const timeBetween = dayjs.duration(weddingDate.diff(currentTime));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeBetween = [
    { time: timeBetween.days(), name: "Hari" },
    { time: timeBetween.hours(), name: "Jam" },
    { time: timeBetween.minutes(), name: "Menit" },
    { time: timeBetween.seconds(), name: "Detik" },
  ];

  return (
    <section className="max-w-lg h-screen mx-auto relative">
      <div className={`relative h-[620px] flex flex-col items-center justify-end pb-20 ${cormorand_garamont.className} text-white`}>
        <div className="absolute inset-0 -z-10">
          <Image
            src={ImageTop}
            fill
            alt="Image Header"
            className="object-cover object-center"
            loading="eager"
            priority={true}
          />
        </div>
        <p className="font-bold text-4xl tracking-widest">The Wedding Of</p>
        <p className={`${qwitcher_grypen.className} text-7xl font-bold`}>Cindy & Juar</p>
      </div>

      <ReactHowler src={"/janjikita.mp3"} playing={isPlaying} loop />
      <div className="container px-4 py-4">
        <div className="bg-black1 p-6 flex flex-col gap-y-4 justify-center items-center rounded-lg">
          <p className="text-center text-white font-medium">
            “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan Nya untukmu
            pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan
            hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
            demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
            berfikir.”
          </p>
          <p className="text-white">(Ar-Rum: 21)</p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-y-4 items-center justify-center">
        <div>
          <p
            className={`font-semibold text-2xl text-center ${cormorand_garamont.className}`}
          >
            Pasangan
          </p>
          <p
            className={`font-bold text-4xl -mt-2 ${cormorand_garamont.className}`}
          >
            Pengantin
          </p>
          <p className="text-center tracking-widest font-bold">. . . .</p>
        </div>

        <div className="flex flex-col items-center">
          <p
            className={`${qwitcher_grypen.className} text-5xl font-bold tracking-wide`}
          >
            Cindia Putri Septiani
          </p>
          <p
            className={`${cormorand_garamont.className} text-center text-lg w-4/5`}
          >
            Putri Kedua dari Bapak Husni Thamrin (Ketua RT 05 Cluster Rhabayu
            Oceanic) & Ibu Rubiatun (Dedek)
          </p>
        </div>

        <p className={`${cormorand_garamont.className} text-5xl`}>&</p>

        <div className="flex flex-col items-center">
          <p
            className={`${qwitcher_grypen.className} text-5xl font-bold tracking-wide`}
          >
            Juardianto
          </p>
          <p className={`${cormorand_garamont.className} text-center text-lg`}>
            Putra Ketiga dari Bapak Aris & Ibu Roliyah
          </p>
        </div>
        <div className="relative w-full h-52 object-contain object-center">
          <Image src={Flower} alt="Flower" fill />
        </div>
      </div>

      <div className="bg-black1 text-white text-center px-4 py-6">
        <p className={`font-medium text-2xl ${cormorand_garamont.className}`}>
          {"Assalamu’alaikum Warahmatullahi Wabarakatuh"}
        </p>
        <p className="mt-4 mb-8">
          {
            "Dengan memohon Rahmat Allah Subhanahu wa Ta’ala dan dengan segenap kerendahan hati, perkenankanlah kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang akan dilaksanakan pada:"
          }
        </p>

        <div className="flex flex-col gap-y-6">
          <div
            className={`rounded-lg p-4 bg-white w-full text-tertiary flex flex-col gap-2 items-center text-lg font-medium ${cormorand_garamont.className}`}
          >
            <div className="relative h-24 w-24 mx-auto">
              <Image
                alt="Akad Image"
                src={AkadImage}
                fill
                className="object-contain object-center"
              />
            </div>
            <p className="text-center font-semibold text-3xl">Akad</p>
            <div className="grid grid-cols-3 items-center gap-x-2 text-2xl font-semibold">
              <p className="text-center">Sabtu</p>
              <div
                className={`flex flex-col gap-y-2 border-x-2 border-tertiary px-4 text-center font-bold ${inter.className}`}
              >
                <p className="text-3xl">16</p>
                <p>2023</p>
              </div>
              <p className="text-center">September</p>
            </div>
            <p className="text-xl">
              Pukul <span className={`${inter.className} text-lg`}>09:00</span>{" "}
              WIB - <span className={`${inter.className} text-lg`}>11:00</span>{" "}
              WIB
            </p>

            <div className="flex flex-col items-center">
              <p>Alamat:</p>
              <p>Kediaman Mempelai Wanita</p>
            </div>

            <p className="font-semibold text-xl text-center">
              Cluster Oceanic Rhabayu Blok F. No 20 Kelurahan Patam Lestari
              Kecamatan Sekupang Batam
            </p>

            <a
              href="https://goo.gl/maps/SUBSjijxz3cKyMx37"
              className="btn-yellow3 text-lg font-semibold flex items-center gap-x-2 shadow-lg my-4"
            >
              <div className="relative h-6 w-6">
                <Image
                  src={LocationImage}
                  alt="Location Image"
                  fill
                  className="object-contain object-center"
                />
              </div>
              Lihat Lokasi
            </a>
          </div>

          <div
            className={`rounded-lg p-4 bg-white w-full text-tertiary flex flex-col gap-2 items-center text-lg font-medium ${cormorand_garamont.className}`}
          >
            <div className="relative h-24 w-24 mx-auto">
              <Image
                alt="Resepsi Image"
                src={ResepsiImage}
                fill
                className="object-contain object-center"
              />
            </div>
            <p className="text-center font-semibold text-3xl">Resepsi</p>
            <div className="grid grid-cols-3 items-center gap-x-2 text-2xl font-semibold">
              <p className="text-center">Sabtu</p>
              <div
                className={`flex flex-col gap-y-2 border-x-2 border-tertiary px-4 text-center font-bold ${inter.className}`}
              >
                <p className="text-3xl">16</p>
                <p>2023</p>
              </div>
              <p className="text-center">September</p>
            </div>
            <p className="text-xl">
              Pukul <span className={`${inter.className} text-lg`}>13:00</span>{" "}
              WIB - Selesai
            </p>

            <div className="flex flex-col items-center">
              <p>Alamat:</p>
              <p>Kediaman Mempelai Wanita</p>
            </div>

            <p className="font-semibold text-xl text-center">
              Cluster Oceanic Rhabayu Blok F. No 20 Kelurahan Patam Lestari
              Kecamatan Sekupang Batam
            </p>

            <a
              href="https://goo.gl/maps/SUBSjijxz3cKyMx37"
              className="btn-yellow3 text-lg font-semibold flex items-center gap-x-2 shadow-lg my-4"
            >
              <div className="relative h-6 w-6">
                <Image
                  src={LocationImage}
                  alt="Location Image"
                  fill
                  className="object-contain object-center"
                />
              </div>
              Lihat Lokasi
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-6">
        <div className="container px-4">
          <div className="relative w-full h-48 object-contain object-center">
            <Image src={Flower} alt="Flower" fill />
          </div>
          <h2
            className={`text-center text-tertiary font-bold text-3xl ${cormorand_garamont.className}`}
          >
            Menuju Hari Bahagia
          </h2>
          <div className="grid grid-cols-4 gap-x-2 mt-4">
            {getTimeBetween.map((time) => (
              <div
                className="bg-[#c98796] py-2 px-4 rounded-lg text-white flex flex-col items-center justify-center"
                key={time.name}
              >
                <p className="text-2xl font-bold">{time.time}</p>
                <p className="font-semibold">{time.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10">
          <h2
            className={`text-center text-tertiary font-bold text-3xl ${cormorand_garamont.className}`}
          >
            Gallery
          </h2>
          <GalleryContainer />
        </div>
      </div>

      <div className={`relative h-[620px] ${cormorand_garamont.className}`}>
        <div className="absolute inset-0 -z-10">
          <Image
            src={FooterImage}
            alt="Background Footer"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <p className="text-center text-white font-bold pt-16 text-3xl">
          TERIMAKASIH
        </p>
        <p
          className={`${qwitcher_grypen.className} text-white font-bold text-6xl text-center`}
        >
          Cindy & Juar
        </p>
      </div>

      <div
        className="fixed rounded-full top-8 left-4"
        role="button"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <div className="relative h-10 w-10">
          <Image
            src={isPlaying ? SoundOn : SoundOff}
            alt="Song image played"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Invitation;
