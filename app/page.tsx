

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <UserButton afterSignOutUrl="/"/>
      <h1 >Welcome to my website! only after authenticated user</h1>
     
      </div>
  );
}
