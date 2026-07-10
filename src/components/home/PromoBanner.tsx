import Button from "../ui/Button";

export default function PromoBanner() {
  return (
    <section className="my-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 px-8 py-16 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold">
          🎉 July Wholesale Deals
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Save up to 30% on selected household items, fashion,
          kitchen appliances, beauty products, props and electronics.
        </p>

        <div className="mt-8">
          <Button>Shop Now</Button>
        </div>
      </div>
    </section>
  );
}