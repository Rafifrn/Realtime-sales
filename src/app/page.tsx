import { DarkmodeToggle } from "@/components/comon/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button className="dark:bg-teal-300">Click me</Button>
      <DarkmodeToggle />
    </div>
  );
}
