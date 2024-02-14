// "use client"

import React from 'react';
import Link from "next/link";

function Nav() {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <Link href="/" className="text-3xl font-bold">HOLY365</Link>
      <div>
        <Link href="/login" className="bg-white px-4 py-2 mr-4 rounded">LOGIN</Link>
        <Link href="/signup" className="bg-primary px-4 py-2 rounded text-white">SIGN UP</Link>
      </div>
    </div>
  );
}

export default Nav;