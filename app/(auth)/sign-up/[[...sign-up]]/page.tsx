import { SignUp } from "@clerk/nextjs";
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

export default function Page() {
  return (
    <div className="flex items-center justify-center mt-6 bg-gray-100">
      <SignUp />
    </div>
  );
}
