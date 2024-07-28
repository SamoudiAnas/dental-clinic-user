import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../common/avatar";
import { AlignJustify, LogOut, Plus, User } from "lucide-react";

export default function ProfileMenu() {
  return (
    <Popover>
      <PopoverTrigger>
        <span className="sr-only">Open user menu</span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} className="w-52 p-2">
        <button className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 hover:bg-indigo-50 hover:cursor-pointer">
          <Plus className="size-4" />
          <span className="text-sm">Book Now </span>
        </button>
        <button className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 hover:bg-indigo-50 hover:cursor-pointer">
          <AlignJustify className="size-4" />
          <span className="text-sm">My Appointments</span>
        </button>
        <button className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 hover:bg-indigo-50  hover:cursor-pointer">
          <User className="size-4" />
          <span className="text-sm">Profile</span>
        </button>
        <hr className="my-2" />
        <button className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 text-red-500 hover:bg-red-100 hover:cursor-pointer">
          <LogOut className="size-4" />
          <span className="text-sm">Logout</span>
        </button>
      </PopoverContent>
    </Popover>
  );
}
