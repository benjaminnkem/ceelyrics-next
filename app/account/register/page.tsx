import RegisterForm from "@/components/UI/Account/Register";
import { openSans } from "@/lib/fonts";
import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <main>
      <div className="w-full overflow-y-auto min-h-screen flex items-center justify-center md:my-0 my-10">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
