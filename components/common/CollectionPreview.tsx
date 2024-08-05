import cx from "classnames";
import { StaticImageData } from "next/image";

interface Props {
  className?: string;
  imageSrc: string | StaticImageData;
  text: string;
}

const CollectionPreview: React.FC<Props> = ({ className, imageSrc, text }) => {
  return (
    <div className={cx("shadow-[0px_4px_60px_#00000014] p-8 background-gradient-black", className)}>
      <div
        className="bg-white rounded-2xl flex"
        style={{
          aspectRatio: 0.8,
          backgroundImage: `url(${typeof imageSrc === "string" ? imageSrc : imageSrc.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="space-y-3 px-4 py-6">
        <div className="space-y-1">
          <p className={"text-base font-light text-white"}>Genesis Collection</p>
          <p className="text-xl font-semibold leading-[1.6] text-white">{text}</p>
          <p className={"text-base font-light text-white"}>128.3 x 102.3 cm (50.51 x 40.28 in)</p>
          <p className={"text-base font-light text-white"}>Collectible</p>
        </div>
        <div>
          <p className={"text-sm font-light text-white"}>Last sale at</p>
          <p className={"text-xl font-semibold leading-[1.6] text-white"}>$234,139</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
