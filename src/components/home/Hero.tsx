import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <span className="mb-4 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          🇳🇬 Wholesale Shopping Made Easy
        </span>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
          Bright Choices.
          <span className="block text-blue-600">
            Better Prices.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-600">
          Shop household essentials, groceries, fashion, beauty products,
          electronics, bags, jewellery, clothing and more at wholesale prices
          across Nigeria.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>Shop Now</Button>
          <Button variant="outline">Explore Categories</Button>
        </div>
      </div>
    </section>
  );
}