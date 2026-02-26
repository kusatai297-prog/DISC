import React from "react";

type Props = {
    value: number;
    isSelected: boolean;
    onClick:()=>void;
}

export const RatingButton = ({value, isSelected, onClick}: Props)=>(
    <button
    onClick={onClick}
    className={`
        w-20 h-20 text-2xl font-semibold
        border border-gray-400 rounded-xl onTransition
        ${isSelected ? "bg-blue-300 text-black" : "bg-white text-black"}
        hover:bg-blue-100 active:scale-95
        `}
    >
    {value}
    </button>
);