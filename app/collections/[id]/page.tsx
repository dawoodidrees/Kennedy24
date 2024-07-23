import Image from "next/image";
import Acknowledgement from "@/components/common/Acknowledgement";
import CollectionForm from "@/components/common/CollectionForm";
import CollectionPreview from "@/components/common/CollectionPreview";
import { collection1 } from "@/data/collections";
import Dog from "@/assets/images/collections/1/dog2.png";
import Car from "@/assets/images/collections/1/car.png";
import PersonWithDog from "@/assets/images/collections/1/person-with-dog.png";
import PersonRolledHands from "@/assets/images/collections/1/person-rolled-hands.png";

export default function Collection() {
  return (
    <div className="container">
      <CollectionForm collection={collection1} />
      <div className="mt-36 grid grid-cols-2 gap-20 md:mt-20 md:grid-cols-1 md:gap-12">
        <div className="flex flex-col gap-12 md:flex-col-reverse">
          <div className="space-y-8">
            <h3>Exclusive Community Access</h3>
            <p className="text-xl font-light !leading-[1.6] text-primary md:text-lg">
              Beyond owning a digital masterpiece, you will gain entry into an exclusive virtual community of like-minded donors. This space will be a hub for interaction, engagement, and collaboration, offering unique opportunities to connect with other supporters and stay
              informed about campaign milestones.
            </p>
          </div>
          <Image src={PersonWithDog} alt="collection" className="h-96 object-contain w-full" />
        </div>
        <div className="flex flex-col justify-between md:space-y-12">
          <Image src={PersonRolledHands} alt="collection" className="h-96 object-contain w-full" />
          <p className="text-xl font-light !leading-[1.6] text-primary md:text-lg">
            Only 2,024 NFTs will ever be minted, ensuring each piece remains a rare and valuable collectible. Each NFT is uniquely designed with different poses, clothing, and settings, making every piece a one-of-a-kind artwork.
          </p>
        </div>
      </div>
      <div className="mt-12 space-y-10 md:mt-16">
        <h3>Other Collections</h3>
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
            <CollectionPreview />
            <CollectionPreview />
            <CollectionPreview />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-1">
            <div className="sm:hidden" />
            <button className="btn-primary">Buy On Opensea</button>
          </div>
        </div>
      </div>
      <Acknowledgement className="py-16 md:pb-8" />
    </div>
  );
}
