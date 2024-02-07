import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
