import { useParallax } from "react-scroll-parallax";
import {
  MainGrid,
  Col,
  TopicBox,
  FootballImg,
  BasketBallImg,
} from "@/components/GridBox";
import { Title, TitleMobile } from "@/components/Text";
import TopicCarousel from "@/components/TopicCarousel";

import footballer from "@/assets/images/footballer.png";
import basketball from "@/assets/images/basketball.png";
import data from "@/assets/data/data.json";

function App() {
  const { ref: footballRef } = useParallax<HTMLImageElement>({
    translateX: [0, 20],
  });
  const { ref: basketballRef } = useParallax<HTMLImageElement>({
    translateX: [0, -10],
  });

  const color1 = ["bg-white", "bg-gray-200", "bg-violet-700"];
  const color2 = ["bg-white", "bg-gray-200", "bg-blue-950"];
  const invertColor = ["bg-violet-700", "bg-blue-950"];

  const topicContent = (x: any, i: number, color: string[]) => (
    <>
      <div className="flex flex-row mt-10 px-5 mb-2">
        <div>
          <p
            className={`${
              color[i] === "bg-blue-950" ? "text-violet-700" : "text-black"
            } text-md mr-2 rounded-md`}
          >
            {`${i + 1}`.padStart(2, "0")}
          </p>
          <div
            className={`h-1 w-2/3 ${
              invertColor.includes(color[i]) ? "bg-white" : "bg-violet-700"
            } rounded-md`}
          />
        </div>
        <p className="text-gray-400 text-3xl font-medium">{x?.headline}</p>
      </div>
      <p className={`px-5 ${invertColor.includes(color[i]) && "text-white"}`}>
        {x?.desc}
      </p>
    </>
  );

  const content = (
    topic: "athlets" | "players",
    x: any,
    i: number,
    color: string[],
  ) => (
    <>
      <TopicBox className={`${topic === "players" && "desktop:pl-36"}`}>
        {i == 0 && <Title>{data?.[topic]?.title}</Title>}
        {topicContent(x, i, color)}
      </TopicBox>

      <div
        className={`relative ${
          topic === "athlets" ? "order-first" : "order-first tablet:order-last"
        }`}
      >
        <div />
        {i === 0 && (
          <>
            <TitleMobile className="px-5 py-2">
              {data?.[topic]?.title}
            </TitleMobile>
            {topic === "athlets" ? (
              <FootballImg ref={footballRef} src={footballer} />
            ) : (
              <BasketBallImg ref={basketballRef} src={basketball} />
            )}
          </>
        )}
      </div>
    </>
  );

  const topics = (side: "left" | "right" = "left") => {
    const topic = side == "left" ? data?.players : data?.athlets;
    const contentColor = side === "left" ? color2 : color1;

    return (
      <>
        {topic?.articles?.map((x, i) => (
          <MainGrid
            className={`${contentColor[i]} ${
              i > 0 && "invisible tablet:visible"
            }`}
            key={`${i}-article`}
          >
            {content(
              side === "left" ? "players" : "athlets",
              x,
              i,
              contentColor,
            )}
          </MainGrid>
        ))}
        <div className="grid tablet:hidden">
          <TopicCarousel>
            {topic?.articles?.map((x, i) => (
              <MainGrid
                className={`${contentColor[i]}`}
                key={`${i}-article-slide`}
              >
                <div className="pb-10">{topicContent(x, i, contentColor)}</div>
              </MainGrid>
            ))}
          </TopicCarousel>
        </div>
      </>
    );
  };

  return (
    <div>
      <Col>{topics("right")}</Col>
      <Col className="overflow-x-hidden pt-14 bg-white">{topics("left")}</Col>
    </div>
  );
}

export default App;
