import { styled } from "styled-components";

const Title = styled.h1.attrs(() => ({
  className: "text-6xl text-gray-200 hidden tablet:flex",
}))``;

const TitleMobile = styled.h1.attrs(() => ({
  className: "text-6xl text-gray-200 flex tablet:hidden",
}))``;

export { Title, TitleMobile };
