import React from "react";

type Props = {
  displayText: string;
  primary: boolean;
};

export const CtaButton = ({ displayText, primary = false }: Props) => {
  return (
    <button
      type="button"
      className={`rounded-md py-2 px-6 text-center text-sm capitalize backdrop-blur ${
        primary ? `bg-[rgb(23,26,32)] text-white` : `bg-white text-black`
      }`}
    >
      <p>{displayText}</p>
    </button>
  );
};
