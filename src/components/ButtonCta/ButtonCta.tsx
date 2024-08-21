import React from "react";

interface ButtonProps {
  iconLeft?: JSX.Element;
  variant: 'black' | 'white';
  outline?: boolean
  type: "button" | "submit"
  children?: React.ReactNode
}

export const ButtonCta = ({ iconLeft, variant, outline, type, children }: ButtonProps) => {
  return (
    <button
      type={type}
      draggable={false}
      className={`group md:block w-max rounded-full outline outline-1 outline-neutral-300 hover:outline-neutral-400 py-3.5 px-5 relative  z-0
      ${variant === 'black' ? 'bg-neutral-900 text-neutral-100 outline-neutral-900 hover:outline-neutral-900' : 'bg-neutral-50 text-neutral-900'} ${
        outline ? 'outline outline-1 outline-neutral-900' : '' // Adicionando a classe de borda condicional
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <div className="absolute left-3 transform -translate-x-8 group-hover:translate-x-0 transition-transform ease-out duration-300">{iconLeft}</div>
        <div className="flex justify-end items-center gap-3">
          <div className=" text-xs md:text-sm pt-0.5 font-neue font-medium leading-none uppercase group-hover:translate-x-5 transition-transform ease-out duration-300">{children}</div>
          <div className={`w-1 h-1 ${variant === 'black' ? 'bg-neutral-100' : 'bg-neutral-900'} rounded-full group-hover:translate-x-10 transition-transform ease-out duration-300`}></div>
        </div>
      </div>
    </button>
  );
};
