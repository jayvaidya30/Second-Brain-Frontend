import { useState } from "react";
import { Button } from "./components/Button";
import { PlusIcon } from "./Icons/PlusIcon";
import { ShareIcon } from "./Icons/ShareIcon";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          text="Add content"
          startIcon={<PlusIcon></PlusIcon>}
        ></Button>
        <Button
          variant="secondary"
          text="Share"
          startIcon={<ShareIcon></ShareIcon>}
        ></Button>
      </div>
      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com.com/jayvaidya30/status/1865407035594232093?s=20"
          title="Twitter link test"
        ></Card>
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=njX2bu-_Vw4"
          title="First video test"
        ></Card>
      </div>
    </div>
  );
}

export default App;
