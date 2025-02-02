export function Select({ children, onChange }) {
  return <select className="border p-2 w-full rounded" onChange={onChange}>{children}</select>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
