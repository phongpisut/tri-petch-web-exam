import { styled } from "styled-components";

const Col = styled.div.attrs(() => ({
  className: "grid col-span-1 desktop:col-span-1 tablet:col-span-2",
}))``;

const MainGrid = styled.div.attrs(() => ({
  className:
    "w-full grid grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-2 py-2",
}))``;

const FootballImg = styled.img.attrs(() => ({
  className:
    " mx-auto h-auto top-10 left-0 w-[50%] tablet:absolute tablet:-left-[calc(10rem_-_6vw)] tablet:w-[400px] tablet:min-w-[350px] desktop:left-[15vw] tablet:top-8",
}))``;

const BasketBallImg = styled.img.attrs(() => ({
  className:
    "mx-auto h-auto top-5 right-0 w-[60%] tablet:absolute tablet:-right-[calc(26rem_-_20vw)] tablet:w-[500px] tablet:min-w-[550px] desktop:right-[8vw] tablet:top-8",
}))``;

const TopicBox = styled.div.attrs(() => ({
  className:
    "hidden tablet:grid mb-5 col-span-1 tablet:col-span-2 desktop:col-span-1 pl-2",
}))``;

export { Col, MainGrid, FootballImg, BasketBallImg, TopicBox };
