"use client";
import SmoothScroll from "@/components/Chore/smooth-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { DefaultToastOptions, Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

gsap.registerPlugin(ScrollTrigger);

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const toastOptions: DefaultToastOptions = {
    style: {
      minWidth: "250px",
    },
    duration: 3000,
    position: "top-right",
  };

  // useEffect(() => {
  //   // Check if the Geolocation API is supported by the browser
  //   if ("geolocation" in navigator) {
  //     // Get the user's current location
  //     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }

  //   // Success callback function
  //   function successCallback(position: GeolocationPosition) {
  //     // Get the latitude and longitude
  //     const latitude: number = position.coords.latitude;
  //     const longitude: number = position.coords.longitude;

  //     // Call a function to get the country based on the coordinates
  //     getCountryByCoordinates(latitude, longitude);
  //   }

  //   // Error callback function
  //   function errorCallback(error: GeolocationPositionError) {
  //     console.log("Error getting the user's location:", error.message);
  //   }

  //   // Function to get the country based on latitude and longitude
  //   function getCountryByCoordinates(latitude: number, longitude: number) {
  //     fetch(
  //       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const country: string = data.countryName;
  //         console.log("User's country:", country);
  //       })
  //       .catch((error) => console.error("Error getting country:", error));
  //   }
  // }, []);

  return (
    <>
      <SessionProvider>
        <Toaster toastOptions={toastOptions} />
        {children}
        <SmoothScroll />
      </SessionProvider>
    </>
  );
};

export default Providers;
