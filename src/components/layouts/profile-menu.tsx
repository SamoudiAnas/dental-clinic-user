import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/common/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../common/avatar";
import { AlignJustify, ChevronDown, LogOut, Plus, User } from "lucide-react";
import { useAuthStore } from "@/stores";
import Link from "next/link";
import { buttonVariants } from "../common/button";

export default function ProfileMenu() {
  const { logout } = useAuthStore();

  return (
    <Popover>
      <PopoverTrigger
        className={buttonVariants({ variant: "outlined", size: "lg" })}
      >
        My Account
        <ChevronDown className="ml-2 size-5" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-52 p-2 text-gray-700"
      >
        <Link
          href="/new-appointment"
          className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 hover:bg-indigo-50 hover:cursor-pointer"
        >
          <Plus className="size-4" />
          <span className="text-sm">Book Now </span>
        </Link>
        <Link
          href="/my-appointments"
          className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 hover:bg-indigo-50 hover:cursor-pointer"
        >
          <AlignJustify className="size-4" />
          <span className="text-sm">My Appointments</span>
        </Link>
        <Link
          href="/my-profile"
          className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 hover:bg-indigo-50  hover:cursor-pointer"
        >
          <User className="size-4" />
          <span className="text-sm">Profile</span>
        </Link>
        <hr className="my-2" />
        <button
          onClick={logout}
          className="w-full flex items-center gap-2 rounded-md px-3 py-1.5 text-red-500 hover:bg-red-100 hover:cursor-pointer"
        >
          <LogOut className="size-4" />
          <span className="text-sm">Logout</span>
        </button>
      </PopoverContent>
    </Popover>
  );
}
