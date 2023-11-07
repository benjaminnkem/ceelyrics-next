"use client";

import { PlaneIcon } from "lucide-react";
import "remixicon/fonts/remixicon.css";
import classNames from "classnames";
import Link from "next/link";
import RightToLeftIntro from "@/components/Common/Intros/right-to-left";

const signUpBtnClass = classNames([
  "w-full bg-primary-600 py-2 rounded-lg flex items-center gap-3 justify-center",
  "transition-colors duration-200 hover:bg-primary-700 text-primary-100",
]);

const RegisterForm = () => {
  return (
    <>
      <div className="bg-white overflow-x-hidden overflow-y-auto">
        <RightToLeftIntro />
        <div className="md:my-[1rem] md:min-w-[16rem] w-11/12 p-5 rounded-lg mx-auto bg-white relative">
          <div>
            <h1 className="font-bold text-4xl mb-4">Create An Account</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="md:grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label htmlFor="firstName" className="font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter first name"
                      className="outline-none block w-full p-2 border-b-2 rounded"
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
                      className="outline-none block w-full p-2 border-b-2 rounded"
                    />
                  </div>
                </div>
                {/* <div className="space-y-1">
                  <label htmlFor="username" className="font-semibold">
                    Username
                  </label>
                  <input type="text" id="username" placeholder="choose a username" className="outline-none block w-full p-2 border-b-2 rounded" />
                </div> */}
                <div className="space-y-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email address"
                    className="outline-none block w-full p-2 border-b-2 rounded"
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
                    className="outline-none block w-full p-2 border-b-2 rounded"
                  />
                </div>

                <div>
                  <label htmlFor="terms" className="text-sm text-text-500">
                    <input type="checkbox" name="terms" /> I agree to accept ceelyrics&apos;{" "}
                    <span className="text-primary-500 cursor-pointer">Terms</span> and{" "}
                    <span className="text-primary-500 cursor-pointer">Conditions</span>.
                  </label>
                </div>

                <div className="space-y-1">
                  <button className={signUpBtnClass}>
                    Create Account <PlaneIcon />
                  </button>
                  <p className="text-sm text-text-600">
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
