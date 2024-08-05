import Image from "next/image";
import Acknowledgement from "@/components/common/Acknowledgement";
import CollectionForm from "@/components/common/CollectionForm";
import CollectionPreview from "@/components/common/CollectionPreview";
import { collection1 } from "@/data/collections";
import PersonWithDog from "@/assets/images/collections/1/person-with-dog.png";
import PersonRolledHands from "@/assets/images/collections/1/person-rolled-hands.png";
import PreviewImage1 from "@/assets/images/collections/1/collection-preview-image-1.png";
import PreviewImage2 from "@/assets/images/collections/1/collection-preview-image-2.png";
import PreviewImage3 from "@/assets/images/collections/1/collection-preview-image-3.png";

export default function Collection() {
  return (
    <div className="bg-[#060622]">
      <div className="container">
        <CollectionForm collection={collection1} />
        <div className="mt-36 grid grid-cols-1 gap-20 md:mt-20 md:grid-cols-1 md:gap-12">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-12 md:gap-6 bg-[#101011] items-center">
            <div className="space-y-8 md:space-y-4 px-10 md:px-5 py-5 md:py-3">
              <h3 className="text-white md:text-xl">Exclusive Community Access</h3>
              <p className="text-2xl font-light md:text-base leading-loose text-white">
                Beyond owning a digital masterpiece, you will gain entry into an exclusive virtual community of like-minded donors. This space will be a hub for interaction, engagement, and collaboration, offering unique opportunities to connect with other supporters and stay
                informed about campaign milestones..
              </p>
            </div>
            <Image src={PersonRolledHands} alt="collection" className="h-full object-cover w-full md:h-80 md:object-left-top" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-12 md:gap-6 bg-[#101011] items-center">
            <Image src={PersonWithDog} alt="collection" className="h-full object-cover w-full md:h-80 md:object-left-top" />
            <div className="space-y-8 md:space-y-4 px-10 md:px-5 py-5 md:py-3">
              <h3 className="text-white md:text-xl">Exquisite Craftsmanship</h3>
              <p className="text-2xl font-light md:text-base leading-loose text-white">
                Only 2,024 NFTs will ever be minted, ensuring each piece remains a rare and valuable collectible. Each NFT is uniquely designed with different poses, clothing, and settings, making every piece a one-of-a-kind artwork.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 space-y-10 md:mt-16 mb-48 md:mb-10">
          <h3 className="text-white md:text-2xl">Other Collections</h3>
          <div className="space-y-16">
            <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
              <CollectionPreview text="#001" imageSrc={PreviewImage1} />
              <CollectionPreview text="#002" imageSrc={PreviewImage2} />
              <CollectionPreview text="#003" imageSrc={PreviewImage3} />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-1">
              <div className="sm:hidden" />
              <button className="btn-primary">Buy On Opensea</button>
            </div>
          </div>
        </div>
        <Acknowledgement className="py-16 md:pb-8" />
      </div>
    </div>
  );
}
