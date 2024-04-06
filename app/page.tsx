import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import GlobalCards from '@/components/dash_component/global_cards';

const data = [
  { category: "Denutrition", counted: 2 },
  { category: "Medicaments", counted: 5 },
  { category: "Chutes", counted: 2 },
  { category: "Souffrance", counted: 3 }
];

export default function Home() {
  return (
    <main className='flex flex-col gap-4 justify-between'>
      <h1>Hello, Dashboard Page!</h1>
      <section className='bg-blue-200 place-content-center'>
        <div className="grid grid-cols-2 gap-4 place-content-center">
          {data.map((cat, index) => (
            <GlobalCards
              key={index}
              category={cat.category}
              counted={cat.counted}/>
          ))}
        </div>
      </section>
      <button className="bottom bg-red-500 rounded-lg">
          Signler <span className='font-weight-800'> +</span>
        </button>
    </main>
  );
}
