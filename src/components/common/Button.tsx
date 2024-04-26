export interface ButtonProps {
  children: string | React.ReactNode;
}

export default function Button({
  children
}: ButtonProps) {
  return (
    <button type="button">
      {children}
    </button>
  );
}