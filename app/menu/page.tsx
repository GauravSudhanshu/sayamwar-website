'use client'
import Image from 'next/image'

const vegPackages = [
  {
    tier: 'Gold',
    price: '₹999',
    note: 'without LED Counter',
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

export default function MenuPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-page { margin: 0; padding: 0; }
          body { background: white !important; }
          .print-break { page-break-before: always; }
        }
      `}</style>

      {/* Top bar - no print */}
      <div className="no-print bg-gradient-to-br from-[#5A0F0F] to-[#7B1818] py-10 px-4 text-center text-white">
        <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-2">Sayamwar Hall & Homestay</p>
        <h1 className="text-4xl font-bold mb-2">Catering <span className="text-[#C9A84C]">Menu</span></h1>
        <p className="text-white/60 text-sm mb-6">All prices per person • Extra Menu Charge: ₹75/person</p>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#3D0A0A] font-bold py-3 px-8 rounded-lg transition-colors text-sm"
        >
          ⬇ Download / Print Menu
        </button>
      </div>

      {/* PRINTABLE MENU */}
      <div className="print-page bg-white max-w-5xl mx-auto px-6 py-8">

        {/* Branded Header */}
        <div className="flex items-center justify-between border-b-2 border-[#C9A84C] pb-5 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image src="/logo.png" alt="Sayamwar Hall" fill className="object-contain" sizes="64px" />
            </div>
            <div>
              <h2 className="font-bold text-[#7B1818] text-2xl leading-tight">Sayamwar Hall & Homestay</h2>
              <p className="text-gray-500 text-xs">Gola Road, Adarsh Vihar Colony, Danapur, Patna — 801503</p>
              <p className="text-[#C9A84C] text-xs font-semibold">📞 7646028228 &nbsp;|&nbsp; sayamwar.com</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[#7B1818] font-bold text-lg">Catering Menu</p>
            <p className="text-gray-400 text-xs">Per Person Pricing</p>
            <div className="mt-1 bg-[#7B1818] text-white text-xs font-bold px-3 py-1 rounded">
              Extra Charge: ₹75/person
            </div>
          </div>
        </div>

        {/* VEG Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
            </div>
            <h3 className="font-bold text-green-800 text-lg uppercase tracking-wider">Vegetarian Menu</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {vegPackages.map((pkg) => (
              <div key={pkg.tier} className="border border-green-200 rounded-xl overflow-hidden">
                <div className="bg-green-700 text-white px-4 py-2 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-green-200">VEG</p>
                    <p className="font-bold text-base">[{pkg.tier}]</p>
                    <p className="text-green-200 text-[10px]">{pkg.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl">{pkg.price}</p>
                    <p className="text-green-200 text-[9px]">per person</p>
                  </div>
                </div>
                <div className="p-3 bg-green-50">
                  {pkg.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center py-0.5 border-b border-green-100 last:border-0">
                      <span className="text-xs text-gray-700">{item.name}</span>
                      {item.qty && <span className="text-xs font-bold text-green-700">- {item.qty}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NON-VEG Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 border-2 border-red-700 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-red-700 rounded-full" />
            </div>
            <h3 className="font-bold text-red-800 text-lg uppercase tracking-wider">Non-Vegetarian Menu</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {nonVegPackages.map((pkg) => (
              <div key={pkg.tier} className="border border-red-200 rounded-xl overflow-hidden">
                <div className="bg-red-800 text-white px-4 py-2 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-red-200">NON VEG</p>
                    <p className="font-bold text-base">[{pkg.tier}]</p>
                    <p className="text-red-200 text-[10px]">{pkg.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl">{pkg.price}</p>
                    <p className="text-red-200 text-[9px]">per person</p>
                  </div>
                </div>
                <div className="p-3 bg-red-50">
                  {pkg.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center py-0.5 border-b border-red-100 last:border-0">
                      <span className="text-xs text-gray-700">{item.name}</span>
                      {item.qty && <span className="text-xs font-bold text-red-700">- {item.qty}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#C9A84C]/40 flex justify-between items-center text-xs text-gray-400">
          <p>Sayamwar Hall & Homestay • Gola Road, Danapur, Patna 801503</p>
          <p>📞 7646028228 • sayamwar.com</p>
        </div>
      </div>

      {/* Print button bottom - no print */}
      <div className="no-print py-8 text-center bg-[#F7F2EA]">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-[#7B1818] hover:bg-[#5A0F0F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          🖨️ Print / Save as PDF
        </button>
        <p className="text-gray-400 text-xs mt-3">Use "Save as PDF" in the print dialog to download</p>
      </div>
    </>
  )
}
