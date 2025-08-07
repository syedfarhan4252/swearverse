// File: pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>SwearVerse - Streetwear Redefined</title>
        <meta name="description" content="Bold fashion. Printed hoodies & shirts. Join the Verse." />
      </Head>
      <main className="bg-[#F7F7F7] min-h-screen text-[#111111] font-poppins">
        <section className="text-center py-20 px-4">
          <h1 className="text-6xl md:text-8xl font-bebas tracking-wide">Welcome to SwearVerse</h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
            Bold Streetwear. Limited Drops. Pure Vibes.
          </p>
          <Link href="/shop">
            <a className="mt-6 inline-block px-8 py-3 bg-[#FF3D00] hover:bg-[#e63300] transition text-white font-semibold rounded-full text-lg">
              Shop Now
            </a>
          </Link>
        </section>

        <section className="px-4 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold font-oswald mb-6">Featured Drops</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Replace with real products fetched from Supabase later */}
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <img src="/products/hoodie1.png" alt="Hoodie" className="w-full h-48 object-cover rounded" />
              <h3 className="font-semibold mt-2">Flame Hoodie</h3>
              <p className="text-sm text-gray-500">Rs. 999</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <img src="/products/shirt1.png" alt="Shirt" className="w-full h-48 object-cover rounded" />
              <h3 className="font-semibold mt-2">Chaos Tee</h3>
              <p className="text-sm text-gray-500">Rs. 699</p>
            </div>
            {/* Add more product cards */}
          </div>
        </section>
      </main>
    </>
  );
}
