
import { Home, CreditCard } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around max-w-md mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-600'
            }`
          }
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-600'
            }`
          }
        >
          <CreditCard size={24} />
          <span className="text-xs mt-1">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}
