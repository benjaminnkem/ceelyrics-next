import { useRef } from "react";

const useCustomSlider = (slideAmount: number) => {
  const slider = useRef<HTMLDivElement>(null);

  const slideLeft = () => slider.current && (slider.current.scrollLeft -= slideAmount ? slideAmount : 500);
  const slideRight = () => slider.current && (slider.current.scrollLeft += slideAmount ? slideAmount : 500);

  return { slider, slideLeft, slideRight };
};

export default useCustomSlider;
