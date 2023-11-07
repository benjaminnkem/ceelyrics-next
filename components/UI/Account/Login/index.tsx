"use client";

import "remixicon/fonts/remixicon.css";
import classNames from "classnames";
import Link from "next/link";
import RightToLeftIntro from "@/components/Common/Intros/right-to-left";

const signUpBtnClass = classNames([
  "w-full bg-primary-600 py-2 rounded-lg flex items-center gap-3 justify-center",
  "transition-colors duration-200 hover:bg-primary-700 text-primary-100",
]);

const LoginForm = () => {
  return (
    <>
      <div className="bg-white overflow-x-hidden overflow-y-auto h-screen flex items-center justify-center">
        <RightToLeftIntro />
        <div className="md:my-[1rem] md:min-w-[16rem] w-11/12 p-5 rounded-lg mx-auto bg-white relative">
          <div>
            <h1 className="font-bold text-4xl mb-4">Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
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

                <div className="space-y-1">
                  <button className={signUpBtnClass}>Login</button>
                  <p className="text-sm text-text-600">
                    Don&apos;t have an account?{" "}
                    <Link href={"/account/register"}>
                      <span className="border-b border-primary-700 font-semibold">Create an account</span>
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
