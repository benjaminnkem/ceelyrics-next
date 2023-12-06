"use client";

import Image from "next/image";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <main>
          <div className="container min-h-screen flex items-center justify-center">
            <div>
              <Image src={"/svgs/server_error.svg"} alt="Not found" width={500} height={500} />
              <div className="text-center mt-2">
                <h1 className="md:text-8xl text-6xl font-extrabold">500</h1>
                <p className="md:text-2xl text-xl">Internal Server Error</p>
                <p className="max-w-sm mx-auto mt-4 opacity-80">
                  An Internal Error has occurred, and our engineer has been notified.
                </p>

                <div className="w-fit grid place-content-center">
                  <button onClick={() => reset()} className="px-6 py-2 rounded-md bg-primary-800 text-white">
                    Try again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
