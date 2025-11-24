import { DarkmodeToggle } from "@/components/comon/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-muted flex justify-center items-center h-screen flex-col space-y-4">
      <h1 className="text-4xl font-semibold ">Welcome Muhammad Rafi Zhafran</h1>
      <Link href="/admin">
        <Button className="bg-teal-500 text-white">Access Dashboard</Button>
      </Link>
    </div>
  );
}
