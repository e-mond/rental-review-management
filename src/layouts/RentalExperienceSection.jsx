import { FaCube } from "react-icons/fa";

export default function RentalExperienceSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-20">
      <div className="max-w-lg space-y-4">
        <h6 className="text-sm font-semibold text-gray-600">Empower</h6>
        <h2 className="text-4xl font-bold text-gray-900">
          Transform Your Rental Experience Today
        </h2>
        <p className="text-gray-600">
          Our system fosters transparency and enhances communication between
          landlords and tenants. Enjoy a streamlined rental management process
          that saves time and reduces stress.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex space-x-4">
            <FaCube className="w-8 h-8 text-gray-700" />
            <div>
              <h6 className="font-semibold text-gray-900">
                Transparency Matters
              </h6>
              <p className="text-gray-600">
                Experience clear insights into rental agreements and tenant
                history.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <FaCube className="w-8 h-8 text-gray-700" />
            <div>
              <h6 className="font-semibold text-gray-900">
                Better Communication
              </h6>
              <p className="text-gray-600">
                Stay informed with timely notifications about rent and
                maintenance updates.
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded transition duration-300 hover:bg-gray-400">
            Learn More
          </button>
          <button className="border border-black px-6 py-3 rounded transition duration-300 hover:bg-black hover:text-white">
            Sign Up →
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center mt-8 lg:mt-0">
        <span className="text-gray-500">[ Image Placeholder ]</span>
      </div>
    </section>
  );
}
