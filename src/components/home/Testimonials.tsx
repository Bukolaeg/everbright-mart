const testimonials = [
  {
    id: 1,
    name: "Aisha Bello",
    location: "Lagos",
    comment:
      "EverBright Mart helped me stock my shop with quality products at amazing wholesale prices.",
  },
  {
    id: 2,
    name: "Chinedu Okafor",
    location: "Abuja",
    comment:
      "The ordering process was simple, and my products arrived on time. Highly recommended!",
  },
  {
    id: 3,
    name: "Fatima Musa",
    location: "Kano",
    comment:
      "Excellent customer service and great prices. I'll definitely order again.",
  },
];
export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-4xl font-bold">
          What Our Customers Say
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Trusted by businesses and retailers across Nigeria.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <div className="mb-4 text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mb-6 italic text-gray-600">
                "{testimonial.comment}"
              </p>

              <h3 className="font-semibold">
                {testimonial.name}
              </h3>

              <p className="text-sm text-gray-500">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}