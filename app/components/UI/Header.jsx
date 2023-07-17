import React from 'react';

export function Header() {
  return (
    <header className="w-full h-[50px] sm:h-[70px] bg-white flex items-center p-2">
      <nav>
        <img
          className="w-[80x] h-[25px] sm:w-[100px] sm:h-[30px]"
          src="/logo-full.png"
          alt="FAUNO"
        />
      </nav>
    </header>
  );
}
