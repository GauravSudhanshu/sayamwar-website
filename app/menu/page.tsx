import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Catering Menu & Packages | Sayamwar Hall & Homestay Patna',
  description: 'View Sayamwar Hall catering menu packages — Veg & Non-Veg Gold, Platinum, Luxury. Prices per person starting ₹999. Extra menu charge ₹75. Call 7646028228.',
  alternates: { canonical: 'https://sayamwar.com/menu' },
}

const vegPackages = [
  {
    tier: 'Gold',
    price: '₹999',
    note: 'without LED Counter',
    color: 'from-yellow-700 to-yellow-600',
    badge: 'bg-yellow-600',
    items: [
      { name: 'Starter', qty: 2 },
      { name: 'Soup / Cold Drink', qty: 1 },
      { name: 'Coffee / Tea', qty: 1 },
      { name: 'Hi Tea', qty: 2 },
      { name: 'Vegetable (Seasonal)', qty: 1 },
      { name: 'Paneer', qty: 1 },
      { name: 'Dal', qty: 1 },
      { name: 'Rice', qty: 1 },
      { name: 'Curd', qty: 1 },
      { name: 'Green Salad', qty: null },
      { name: 'Papad / Chatni / Achar', qty: null },
      { name: 'Breads', qty: 2 },
      { name: 'Sweets', qty: 1 },
      { name: 'Ice Cream', qty: 1 },
      { name: 'Mineral Water Jar 250ml', qty: null },
    ],
  },
  {
    tier: 'Platinum',
    price: '₹1,199',
    note: 'with LED Counter',
    color: 'from-slate-600 to-slate-500',
    badge: 'bg-slate-500',
    items: [
      { name: 'Starter', qty: 3 },
      { name: 'Soup / Cold Drink', qty: 1 },
      { name: 'Coffee', qty: 1 },
      { name: 'Hi Tea', qty: 3 },
      { name: 'Vegetable (Seasonal)', qty: 2 },
      { name: 'Paneer', qty: 1 },
      { name: 'Dal', qty: 1 },
      { name: 'Rice', qty: 2 },
      { name: 'Curd', qty: 1 },
      { name: 'Green Salad', qty: 1 },
      { name: 'Papad / Chatni / Achar', qty: null },
      { name: 'Breads', qty: 3 },
      { name: 'Sweets', qty: 2 },
      { name: 'Ice Cream', qty: 1 },
      { name: 'Mineral Water 200/250ml', qty: null },
    ],
  },
  {
    tier: 'Luxury',
    price: '₹1,351',
    note: 'with LED Counter',
    color: 'from-amber-700 to-amber-500',
    badge: 'bg-amber-600',
    items: [
      { name: 'Starter', qty: 4 },
      { name: 'Soup', qty: 1 },
      { name: 'Coffee', qty: 1 },
      { name: 'Welcome Drink (Mocktail)', qty: 4 },
      { name: 'Hi Tea', qty: 4 },
      { name: 'Vegetable (Seasonal)', qty: 2 },
      { name: 'Paneer', qty: 1 },
      { name: 'Dal', qty: 2 },
      { name: 'Rice', qty: 2 },
      { name: 'Curd', qty: 1 },
      { name: 'Salad with Fruit Cut', qty: 1 },
      { name: 'Papad / Chatni / Achar', qty: null },
      { name: 'Breads', qty: 4 },
      { name: 'Sweets', qty: 3 },
      { name: 'Ice Cream', qty: 2 },
      { name: 'Tawa Garden', qty: 1 },
      { name: 'Mineral Water 200/250ml', qty: null },
    ],
  },
]

const nonVegPackages = [
  {
    tier: 'Gold',
    price: '₹1,199',
    note: 'without LED Counter',
    color: 'from-red-800 to-red-700',
    badge: 'bg-red-700',
    items: [
      { name: 'Starter', qty: 2 },
      { name: 'Soup / Cold Drink', qty: 1 },
      { name: 'Coffee / Tea', qty: 1 },
      { name: 'Hi Tea', qty: 2 },
      { name: 'Vegetable (Seasonal)', qty: 1 },
      { name: 'Paneer', qty: 1 },
      { name: 'Chicken', qty: 1 },
      { name: 'Fish', qty: 1 },
      { name: 'Dal', qty: 1 },
      { name: 'Rice', qty: 1 },
      { name: 'Curd', qty: 1 },
      { name: 'Green Salad', qty: null },
      { name: 'Papad / Chatni / Achar', qty: null },
      { name: 'Breads', qty: 2 },
      { name: 'Sweets', qty: 2 },
      { name: 'Ice Cream', qty: 1 },
      { name: 'Mineral Water 20Ltr. & 250ml', qty: null },
    ],
  },
  {
    tier: 'Platinum',
    price: '₹1,399',
    note: 'with LED Counter',
    color: 'from-rose-800 to-rose-600',
    badge: 'bg-rose-700',
    items: [
      { name: 'Starter', qty: 4 },
      { name: 'Soup / Cold Drink', qty: 1 },
      { name: 'Coffee / Tea', qty: 1 },
      { name: 'Hi Tea', qty: 4 },
      { name: 'Welcome Drink', qty: 2 },
      { name: 'Vegetable (Seasonal)', qty: 2 },
      { name: 'Paneer', qty: 1 },
      { name: 'Chicken', qty: 1 },
      { name: 'Fish', qty: 1 },
      { name: 'Dal', qty: 1 },
      { name: 'Rice', qty: 1 },
      { name: 'Curd', qty: 1 },
      { name: 'Salad Bar', qty: null },
      { name: 'Papad / Chatni / Achar', qty: null },
      { name: 'Breads', qty: 3 },
      { name: 'Sweets', qty: 2 },
      { name: 'Ice Cream', qty: 1 },
      { name: 'Mineral Water Jar 20Ltr. & 200ml', qty: null },
    ],
  },
  {
    tier: 'Luxury',
    price: '₹1,599',
    note: 'with LED Counter',
    color: 'from-red-900 to-red-700',
    badge: 'bg-red-800',
    items: [
      { name: 'Starter', qty: 5 },
      { name: 'Soup', qty: 2 },
      { name: 'Coffee / Tea', qty: 1 },
      { name: 'Hi Tea', qty: 5 },
      { name: 'Welcome Drink', qty: 4 },
      { name: 'Vegetable (Seasonal)', qty: 2 },
      { name: 'Paneer', qty: 1 },
      { name: 'Chicken', qty: 1 },
      { name: 'Mutton', qty: 1 },
      { name: 'Fish', qty: 1 },
      { name: 'Dal', qty: 1 },
      { name: 'Rice', qty: 2 },
      { name: 'Curd', qty: 1 },
      { name: 'Salad Bar', qty: null },
      { name: 'Papad / Chatni / Achar', qty: null },
      { name: 'Breads', qty: 4 },
      { name: 'Sweets', qty: 3 },
      { name: 'Ice Cream', qty: 2 },
      { name: 'Tawa Garden', qty: null },
      { name: 'Mineral Water 20Ltr. & 200ml', qty: null },
    ],
  },
]

function PackageCard({ pkg, type }: { pkg: typeof vegPackages[0], type: 'veg' | 'nonveg' }) {
  const borderColor = type === 'veg' ? 'border-green-600' : 'border-red-700'
  const tagColor = type === 'veg' ? 'bg-green-600' : 'bg-red-700'
  const priceColor = type === 'veg' ? 'text-green-700' : 'text-red-700'

  return (
    <div className={`bg-white rounded-2xl border-2 ${borderColor} overflow-hidden shadow-md flex flex-col`}>
      <div className={`bg-gradient-to-r ${pkg.color} px-5 py-4 flex items-center justify-between`}>
        <div>
          <span className={`inline-block ${tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest mb-1`}>
            {type === 'veg' ? '🌿 VEG' : '🍖 NON VEG'}
          </span>
          <h3 className="text-white font-bold text-xl">[{pkg.tier}]</h3>
          <p className="text-white/70 text-xs">{pkg.note}</p>
        </div>
        <div className="text-right">
          <p className="text-white font-bold text-2xl">{pkg.price}</p>
          <p className="text-white/60 text-xs">per person</p>
        </div>
      </div>
      <ul className="p-5 space-y-2 flex-1">
        {pkg.items.map((item) => (
          <li key={item.name} className="flex items-center justify-between text-sm">
            <span className="text-gray-700">{item.name}</span>
            {item.qty !== null && (
              <span className={`font-bold text-xs ${type === 'veg' ? 'text-green-700' : 'text-red-700'} bg-gray-100 px-2 py-0.5 rounded`}>
                × {item.qty}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="px-5 pb-5">
        <a
          href={`https://wa.me/917646028228?text=Hello!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(type === 'veg' ? 'Veg' : 'Non-Veg')}%20${pkg.tier}%20menu%20package%20at%20${pkg.price}%20per%20person`}
          target="_blank" rel="noopener noreferrer"
          className={`block text-center w-full py-2.5 text-white rounded-xl text-sm font-bold transition-colors ${type === 'veg' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-700 hover:bg-red-800'}`}
        >
          Book This Menu
        </a>
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-16 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-3">Sayamwar Hall & Homestay</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Catering <span className="text-[#C9A84C]">Menu</span>
        </h1>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-6">
          Veg & Non-Veg packages for every occasion. All prices per person.
        </p>
        <div className="inline-flex items-center gap-3 bg-white/10 border border-[#C9A84C]/30 rounded-full px-6 py-2">
          <span className="text-[#C9A84C] font-bold">Extra Menu Charge:</span>
          <span className="text-white font-bold text-lg">₹75 / person</span>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/menu/sayamwar-menu.jpg" download="Sayamwar-Menu.jpg"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-6 rounded-lg transition-colors">
            ⬇ Download Menu
          </a>
          <a href="tel:7646028228"
            className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-6 rounded-lg transition-colors">
            📞 Call 7646028228
          </a>
        </div>
      </section>

      {/* Veg Packages */}
      <section className="py-14 px-4 bg-[#F7F2EA]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌿</span>
            <h2 className="text-3xl font-bold text-green-800">Veg Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vegPackages.map((pkg) => (
              <PackageCard key={pkg.tier} pkg={pkg} type="veg" />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Veg Packages */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🍖</span>
            <h2 className="text-3xl font-bold text-red-800">Non-Veg Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nonVegPackages.map((pkg) => (
              <PackageCard key={pkg.tier} pkg={pkg} type="nonveg" />
            ))}
          </div>
        </div>
      </section>

      {/* Extra charge note */}
      <section className="py-10 px-4 bg-[#3D0A0A] text-center text-white">
        <p className="text-[#C9A84C] font-bold text-xl mb-1">Extra Menu Charge: ₹75 per person</p>
        <p className="text-white/50 text-sm max-w-xl mx-auto">
          Additional items can be added to any package at ₹75 per person extra. Contact us to customize your menu.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/917646028228?text=Hello!%20I%20want%20to%20customize%20my%20catering%20menu"
            target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            💬 Customize on WhatsApp
          </a>
          <Link href="/packages" className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors">
            View Event Packages →
          </Link>
        </div>
      </section>
    </>
  )
}
