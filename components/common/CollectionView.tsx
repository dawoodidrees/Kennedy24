import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import ManImage from "@/assets/images/Man.jpg";
import { CollectionPreview } from "@/types/collection.interface";

interface Props {
  className?: string;
  isReady?: boolean;
  collection: CollectionPreview;
}

const CollectionView: React.FC<Props> = ({ className, isReady = false, collection }) => {
  return (
    <div className={cx(`relative flex gap-12 p-10 lg:flex-col md:px-4 md:-mx-4 ${isReady ? "bg-[#101011]" : "bg-[#aeaeb6]"}`, className)}>
      {!isReady && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[rgba(0,0,0,0.6)]">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div className={cx("absolute top-1/2 flex -translate-x-1/3 -translate-y-1/2 gap-4 py-2", i === 0 ? "rotate-6 bg-red" : "-rotate-6 bg-primary")} key={i}>
                {Array(20)
                  .fill(0)
                  .map((_, i) => (
                    <p className={cx("whitespace-nowrap text-[1.25rem] font-medium text-white", i !== 0 && "border-l-2 border-white pl-4")} key={i}>
                      COMING SOON
                    </p>
                  ))}
              </div>
            ))}
        </div>
      )}
      <div className="flex gap-12 md:flex-col">
        <Image src={collection.image} alt="collection" className={`aspect-[0.8] w-80 flex-shrink-0 object-cover md:mx-auto ${isReady ? "border border-white" : ""}`} />
        <div className="flex flex-col gap-4">
          <p className={`text-[35px] font-semibold !leading-[1.6] ${isReady ? "text-white" : "text-primary"}`}>{collection.title}</p>
          <p className={`text-xl !leading-[1.6] ${isReady ? "text-white" : "text-primary"}`}>{collection.description}</p>
          <div className="mt-auto space-y-4">
            {/* <p className={"text-primary"}>Text here</p> */}
            <div className="flex gap-8 md:gap-2">
              <Link href="/collections/1" className={`btn-primary whitespace-nowrap ${isReady ? "" : "!bg-[#2b2c78] !text-[#AEAEB6] !border-transparent"}`}>
                Explore Collection
              </Link>
              {/* <button className="btn-primary-outlined">
                <span className="flex items-center gap-2">
                  <Icon icon="bi:share" className="text-2xl" />
                  Share
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className={`grid w-full max-w-72 flex-shrink-0 gap-6 border-gray-500 p-8 lg:max-w-none lg:grid-cols-2 md:px-4 md:gap-4 ${isReady ? "bg-[#05051CD9] rounded-lg" : "border-[3px]"}`}>
        <div className={cx("flex items-center gap-2 lg:col-span-2", isReady ? "background-gradient text-white" : "")}>
          <div className="h-12 w-12 rounded-[10px] border border-gray-inherit" />
          <p className="text-[1.1rem] font-semibold text-inherit">Brand</p>
        </div>
        <div>
          <p className={"attr-title"} style={isReady ? { color: "#fff" } : {}}>
            Total amount of donations
          </p>
          <p className={cx("attr-description", isReady ? "background-gradient !text-white" : "")}>2234</p>
        </div>
        <div>
          <p className={"attr-title"} style={isReady ? { color: "#fff" } : {}}>
            Total donors
          </p>
          <p className={cx("attr-description", isReady ? "background-gradient !text-white" : "")}>1241</p>
        </div>
        <div>
          <p className={"attr-title"} style={isReady ? { color: "#fff" } : {}}>
            Highest donation
          </p>
          <p className={cx("attr-description", isReady ? "background-gradient !text-white" : "")}>$1320</p>
        </div>
        <div>
          <p className={"attr-title"} style={isReady ? { color: "#fff" } : {}}>
            Latest donation
          </p>
          <div className={cx("flex items-baseline gap-2", isReady ? "background-gradient !text-white" : "")}>
            <p className={"attr-description"} style={isReady ? { color: "#fff" } : {}}>
              Jan 31
            </p>
            <p className={"text-sm font-light text-inherit"}>11:30 AM EST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionView;
