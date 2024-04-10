"use client";

import Image from "next/image";
import React from "react";
import cx from "classnames";
import DeclareLogo from "@/assets/images/DeclareLogo.png";
import HeroImage from "@/assets/images/Hero.jpg";
import M4Logo from "@/assets/images/M4Logo.png";
import PlaceholderImage from "@/assets/images/Placeholder.png";
import Acknowledgement from "@/components/common/Acknowledgement";
import CollectionView from "@/components/common/CollectionView";

export default function Home() {
  return (
    <div>
      <section className="relative grid grid-cols-2 sm:grid-cols-1">
        <Image src={HeroImage} alt="Hero" />
        <div className="flex items-center justify-end bg-accent-slate p-12 sm:justify-center sm:p-6">
          <div className="flex flex-col items-center gap-6">
            <Image
              src={DeclareLogo}
              alt="Declare Logo"
              width={528}
              height={158}
            />
            <p className="mx-auto max-w-[413px] text-center text-[17.6px] font-medium text-primary">
              As president, I will end the forever wars, clean up government,
              increase wealth for all, and tell Americans the truth.
            </p>
          </div>
        </div>
      </section>
      <section className="container space-y-14 py-14 sm:py-20">
        <div className="space-y-5">
          <h1>HEADING 2</h1>
          <p className={cx("text-center font-light text-primary")}>
            subheading
          </p>
        </div>
        <div className="space-y-8">
          <CollectionView isReady />
          <CollectionView />
          <CollectionView />
        </div>
      </section>
      <section className="container !max-w-[1266px] space-y-14 md:space-y-20">
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div
              className={cx(
                "flex gap-[30px] py-[70px] md:flex-col-reverse md:py-0",
                i % 2 === 1 ? "flex-row-reverse" : ""
              )}
              key={i}
            >
              <div className="flex basis-1/2 flex-col justify-center space-y-[25px]">
                <h1 className="text-left">ABOUT NFT</h1>
                <p className="text-[1.25rem] text-primary">
                  Lorem ipsum dolor sit amet consectetur. Bibendum porta in
                  faucibus et morbi nibh eget eu posuere. Eget nulla nec viverra
                  sit orci nunc elit. Magna mauris aliquet sapien ultricies
                  condimentum risus gravida elementum faucibus. Arcu faucibus
                  diam odio diam. Elit ultricies sed nunc amet faucibus turpis
                  lectus eget ultrices. Tellus in bibendum tincidunt in quam
                  iaculis interdum non. Fringilla ac ornare sit pellentesque.
                </p>
              </div>
              <div
                className={cx(
                  "flex basis-1/2 flex-col justify-center md:items-center",
                  i % 2 === 0 ? "items-end" : ""
                )}
              >
                <Image
                  src={PlaceholderImage}
                  alt="Placeholder"
                  width={350}
                  height={350}
                  className="sm:w-full"
                />
              </div>
            </div>
          ))}
      </section>
      <Acknowledgement className="py-14 md:pb-8" />
    </div>
  );
}
