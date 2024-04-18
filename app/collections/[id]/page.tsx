import Image from "next/image";
import Acknowledgement from "@/components/common/Acknowledgement";
import CollectionForm from "@/components/common/CollectionForm";
import CollectionPreview from "@/components/common/CollectionPreview";
import { collection1 } from "@/data/collections";
import Dog from "@/assets/images/collections/1/dog2.png";
import Car from "@/assets/images/collections/1/car.png";

export default function Collection() {
  return (
    <div className="container">
      <CollectionForm collection={collection1} />
      <div className="mt-36 grid grid-cols-2 gap-20 md:mt-20 md:grid-cols-1 md:gap-12">
        <div className="flex flex-col gap-12 md:flex-col-reverse">
          <div className="space-y-8">
            <h3>The Legendary Sienna</h3>
            <p className="text-xl font-light !leading-[1.6] text-primary md:text-lg">
              The beat-up 1998 Toyota Sienna, affectionately known as the "Doggy
              Van," is a central character in every NFT. Rendered in loving
              detail, the van showcases its battle scars, dog fur, and the
              peculiar absence of seatbelts - a quirky testament to Attila's
              mischievous nature.
            </p>
          </div>
          <Image
            src={Dog}
            alt="collection"
            className="h-96 object-cover w-full"
          />
        </div>
        <div className="flex flex-col justify-between md:space-y-12">
          <Image
            src={Car}
            alt="collection"
            className="h-96 object-cover w-full"
          />
          <p className="text-xl font-light !leading-[1.6] text-primary md:text-lg">
            Each NFT features vibrant, animated depictions of RFK Jr. and his
            dogs, set against the backdrop of the rugged beauty of the Santa
            Monica canyons. From the serene dawn mists to the exuberant energy
            of the dogs, every piece tells a story of companionship, adventure,
            and the simple joys of life.
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
