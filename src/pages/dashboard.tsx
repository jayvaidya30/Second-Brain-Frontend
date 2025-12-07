import { useEffect, useEffectEvent, useState } from "react";
import { Button } from "../components/Button";
import { PlusIcon } from "../Icons/PlusIcon";
import { ShareIcon } from "../Icons/ShareIcon";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { SideBar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setModelOpen] = useState(false);
  const { contents, refresh } = useContent();

  // when the modal closes the contents of the user will refresh
  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <SideBar />

      <div className="p-4 ml-72 min-h-screen bg-gray-300">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModelOpen(false);
          }}
        />

        <div className="flex justify-end gap-4">
          <Button
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon></PlusIcon>}
            onClick={() => setModelOpen(true)}
          ></Button>
          <Button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                }, {
                  headers: {
                    "Authorization" : localStorage.getItem("token")
                  }
                }
              );

              const shareUrl = `https://localhost:5173/share/${response.data.hash}`;
              navigator.clipboard.writeText(shareUrl);
              alert("Link copied to clipboard!");
            }}
            variant="secondary"
            text="Share"
            startIcon={<ShareIcon></ShareIcon>}
          ></Button>
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card type={type} link={link} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
