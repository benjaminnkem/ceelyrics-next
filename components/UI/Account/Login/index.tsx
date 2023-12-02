"use client";

import "remixicon/fonts/remixicon.css";
import classNames from "classnames";
import Link from "next/link";
import RightToLeftIntro from "@/components/Common/Intros/right-to-left";
import { SubmitHandler, useForm } from "react-hook-form";
import FormLoader from "@/components/Common/Loaders/form-loader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface Values {
  email: string;
  password: string;
}

const signUpBtnClass = classNames([
  "w-full bg-primary-600 py-2 rounded-lg flex items-center gap-3 justify-center",
  "transition-colors duration-200 hover:bg-primary-700 text-primary-100",
]);

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<Values>({ defaultValues: { email: "", password: "" } });

  const onSubmit: SubmitHandler<Values> = async (values) => {
    setLoading(true);
    try {
      reset();
      await signIn("credentials", { ...values });
      toast.success("Logged in successfully", { id: "success" });
      router.push("/");
    } catch {
      toast.error("Sorry, we couldn't sign you in", { id: "err" });
    } finally {
      setLoading(true);
    }
  };

  const inputClass = classNames([
    "outline-none block dark:bg-background-800 w-full p-2 border-b-2 dark:border-none dark:border-background-400 rounded-md",
  ]);

  return (
    <>
      {loading && <FormLoader />}

      <div className="bg-white dark:bg-background-900 overflow-x-hidden overflow-y-auto h-screen flex items-center justify-center">
        <RightToLeftIntro />
        <div className="md:my-[1rem] w-fit p-6 rounded-2xl mx-auto bg-white dark:bg-background-900 shadow-xl relative">
          <div className="sm:min-w-[20rem] min-w-[80vw]">
            <h1 className="font-bold md:text-3xl text-2xl mb-4">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-6">
                <div className="space-y-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email address"
                    className={`${inputClass}`}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please provide your email address",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    autoFocus
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="**********"
                    className={`${inputClass}`}
                    {...register("password", { required: { value: true, message: "A password is required." } })}
                  />
                </div>

                <div className="space-y-2">
                  <button className={signUpBtnClass}>Login</button>
                  <p className="text-xs text-center text-text-600 dark:text-text-200">
                    Don&apos;t have an account?{"   "}
                    <Link href={"/account/register"}>
                      <span className="border-b border-primary-700 font-semibold">Sign up</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
