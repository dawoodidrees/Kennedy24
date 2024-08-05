"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/Logo.png";
import Socials from "@/components/common/Socials";

const links = [
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "HEADING 2",
    href: "/heading",
  },
  {
    title: "CONTACT US",
    href: "/contact",
  },
  {
    title: "PRIVACY POLICY",
    href: "/privacy-policy",
  },
  {
    title: "TERMS OF SERVICE",
    href: "/terms-of-service",
  },
  {
    title: "ACCESSIBILITY STATEMENT",
    href: "/accessibility-statement",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#060622] pb-6 pt-12">
      <div className="container space-y-4 sm:space-y-16">
        <div className="flex items-start justify-between gap-8 sm:flex-col-reverse">
          <ul className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-4 sm:gap-x-0">
            {links.map((link) => (
              <Link href={link.href} className="w-fit whitespace-nowrap text-[0.8rem] font-bold text-white" key={link.title} target="_blank">
                {link.title}
              </Link>
            ))}
          </ul>
          <Image src={Logo} alt="Logo" width={236} height={47} />
        </div>
        <div className="flex items-end justify-between sm:flex-col sm:items-start">
          <div className="invisible sm:hidden">
            <p className="text-right text-[12.8px] font-bold text-white sm:text-left">PAID FOR BY TEAM KENNEDY</p>
            <p className="text-right text-[11.2px] text-white sm:text-left">Copyright @ 2023. All rights reserved.</p>
          </div>
          <Socials />
          <div className="sm:pl-4 sm:pt-4">
            <p className="text-right text-[12.8px] font-bold text-white sm:text-left">PAID FOR BY TEAM KENNEDY</p>
            <p className="text-right text-[11.2px] text-white sm:text-left">Copyright @ 2023. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
