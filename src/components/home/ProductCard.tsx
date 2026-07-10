import Button from "../ui/Button";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  rating: number;
}

export default function ProductCard({
  name,
  price,
  image,
  rating,
}: ProductCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="mt-2 text-2xl font-bold text-blue-600">
          ₦{price.toLocaleString()}
        </p>

        <p className="mt-2 text-yellow-500">
          {"⭐".repeat(rating)}
        </p>

        <div className="mt-5">
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}