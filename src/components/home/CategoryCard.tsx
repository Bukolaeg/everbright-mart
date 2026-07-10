interface CategoryCardProps {
  icon: string;
  title: string;
}

export default function CategoryCard({
  icon,
  title,
}: CategoryCardProps) {
  return (
    <div className="cursor-pointer rounded-xl border bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="mb-4 text-5xl">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
    </div>
  );
}