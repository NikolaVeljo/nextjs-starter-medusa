import { useCollections } from "medusa-react";
import Link from "next/link";
import Image from "next/image";

const FeaturedProducts = () => {
  const { collections } = useCollections();

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-5xl text-gray-900 max-w-lg mb-4">
            About Us
          </p>
        </div>
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-5xl text-gray-900 max-w-lg mb-4">
            Popular Categories
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {collections &&
      collections.map((collection) => (
        <Link
        key={collection.id}
        href={`/collections/${collection.id}`}
        passHref
      >
         <div
        className="collection-item rounded-lg shadow-lg active:shadow-md relative transform transition-transform hover:scale-105 active:scale-100 cursor-pointer"
        >
          <Image
            src="/images/hero.jpg"
            alt={collection.title}
            layout="responsive"
            objectFit="cover"
            width={500}
            height={300}
            className="object-cover bg-blac bg-opacity-70"
          />
          <div className="text-2xl text-center p-2 select-none">
            {collection.title}
          </div>
        </div>
      </Link>
      ))}
    </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
