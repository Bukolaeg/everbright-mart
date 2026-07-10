import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Designer Handbag",
    price: 25000,
    image: "https://picsum.photos/300/300?random=1",
    rating: 5,
  },
  {
    id: 2,
    name: "Ankara Gown",
    price: 18000,
    image: "https://picsum.photos/300/300?random=2",
    rating: 4,
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 32000,
    image: "https://picsum.photos/300/300?random=3",
    rating: 5,
  },
  {
    id: 4,
    name: "Kitchen Blender",
    price: 45000,
    image: "https://picsum.photos/300/300?random=4",
    rating: 5,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Featured Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}