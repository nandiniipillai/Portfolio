export default function RollLabel({ children, className = '' }) {
  return (
    <span className={`roll ${className}`}>
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}
