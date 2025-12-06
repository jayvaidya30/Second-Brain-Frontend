import { useRef, useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

//controlled component
export function CreateContentModal({ open, onClose }) {
  const [modalOpen, setModelOpen] = useState(false);

  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const [type, setType] = useState(ContentType.Youtube);
  }

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
              <Input reference={titleRef} placeholder={"Title"} />
              <Input reference={linkRef} placeholder={"Link"} />
            </div>

            <div className="flex justify-center">
              <Button onClick={addContent} variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

//temporary Input Component
