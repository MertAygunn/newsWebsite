// src/app/components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Ana Sayfa</Link></li>
        <li><Link href="/about">Hakkında</Link></li>
        {/* Diğer menü öğeleri */}
      </ul>
    </nav>
  );
}