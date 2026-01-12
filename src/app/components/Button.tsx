"use client";

export default function Button({ children, className, disabled, onClick }: { children: React.ReactNode, className?: string, disabled?: boolean, onClick?: () => void }) {
  return (
    <button className={`border p-2 rounded cursor-pointer disabled:opacity-50 ${className}`} onClick={onClick} disabled={disabled}>{children}</button>
  )
} 