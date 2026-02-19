import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import ShopButton from "@/helper/ShopButton";

const ProductCard = ({ product }) => {
  return (
    <Card className="w-full mx-auto transition border-none shadow-md hover:shadow-xl">
      <CardContent className="pt-8 text-start">
        {/* Image with half circle background */}
        <div className="relative flex justify-center mb-12">
          <div
            className={`absolute -bottom-5 h-[103px] rounded-b-full w-[80%] ${product.color}`}
          ></div>

          <img
            src={product.image}
            alt={product.title}
            className="relative z-10 object-contain h-44"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold tracking-wide text-gray-800">
          {product.title}
        </h1>

        {/* Price */}
        <p className="mt-2 text-lg font-bold text-gray-900">
          Tk {product.price}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-start gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < product.rating
                  ? "fill-orange-400 text-orange-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">
            ({product.reviews})
          </span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-center justify-start gap-4 pb-6">
        <Button
          size="icon"
          className="bg-green-600 rounded-full h-11 w-11 hover:bg-green-700 px-[20px] py-0"
        >
          <ShoppingCart className="w-5 h-5 text-white" />
        </Button>

        {product.buyNow && (
          <ShopButton size={"sm"} path={""} title={"Buy Now"} />
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
