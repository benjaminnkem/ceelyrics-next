import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <div className="container min-h-screen mt-8 flex items-center justify-center">
        <div>
          <Image src={"/svgs/not_found.svg"} alt="Not found" width={500} height={500} />
          <div className="text-center mt-2">
            <h1 className="md:text-8xl text-6xl font-extrabold">404</h1>
            <p className="md:text-2xl text-xl">Page Not Found</p>
            <p className="max-w-sm mx-auto mt-4 opacity-80">
              This pages you&apos;re looking for is either under construction, moved or does not exist.
            </p>

            <div className="mt-3">
              <Link href={"/"}>
                <button className="text-primary-700 font-bold">Go Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
