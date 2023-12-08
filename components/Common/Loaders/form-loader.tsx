"use client";
import { Vortex } from "react-loader-spinner";

const VortexLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent z-[6000] backdrop-blur-md flex items-center justify-center">
      <div className="animate-spin [animation-direction:reverse]">
        <Vortex
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["#cc66ff", "#8800cc", "#660099", "#440066", "#2b282d", "#11001a"]}
        />
      </div>
    </div>
  );
};

export default VortexLoader;
