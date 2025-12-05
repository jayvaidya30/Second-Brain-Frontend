import { useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";

//controlled component
export function CreateContentModal({ open, onClose }) {
  const [modalOpen, setModelOpen] = useState(false);

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <div className="flex justify-end">
              <div onClick={onClose} className="cursor-pointer">
                <CrossIcon />
              </div>
            </div>

            <div>
              <Input placeholder={"Title"} />
              <Input placeholder={"Link"} />
            </div>

            <div className="flex justify-center">
              <Button variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//temporary Input Component

function Input({ onChange, placeholder }: { onChange: () => void }) {
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
