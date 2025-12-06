




 export function Input({ onChange, placeholder }: { placeholder:string; onChange: () => void }) {
  return (
    <div>
      <input
        className="px-4 py-2 border rounded m-2"
        placeholder={placeholder}
        type={"text"}
        onChange={onChange}
      ></input>
    </div>
  );
}
