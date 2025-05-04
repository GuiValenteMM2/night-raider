import Link from "next/link";

export default function Header() {
    return (
        <div className="top-0 sticky w-full bg-neutral-950/90 shadow-md pt-4">
          <nav className="max-w-7xl mx-auto px-4 py-3"> 
            <ul className="flex justify-center space-x-8 text-amber-500/70 text-shadow-2xs font-medium text-xl">
              <li>
                <Link href="/" className="hover:text-amber-600 hover:border-b-2 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link  href="/news" className="hover:text-amber-600 hover:border-b-2 transition">
                  News
                </Link>  
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600 hover:border-b-2 transition">
                  Store
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-600 hover:border-b-2 transition">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
}
