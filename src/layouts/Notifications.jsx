import { Globe } from "lucide-react";

export default function NotificationsSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-20">
      <div className="max-w-lg space-y-4">
        <h6 className="text-sm font-semibold text-gray-600">Notifications</h6>
        <h2 className="text-3xl font-bold text-gray-900">
          Stay Informed with Essential Notifications
        </h2>
        <p className="text-gray-600">
          Our platform ensures you never miss important updates regarding rent,
          maintenance, and lease agreements. With timely notifications, both
          landlords and tenants can manage their responsibilities efficiently.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-700" />
            <span>
              Receive alerts for rent due dates and maintenance needs.
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-700" />
            <span>Stay updated on lease agreements and important changes.</span>
          </li>
          <li className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-gray-700" />
            <span>Manage your rental history with ease and confidence.</span>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 h-64 bg-gray-200 flex items-center justify-center mt-8 lg:mt-0">
        <span className="text-gray-500">[ Image Placeholder ]</span>
      </div>
    </section>
  );
}
