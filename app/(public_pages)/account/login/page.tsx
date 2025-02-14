import LoginForm from "@/components/UI/Account/Login";
import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <>
      <main>
        <div className="w-full overflow-y-auto min-h-screen">
          {/* <div className="overflow-hidden relative min-h-[32rem] hidden sm:min-h-[40rem] md:min-h-max">
            <Image
              src={"/images/backgrounds/register2.jpg"}
              alt="register cover"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black text-white bg-opacity-60 flex items-center justify-center">
              <Link href={"/"}>
                <button className="transition-colors hover:bg-white hover:text-black duration-200 flex items-center justify-center gap-2 absolute rounded-xl px-4 py-2 top-4 left-4">
                  <span>Home</span> <HomeIcon size={16} />
                </button>
              </Link>

              <div className="text-center space-y-4">
                <h2 className={`${openSans.className} text-5xl font-bold`}>Welcome Back!</h2>
                <p className="text-text-100 text-lg">Dive into the World of Lyrics!</p>
              </div>
            </div>
          </div> */}

          <LoginForm />
        </div>
      </main>
    </>
  );
};

export default Login;
