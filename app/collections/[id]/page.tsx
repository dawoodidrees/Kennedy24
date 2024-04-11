import Acknowledgement from "@/components/common/Acknowledgement";
import CollectionForm from "@/components/common/CollectionForm";
import CollectionPreview from "@/components/common/CollectionPreview";

export default function Collection() {
  return (
    <div className="container">
      <CollectionForm className="mt-8 md:mt-16" />
      <div className="mt-36 grid grid-cols-2 gap-20 md:mt-20 md:grid-cols-1 md:gap-12">
        <div className="flex flex-col gap-12 md:flex-col-reverse">
          <div className="space-y-8">
            <h3>Artist Chris Levine</h3>
            <p className="text-xl font-light !leading-[1.6] text-primary md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Duis neque tellus
              pellentesque fermentum gravida ut. Ornare congue tincidunt lectus
              pharetra euismod in. Sed nisl massa orci egestas. Montes sed felis
              varius molestie quis sed tellus morbi lorem. Eget sit sapien sed
              vitae ante blandit nulla. Ullamcorper urna convallis a sed
              suspendisse turpis gravida. Ultrices ac eget nunc pellentesque
              convallis nibh. Fermentum pulvinar nec nisi lectus aenean. Egestas
              commodo molestie nullam interdum eu felis. In massa eget libero
              tellus ac. Varius aenean neque sit sed. Lectus dui facilisis nisi
              eget. At neque eu curabitur nunc. Gravida fames rhoncus lorem
              dictum. Nibh eu donec in leo viverra. Pulvinar suscipit diam
              imperdiet enim nisl rutrum velit iaculis semper. Dictum tincidunt
              odio sapien nulla lectus eget varius pellentesque. Nisl congue
              arcu mattis massa sit rutrum fringilla nam. Dignissim augue ut
              tempor nec molestie fusce volutpat.
            </p>
          </div>
          <div className="h-80 bg-primary"></div>
        </div>
        <div className="flex flex-col justify-between md:space-y-12">
          <div className="h-[480px] bg-primary"></div>
          <p className="text-xl font-light !leading-[1.6] text-primary md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Morbi gravida hendrerit
            gravida quisque maecenas tortor. Id eu sed viverra semper massa diam
            justo. Non viverra cras lobortis nunc metus aliquam semper
            vulputate. Natoque rutrum pulvinar vel sit donec. Pharetra velit
            rhoncus in volutpat arcu. Parturient lectus risus mauris adipiscing
            cursus. At condimentum leo sagittis vitae eu. Vel sed nullam
            dignissim turpis. Venenatis ut purus quis diam suspendisse neque
            massa.
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
