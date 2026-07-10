import { FaShippingFast, FaShieldAlt, FaTags, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-4xl text-blue-600" />,
    title: "Fast Delivery",
    description: "Quick and reliable delivery across Nigeria.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    title: "Secure Payments",
    description: "Upload your payment proof with confidence.",
  },
  {
    icon: <FaTags className="text-4xl text-blue-600" />,
    title: "Wholesale Prices",
    description: "Enjoy competitive prices on bulk purchases.",
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-600" />,
    title: "Customer Support",
    description: "Friendly support whenever you need assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Why Shop With EverBright Mart?
        </h2>

        <p className="mb-12 text-center text-gray-600">
          We're committed to providing a reliable wholesale shopping experience.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="mb-2 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}