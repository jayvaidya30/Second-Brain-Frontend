interface InputProps {
  placeholder: string;
  ref?: any;
}

export function Input({ placeholder, ref }: InputProps) {
  return (
    <div>
      <input
        ref={ref}
        className="px-4 py-2 border rounded m-2"
        placeholder={placeholder}
        type={"text"}
      ></input>
    </div>
  );
}
