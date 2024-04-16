"use client";

import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import Logo from "@/assets/images/Logo.png";
import Socials from "@/components/common/Socials";

const Header = () => {
  return (
    <header className="py-8 shadow-[0px_0.8px_12px_#DEE2E6] sm:py-4">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={236}
            height={47}
            className="sm:h-8 sm:w-40"
          />
        </Link>
        <div className="flex items-center gap-[18px] sm:flex-col-reverse sm:gap-2">
          <p className={"text-red sm:text-[10px]"}>Follow KENNEDY24</p>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
