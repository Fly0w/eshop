"use client";

import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [numero, setNumero] = useState<number>(0);

  const handleInputChange = (e: any): void => {
    // Mettez à jour la valeur du champ "numero" à chaque changement
    setNumero(e.target.value);
  };
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p>Profile number</p>
      <input
        type="number"
        id="userId"
        onChange={handleInputChange}
        value={numero}
        className="my-10 bg-gray-500 pl-4 text-slate-50"
      />
      <Link
        href={`/profile/${numero}`}
        className="hover:text-indigo-800 border border-blue-700 px-5 rounded-full bg-blue-100 my-10"
      >
        <p>Visit Profile number {numero}</p>
      </Link>
    </main>
  );
}
