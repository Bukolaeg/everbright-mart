import CategoryCard from "./CategoryCard";

const categories = [
  { id: 1, icon: "🏠", title: "Household" },
  { id: 2, icon: "👗", title: "Fashion" },
  { id: 3, icon: "👜", title: "Bags" },
  { id: 4, icon: "💍", title: "Jewellery" },
  { id: 5, icon: "💄", title: "Beauty" },
  { id: 6, icon: "📱", title: "Electronics" },
  { id: 7, icon: "🎉", title: "Props" },
  { id: 8, icon: "🍳", title: "Kitchen Appliances" },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}