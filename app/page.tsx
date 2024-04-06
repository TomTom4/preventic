import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";
import GlobalCards from "@/components/dash_component/global_cards";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
const data = [
  { category: "Denutrition", counted: 2 },
  { category: "Medicaments", counted: 5 },
  { category: "Chutes", counted: 2 },
  { category: "Souffrance", counted: 3 },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-4/6 mx-4">
      <h1 className="text-center text-semibold">Patient: Identifiant </h1>
      <div className="bg-white px-4 py-5 sm:px-6">
        <div className=" w-full grid grid-cols-2 gap-4 place-content-around">
          {data.map((cat, index) => (
            <GlobalCards
              key={index}
              category={cat.category}
              counted={cat.counted}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className=" w-full inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Button text
        <PlusCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
      </button>
    </main>
  );
}
