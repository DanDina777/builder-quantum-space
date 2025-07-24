import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Common Cold", href: "/", active: true },
  { name: "Flu", href: "/flu", active: false },
  { name: "COVID-19", href: "/covid", active: false },
  { name: "Allergies", href: "/allergies", active: false },
  { name: "Contact", href: "/contact", active: false },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b border-medical-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-medical-blue">
                All About the Common Cold
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-medical-blue border-b-2 border-medical-blue"
                      : "text-medical-gray hover:text-medical-blue-dark"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-medical-gray hover:text-medical-blue-dark focus:outline-none focus:text-medical-blue-dark"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - hidden by default */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-medical-gray-light">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium transition-colors duration-200",
                  isActive
                    ? "text-medical-blue bg-medical-blue-light"
                    : "text-medical-gray hover:text-medical-blue-dark hover:bg-medical-blue-light"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
