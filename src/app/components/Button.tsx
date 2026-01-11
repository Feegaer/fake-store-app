"use client";

export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <button className={`border p-2 rounded cursor-pointer ${className}`}>{children}</button>
  )
} 