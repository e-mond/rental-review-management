import { FaCube } from "react-icons/fa";

const rentalOptions = [
  {
    title:
      "Choose the Right Rental Duration for Your Lifestyle and Preferences",
    description:
      "Our platform accommodates both short-term stays and long-term leases, ensuring flexibility.",
    link: "Learn More",
  },
  {
    title:
      "Seamless Transition Between Short-Term and Long-Term Rentals Made Easy",
    description:
      "Easily switch between rental durations to suit your changing needs.",
    link: "Sign Up",
  },
  {
    title:
      "Experience the Benefits of Versatile Rental Durations with Our System",
    description:
      "Enjoy the freedom to choose how long you stay with our service.",
    link: "Explore",
  },
];

const RentalTerms = () => {
  return (
    <section className="text-center py-16 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold mb-10">
        Flexible Rental Options for Every Need: <br /> Short-Term and Long-Term
        Solutions
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {rentalOptions.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 border rounded-lg shadow-md bg-gray-100"
          >
            <FaCube className="text-3xl mx-auto mb-4 text-200" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2 mb-4">{feature.description}</p>
            <button
              className="font-semibold text-500 hover:underline"
              onClick={() => alert(`${feature.link} clicked!`)}
            >
              {feature.link} &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentalTerms;
