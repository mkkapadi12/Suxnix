import { products } from "@/Data/homepageData";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const ProductGrid = () => {
  return (
    <div>
      <section className="py-14 lg:py-16">
        <div className="container mx-auto max-w-[1320px] sm:px-12 lg:px-4">
          <div className="flex">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-[90%] mx-auto sm:max-w-xs md:max-w-5xl lg:max-w-full"
            >
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="px-2 py-4 md:basis-1/3 lg:basis-1/4"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:block lg:hidden absolute w-12 h-12 border-none rounded-none slick-arrow z-[2] before:bg-suxnix-text_secondary before:left-[-25px] left-5" />
              <CarouselNext className="hidden sm:block lg:hidden absolute w-12 h-12 border-none rounded-none before:bg-suxnix-text_secondary slick-arrow before:right-[-25pxpx] right-5" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGrid;
