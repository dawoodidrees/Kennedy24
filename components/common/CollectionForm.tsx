"use client";

import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import Slider from "rc-slider";
import LoginModal from "./Modal/LoginModal";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { CollectionPreview } from "@/types/collection.interface";
// import { useGlobalContext } from "@/context/global-context";
import { useLocalStorage } from "usehooks-ts";

interface Props {
  collection: CollectionPreview;
}

const CollectionForm: React.FC<Props> = ({ collection }) => {
  // const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  // const { setDonationAmount } = useGlobalContext();
  const [donationAmount, setDonationAmount] = useLocalStorage(
    "donationAmount",
    1
  );

  const handleBuyNft = () => {
    setDonationAmount(price);
    if (!session) {
      setIsOpen(true);
    } else {
      router.push(`${pathname}/kyc`);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-20 md:grid-cols-1 md:gap-8 mt-8 md:mt-16">
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Image
        src={collection.image}
        alt="collection"
        className="mx-auto w-full max-w-[440px] aspect-[0.8] flex-shrink-0 object-cover"
      />
      <div>
        <div>
          <h2>{collection.title}</h2>
          <h4>{collection.subtitle}</h4>
          <p className={cx("mt-6 text-base font-light text-primary")}>
            {collection.description}
            <br />
            <span className="cursor-pointer font-medium">Read more</span>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
          {/* <div className="flex items-center gap-3.5">
            <button
              className="flex h-6 w-6 items-center justify-center border border-primary"
              onClick={() => setCount((prev) => Math.max(1, prev - 1))}
            >
              <Icon icon="bx:minus" className="text-xl text-primary" />
            </button>
            <div className="flex h-12 w-12 items-center justify-center border-[3px] border-primary">
              <p className="text-base font-bold text-primary">{count}</p>
            </div>
            <button
              className="flex h-6 w-6 items-center justify-center border border-primary"
              onClick={() => setCount((prev) => prev + 1)}
            >
              <Icon icon="bx:plus" className="text-xl text-primary" />
            </button>
          </div> */}
          <button
            className="btn-primary w-full max-w-[300px]"
            onClick={handleBuyNft}
          >
            Buy
          </button>
        </div>
        <div className="mt-8 md:mt-6">
          <h4>Choose your price</h4>
          <div className="relative mt-12">
            <p
              className="absolute bottom-[50px] flex h-5 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold text-white md:w-8 md:text-[10px]"
              style={{ left: (price / 1000) * 100 + "%" }}
            >
              {price}
            </p>
            <Slider
              defaultValue={price}
              min={1}
              max={1000}
              railStyle={{ height: 10, background: "#EFF0F6" }}
              trackStyle={{ height: 10, background: "#2B2C78" }}
              handleStyle={{
                marginTop: -7,
                width: 24,
                height: 24,
                backgroundColor: "#fff",
                boxShadow: "0px 2px 4px 0px #14142B14",
                border: "1px solid #D9DBE9",
              }}
              onChange={(value) => setPrice(value as number)}
            />
            <div className="mt-2 flex justify-between">
              <p className={cx("text-sm font-light text-[#666666]")}>1$</p>
              <p className={cx("text-sm font-light text-[#666666]")}>1000$</p>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-5 md:mt-12">
          <div>
            <p className={cx("text-sm font-light text-[#666] md:text-xs")}>
              Total amount of donations
            </p>
            <p className="text-[27px] font-semibold !leading-[1.6] text-primary md:text-xl">
              2234
            </p>
          </div>
          <div>
            <p className={cx("text-sm font-light text-[#666] md:text-xs")}>
              Highest donation
            </p>
            <p className="text-[27px] font-semibold !leading-[1.6] text-primary md:text-xl">
              $1320
            </p>
          </div>
          <div>
            <p className={cx("text-sm font-light text-[#666] md:text-xs")}>
              Total donors
            </p>
            <p className="text-[27px] font-semibold !leading-[1.6] text-primary md:text-xl">
              1241
            </p>
          </div>
          <div>
            <p className={cx("text-sm font-light text-[#666] md:text-xs")}>
              Latest donation
            </p>
            <div className="flex items-baseline gap-2">
              <p className="text-[27px] font-semibold !leading-[1.6] text-primary md:text-xl">
                Jan 31
              </p>
              <p className={cx("text-sm font-light text-[#666]")}>
                11:30 AM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionForm;
