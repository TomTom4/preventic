"use client";
import { ChangeEvent, useState } from "react";

export default function TextArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  const [innerValue, setValue] = useState("");

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  return (
    <form action="#" className="relative" data-testid="comment">
      <div
        className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset 
								   ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"
      >
        <label htmlFor="comment" className="sr-only">
          {label}
        </label>
        <textarea
          rows={8}
          name="comment"
          id="comment"
          className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 
										 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          defaultValue=""
          value={innerValue}
          onChange={changeHandler}
        />
      </div>
    </form>
  );
}
