import * as React from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import Flutter1 from "../data/Flutter1.webp";
import Flutter2 from "../data/Flutter2.webp";
import Flutter3 from "../data/Flutter3.webp";
import Flutter1Gif from "../data/Flutter1.gif";
import Flutter2Gif from "../data/Flutter2.gif";
import Flutter3Gif from "../data/Flutter3.gif";

interface ILittleFallingFlyerProps {}

let windowDefined: boolean = true;
try {
  window.innerWidth;
} catch {
  windowDefined = false;
}

const StartingLine = styled.div`
  position: sticky;
  height: 1px;
  width: 1px;

  position: relative;
  z-index: 1;

  picture,
  img {
    position: absolute;
    pointer-events: none;
    object-fit: contain;

    min-height: 100px;
    min-width: 100px;

    &:nth-of-type(1) {
      height: 300px;
      width: auto;
      top: -100px;
      left: 100px;
    }
    &:nth-of-type(2) {
      height: 150px;
      top: 100px;
      left: 50px;
    }
    &:nth-of-type(3) {
      height: 100px;
      top: 0;
      left: 20px;
    }
  }
`;

const windowWrap = windowDefined
  ? gsap.utils.wrap(0, window?.innerWidth)
  : null;
const animatePaper = (paper: HTMLElement) => {
  if (!windowDefined) {
    return null;
  }
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    repeatRefresh: true,
    modifiers: {
      x: (x: string) => {
        return windowWrap(parseFloat(x)) + "px";
      },
    },
  });

  tl.set(paper, {
    transformOrigin: "40% -10%",
    filter: `hue-rotate(${
      Math.ceil(Math.random() * 10) * 80
    }deg) saturate(1.5)`,
    opacity: 1,
    x:
      (Math.random() - 0.5) * window?.innerWidth * 0.5 +
      window?.innerWidth * 0.5,
    y: -400,
    rotate: `+=${Math.random() * 10 * 35 + 25}`,
    scale: `${Math.random() * 1.95 + 0.55}`,
    repeatRefresh: true,
  });

  tl.to(paper, {
    delay: Math.random() * 3,
    y: "+=100vh",
    x: `${Math.random() > 0.5 ? "+" : "-"}=${Math.random() * 200 * 2}`,
    rotate: `+=${Math.random() * 10 * 35 + 25}`,
    duration: 7,
    ease: "power1.out",
    repeatRefresh: true,
  });

  tl.to(paper, {
    y: "+=50vh",
    x: `-=${Math.random() * 100 * 2}`,
    duration: 5,
    opacity: 0,
    ease: "power1.in",
    repeatRefresh: true,
  });
};

const webps = [Flutter1, Flutter2, Flutter3];
const gifs = [Flutter1Gif, Flutter2Gif, Flutter3Gif];

interface IFlutterWithDelayProps {
  delay: number;
  src: string;
  gifSrc: string;
}

const FlutterWithDelay: React.FunctionComponent<IFlutterWithDelayProps> = (
  props
) => {
  const [shouldRender, setRender] = React.useState<boolean>();
  React.useEffect(() => {
    setTimeout(() => setRender(true), props.delay);
  }, []);

  return shouldRender ? (
    <picture
      ref={(ref) => {
        ref && animatePaper(ref);
      }}
    >
      {!/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (
        <source srcSet={props.src} type="image/webp" />
      )}
      <img src={props.gifSrc} />
    </picture>
  ) : null;
};

const FlutterArray = (length: number) =>
  Array.from(Array(length)).map((_, idx) => (
    <FlutterWithDelay
      key={idx}
      delay={Math.random() * 3000 + 3000 + 1000 * idx}
      src={webps[idx % webps.length]}
      gifSrc={gifs[idx % gifs.length]}
    />
  ));

/** Creates a fresh value to be consistently used upon different animations */
const createAnimationCachedValue = (
  variableName: string,
  rollValue: () => number
) => {
  return (paper: HTMLDivElement) => {
    const fromEle = paper.getAttribute(`data-${variableName}`);
    if (fromEle !== null) {
      return Number(fromEle);
    }

    const rolledValue = rollValue();
    paper.setAttribute(`data-${variableName}`, rolledValue.toString());

    return rolledValue;
  };
};

const FallingFlyers: React.FC<{}> = () => {
  return <StartingLine>{FlutterArray(15)}</StartingLine>;
};

export default FallingFlyers;
