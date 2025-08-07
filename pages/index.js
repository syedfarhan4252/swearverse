import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-[#111111] text-white min-h-screen font-poppins">
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase font-bebas tracking-wide">
          Welcome to SwearVerse
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Printed Shirts. Streetwear Hoodies. Built for bold style lovers.
        </p>
        <Link href="/shop">
          <a className="bg-[#FF3D00] hover:bg-red-600 text-black font-bold py-3 px-6 rounded-full transition duration-300">
            Shop Now
          </a>
        </Link>
      </section>

      <section className="bg-[#F7F7F7] text-black py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Dummy products for now — real ones from Supabase on /shop */}
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-white p-4 rounded shadow-md">
              <div className="w-full h-40 bg-gray-300 mb-3" />
              <h3 className="text-lg font-semibold">Product {n}</h3>
              <p className="text-sm text-gray-600">Rs. 799</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
