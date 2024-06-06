import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Apple, Banana } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 ">
      <div className="bg-white rounded-full p-1">
        <Apple className="rounded-xl w-20 h-20  mt-5 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </div>
      <div className={cn("flex flex-col items-start", font.className)}>
        <p className="text-3xl font-semibold text-green-700">Whatsap</p>
      </div>
    </div>
  );
};
