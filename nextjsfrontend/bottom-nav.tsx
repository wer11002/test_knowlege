import Link from "next/link"
import { Home, Search, Heart, User, Plus } from "lucide-react"

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Link href="/" className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link
          href="/search"
          className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </Link>

        <Link
          href="/create"
          className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Plus size={24} />
          <span className="text-xs mt-1">Create</span>
        </Link>

        <Link
          href="/favorites"
          className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Heart size={24} />
          <span className="text-xs mt-1">Favorites</span>
        </Link>

        <Link
          href="/profile"
          className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  )
}