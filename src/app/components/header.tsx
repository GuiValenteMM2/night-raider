export default function Header() {
    return (
        <div className="top-0 sticky w-full bg-neutral-950/90 shadow-md pt-4">
          <nav className="max-w-7xl mx-auto px-4 py-3"> 
            <ul className="flex justify-center space-x-8 text-amber-500/70 text-shadow-2xs font-medium text-xl">
              <li>
                <a href="#" className="hover:text-amber-600 hover:border-b-2 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 hover:border-b-2 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 hover:border-b-2 transition">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 hover:border-b-2 transition">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
}
