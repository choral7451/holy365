// "use client"

import React from 'react';
import Link from "next/link";

function Nav() {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <Link href="/" className="text-3xl font-bold">HOLY365</Link>
      <div>
        <button className="bg-white px-4 py-2 mr-4 rounded">LOGIN IN</button>
        <button className="bg-primary px-4 py-2 rounded text-white">SIGN IN</button>
      </div>
    </div>
  );
}

export default Nav;