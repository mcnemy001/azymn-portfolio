'use client';

// 1. Buat komponen pembantu untuk merender daftar item
const ListItems = ({ items }: { items: string[] }) => (
  <div className="flex flex-col gap-2 p-1">
    {items.map((item, i) => (
      <div
        // Gunakan index sebagai key di sini karena ini adalah blok terpisah
        key={`${item}-${i}`} 
        className="bg-[#10132E] text-white text-xs py-2 px-2 rounded text-center flex-shrink-0 min-h-[32px] flex items-center justify-center whitespace-nowrap"
      >
        {item}
      </div>
    ))}
  </div>
);

export const AutoScrollColumn = ({ items }: { items: string[] }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    // 2. Kontainer luar sebagai "jendela" (masking)
    <div className="h-64 w-32 overflow-hidden">
      
      {/* 3. Elemen ini yang kita animasikan (bergerak dari 0 ke -50%) */}
      {/* Kita tambahkan will-change-transform untuk optimasi browser */}
      <div className="animate-scroll-vertical will-change-transform">
        
        {/* Blok Daftar Pertama */}
        <ListItems items={items} />
        
        {/* Blok Daftar Kedua (Duplikat persis) */}
        <ListItems items={items} />
        
      </div>
    </div>
  );
};