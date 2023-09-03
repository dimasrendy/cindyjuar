'use client'
import Photo1 from "@/components/Gallery/Photo1.jpeg";
import Photo2 from "@/components/Gallery/Photo2.jpg";
import Photo3 from "@/components/Gallery/Photo3.jpg";
import Photo4 from "@/components/Gallery/Photo4.jpg";
import Photo5 from "@/components/Gallery/Photo5.jpeg";
import Photo6 from "@/components/Gallery/Photo6.jpg";
import Photo7 from "@/components/Gallery/Photo7.jpg";
import Photo8 from "@/components/Gallery/Photo8.jpeg";
import Image from "next/image";
import { useState } from "react";
import IconClose from "@/app/IconCloseBurger.svg";
import Arrow from "@/app/ArrowRightWhite.svg";

const GalleryContainer = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (index: any) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(imageList.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === imageList.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1)
  };

  const imageList = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
  ];

  return (
    <section className="px-4 py-6 grid grid-cols-2 gap-2 relative">
      {imageList.map((image, i) => (
        <div
          className="relative w-full h-80"
          key={i}
          onClick={() => handleModal(i)}
        >
          <Image
            src={image}
            alt="Cindy & Juar"
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
      ))}

      {openModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/80 flex items-center justify-center w-full h-full">
          <Image
            src={IconClose}
            alt="Icon Close"
            role="button"
            width={24}
            height={24}
            className="absolute top-10 right-10 z-10"
            onClick={() => setOpenModal(false)}
          />
          <Image
            src={Arrow}
            role="button"
            alt="Icon Close left"
            width={24}
            height={24}
            className="absolute top-1/2 left-5 z-10 rotate-180"
            onClick={() => prevSlide()}
          />
          <Image
            src={Arrow}
            role="button"
            alt="Icon Close right"
            width={24}
            height={24}
            className="absolute top-1/2 right-5 z-10"
            onClick={() => nextSlide()}
          />
          <div className="relative w-full h-[640px]">
            <Image
              src={imageList[slideNumber]}
              alt="Fullscreen image Cindy & Juar"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryContainer;
