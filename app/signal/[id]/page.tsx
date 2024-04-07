import TextArea from "./_components/TextArea";
import Link from "next/link";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import NutritionItems from "./_components/NutritionItems";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-4/6">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-lg font-medium text-center">
          Évenement: <span className="font-bold">{params.id}</span>
        </h1>
        <NutritionItems />
        <TextArea
          label="Observations"
          placeholder="vos observations (facultatif)"
        />
        <div>
          <div className=" inset-0 flex items-center pb-8" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <Link href="/">
            <button
              type="button"
              className="w-full inline-flex justify-around gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white text-center shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span>Envoyer</span>
              <PaperAirplaneIcon
                className="-mr-0.5 h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
