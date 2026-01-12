type SelectInputProps = {
  options: string[],
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectInput({ options, className, onChange }: SelectInputProps) {
  return (
    <select className={className} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}