"use client";

import "remixicon/fonts/remixicon.css";
import classNames from "classnames";
import Link from "next/link";
import RightToLeftIntro from "@/components/Common/Intros/right-to-left";
import { useState } from "react";
import { BASE_API_URL } from "@/lib/constants";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import VortexLoader from "@/components/Common/Loaders/form-loader";
import axios from "axios";
import { Values } from "@/lib/types/account";

const signUpBtnClass = classNames([
  "w-full bg-primary-600 py-2 rounded-lg flex items-center gap-3 justify-center",
  "transition-colors duration-200 hover:bg-primary-700 text-primary-100",
]);

const inputClass = classNames([
  "outline-none block dark:bg-background-900 w-full p-2 border-b-2 dark:border-none rounded-md",
]);

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const {
    register,
    // formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Values>();

  const onSubmit: SubmitHandler<Values> = async (values) => {
    if (!checked) {
      toast.error("Please accept the terms and conditions", { id: "error" });
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${BASE_API_URL}/users/register`, { ...values, username: values.email });
      toast.success("Registered successfully", { id: "success" });
      reset();
      router.push("/account/login");
    } catch (e) {
      toast.error("An error occurred", { id: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <VortexLoader />}

      <div className="dark:bg-background-950 overflow-x-hidden overflow-y-auto">
        <RightToLeftIntro />
        <div className="md:my-[1rem] md:min-w-[16rem] w-11/12 p-5 rounded-2xl mx-auto bg-white dark:bg-transparent shadow-lg dark:shadow-xl dark:shadow-black relative">
          <div>
            <h1 className="font-bold md:text-3xl text-2xl mb-4">Create An Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 md:gap-4 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="font-medium dark:text-text-100">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter first name"
                      className={`${inputClass}`}
                      {...register("firstName", { required: { value: true, message: "First Name is required" } })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="font-medium dark:text-text-100">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter last name"
                      className={`${inputClass}`}
                      {...register("lastName", { required: { value: true, message: "Last Name is required" } })}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="font-medium dark:text-text-100">
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
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="password" className="font-medium dark:text-text-100">
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

                <div>
                  <label htmlFor="terms" className="text-sm text-text-500 dark:text-text-200">
                    <input type="checkbox" name="terms" onChange={() => setChecked(!checked)} checked={checked} /> I
                    agree to accept ceelyrics&apos; <span className="text-primary-500 cursor-pointer">Terms</span> and{" "}
                    <span className="text-primary-500 cursor-pointer">Conditions</span>.
                  </label>
                </div>

                <div className="space-y-1">
                  <button className={signUpBtnClass}>Create Account</button>
                  <p className="text-xs text-text-600 dark:text-text-300 text-center">
                    Have an account?{" "}
                    <Link href={"/account/login"}>
                      <span className="border-b border-primary-700 font-semibold">Login</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>

            {/* <div className="mt-4 text-text-500 flex items-center gap-3">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
