import type { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type props = {
  children: ReactElement[] | undefined;
};

export default function TopicCarousel({ children }: props) {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      swipeScrollTolerance={5}
      stopOnHover
      infiniteLoop
      autoPlay
      swipeable
      dynamicHeight
      emulateTouch
      useKeyboardArrows
      renderIndicator={(onClickHandler, isSelected) => (
        <div
          className={`ease-in-out delay-150 transition-colors w-3 h-3 rounded-full ${
            isSelected ? "bg-violet-700" : "bg-gray-400"
          } inline-block mx-1`}
          onClick={onClickHandler}
        />
      )}
    >
      {children}
    </Carousel>
  );
}
