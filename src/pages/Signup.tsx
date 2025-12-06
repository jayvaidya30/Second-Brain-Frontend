import { useRef } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";


export function Signup() {
// ideally should use react-query for data fetching but right now keeping it simple using first principles

  const usernameRef = useRef<any>();
  const passwordRef = useRef<any>();


  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    

    await axios.post(`${BACKEND_URL}`)

    alert("You have signed up!")
  }


  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

      <div className="bg-white rounded-xl min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        
        <div className="flex justify-center pt-4">
          <Button onClick={signup} variant="primary" text="Signup" fullWidth={true} loading={false} />
        </div>
      </div>
    </div>
  );
}
