"use client";

import { PlaneIcon } from "lucide-react";
import "remixicon/fonts/remixicon.css";
import classNames from "classnames";
import Link from "next/link";
import RightToLeftIntro from "@/components/Common/Intros/right-to-left";
import { useState } from "react";
import { BASE_API_URL } from "@/lib/constants/variables";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormLoader from "@/components/Common/Loaders/form-loader";
import axios from "axios";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const signUpBtnClass = classNames([
  "w-full bg-primary-600 py-2 rounded-lg flex items-center gap-3 justify-center",
  "transition-colors duration-200 hover:bg-primary-700 text-primary-100",
]);

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    // formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Values>({ defaultValues: { firstName: "", lastName: "", email: "", password: "" } });

  const onSubmit: SubmitHandler<Values> = async (values) => {
    setLoading(true);
    try {
      await axios.post(`${BASE_API_URL}/user/register`, values);
      toast.success("Registered successfully", { id: "success" });
      reset();
      router.push("/account/login");
    } catch (e) {
      toast.error("An error occurred", { id: "err" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <FormLoader />}

      <div className="bg-white dark:bg-background-950 overflow-x-hidden overflow-y-auto">
        <RightToLeftIntro />
        <div className="md:my-[1rem] md:min-w-[16rem] w-11/12 p-5 rounded-lg mx-auto bg-white dark:bg-background-900 relative">
          <div>
            <h1 className="font-bold text-4xl mb-4">Create An Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 md:gap-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter first name"
                      className="outline-none block dark:bg-background-800 w-full p-2 border-b-2 rounded"
                      {...register("firstName", { required: { value: true, message: "First Name is required" } })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter last name"
                      className="outline-none block dark:bg-background-800 w-full p-2 border-b-2 rounded"
                      {...register("lastName", { required: { value: true, message: "Last Name is required" } })}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email address"
                    className="outline-none block dark:bg-background-800 w-full p-2 border-b-2 rounded"
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
                    className="outline-none block dark:bg-background-800 w-full p-2 border-b-2 rounded"
                    {...register("password", { required: { value: true, message: "A password is required." } })}
                  />
                </div>

                <div>
                  <label htmlFor="terms" className="text-sm text-text-500 dark:text-text-100">
                    <input type="checkbox" name="terms" /> I agree to accept ceelyrics&apos;{" "}
                    <span className="text-primary-500 cursor-pointer">Terms</span> and{" "}
                    <span className="text-primary-500 cursor-pointer">Conditions</span>.
                  </label>
                </div>

                <div className="space-y-1">
                  <button className={signUpBtnClass}>Create Account</button>
                  <p className="text-sm text-text-600 dark:text-text-300">
                    Have an account?{" "}
                    <Link href={"/account/login"}>
                      <span className="border-b border-primary-700 font-semibold">Login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>

            <div className="mt-4 text-text-500 flex items-center gap-3">
              <span className="h-[1px] bg-text-200 flex-grow"></span>
              <span>or</span>
              <span className="h-[1px] bg-text-200 flex-grow"></span>
            </div>

            <div className="mt-4 space-y-2">
              <button className="border w-full py-2 rounded-lg border-red-600/50 flex items-center gap-3 justify-center">
                Sign Up With Google <i className="ri-google-fill text-red-500 text-lg"></i>
              </button>
              <button className="text-blue-600 border border-blue-600/50 w-full py-2 rounded-lg flex items-center gap-3 justify-center">
                Sign Up With Facebook <i className="ri-facebook-fill text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
