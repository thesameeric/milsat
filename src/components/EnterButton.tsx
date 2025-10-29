import React from "react";
import ArrowUpIcon from "../icons/arrowUp";

export default function EnterButton({ className }: React.HTMLAttributes<HTMLButtonElement>) {
    return <>
        <button className={`flex items-center justify-center rounded-md bg-transparent p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground ${className}`}>
            <ArrowUpIcon className="w-6 h-6 text-muted-foreground" />
        </button>
    </>
}