import { Logo } from "../Icons/Logo";
import { TwiiterIcon } from "../Icons/TwitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { SideBarItem } from "./SidebarItem";

export function SideBar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed pl-6">

    <div className="flex items-center text-2xl pt-4">
        <div className="pr-2 text-purple-400">
        <Logo />

        </div>
        Brainly
    </div>


      <div className="pt-4">
        <SideBarItem text="Twitter" icon={<TwiiterIcon />} />
        <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>


    </div>
  );
}
