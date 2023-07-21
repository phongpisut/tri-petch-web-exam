import { styled } from "styled-components";

const Title = styled.h1.attrs(() => ({
  className: "text-6xl text-gray-text-light hidden tablet:flex",
}))``;

const TitleMobile = styled.h1.attrs(() => ({
  className: "text-5xl text-gray-text-light flex tablet:hidden",
}))``;

export { Title, TitleMobile };
