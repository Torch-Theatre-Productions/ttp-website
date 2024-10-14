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

const flyers = [
  {
    webp: Flutter1,
    gif: Flutter1Gif,
    relScale: 1.2,
  },
  { webp: Flutter2, gif: Flutter2Gif, relScale: 1 },
  {
    webp: Flutter3,
    gif: Flutter3Gif,
    relScale: 0.6,
  },
];

const windowWrap = windowDefined
  ? gsap.utils.wrap(0, window?.innerWidth)
  : null;

const MAX_ROTATE = 160;
const MIN_ROTATE = -160;

const getAnimationValues = (flutterScalar: number) => {
  const hueRotate = Math.ceil(Math.random() * 10) * 80;
  const initialX =
    (Math.random() - 0.5) * window?.innerWidth * 0.5 +
    window?.innerWidth * 0.45;

  const initialIntensity = Math.random() * 75 + 45;
  const finalY = Math.min(150 - initialIntensity, 40);

  const initialRotate = Math.random() * (MAX_ROTATE - MIN_ROTATE);
  const rotate1 = -initialRotate;
  const rotate2 = initialRotate / 2;
  const rotateY1 = Math.random() * 30;
  const rotateY2 = Math.random() * -20;

  const scale = (Math.random() * 1.95 + 0.55) / flutterScalar;
  const blur = scale / flutterScalar;
  const x1Direction = Math.random() > 0.5 ? "+" : "-";
  const x1 = (initialX + window?.innerWidth * 0.5) % window?.innerWidth;
  const x2Direction = Math.random() > 0.5 ? "+" : "-";
  const x2 = x1 / 1.5;

  const duration1 = 6 + Math.random() * 1.5;
  const duration2 = 3 + Math.random() * 1.5;

  const animationValues = {
    hueRotate,
    scale,

    y1: `+=${initialIntensity}vh`,
    y2: `+=${finalY}vh`,

    initialX,
    x1: `${x1Direction}=${x1}`,
    x2: `${x2Direction}=${x2}`,

    initialRotate,
    rotate1,
    rotate2,
    rotateY1,
    rotateY2,

    duration1,
    duration2,
  };

  return animationValues;
};

const animatePaper = (paper: HTMLElement, flutterScalar: number) => {
  if (!windowDefined) {
    return null;
  }

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    repeatRefresh: true,
    modifiers: {
      x: (x: string) => {
        return windowWrap ? windowWrap(parseFloat(x)) + "px" : x;
      },
    },
  });

  tl.set(paper, {
    transformOrigin: "40% -10%",
    filter: () => {
      const { hueRotate } = getAnimationValues(flutterScalar);
      return `hue-rotate(${hueRotate}deg) saturate(1.5)`;
    },
    opacity: 1,
    x: () => {
      const { initialX } = getAnimationValues(flutterScalar);
      return initialX;
    },
    y: -400,
    rotate: () => {
      const { initialRotate } = getAnimationValues(flutterScalar);
      return initialRotate;
    },
    rotateX: () => Math.random() * 10,
    scale: () => {
      const { scale } = getAnimationValues(flutterScalar);
      return scale;
    },
    repeatRefresh: true,
  });

  tl.set(paper, {
    filter: () => {
      const { hueRotate } = getAnimationValues(flutterScalar);
      return `hue-rotate(${hueRotate}deg) saturate(1.5) blur(${Math.min(
        Math.abs(Number(gsap.getProperty(paper, "scale")) / flutterScalar),
        0.2
      )}px)`;
    },
  });

  tl.to(paper, {
    y: () => {
      const { y1 } = getAnimationValues(flutterScalar);
      return y1;
    },
    x: () => {
      const { x1 } = getAnimationValues(flutterScalar);
      return x1;
    },
    rotate: () => {
      const { rotate1 } = getAnimationValues(flutterScalar);
      return `+=${rotate1}`;
    },

    rotateY: () => {
      const { rotateY1 } = getAnimationValues(flutterScalar);
      return rotateY1;
    },

    duration: () => {
      const { duration1 } = getAnimationValues(flutterScalar);
      return duration1;
    },
    ease: "power1.out",
    repeatRefresh: true,
  });

  tl.to(paper, {
    y: () => {
      const { y2 } = getAnimationValues(flutterScalar);
      return y2;
    },
    x: () => {
      const { x2 } = getAnimationValues(flutterScalar);
      return x2;
    },
    rotate: () => {
      const { rotate2 } = getAnimationValues(flutterScalar);
      return `-=${rotate2}`;
    },
    rotateX: () => {
      const { rotateY2 } = getAnimationValues(flutterScalar);
      return rotateY2;
    },
    duration: () => {
      const { duration2 } = getAnimationValues(flutterScalar);
      return duration2;
    },
    opacity: 0,
    ease: "power2.in",
    repeatRefresh: true,
  });
};

interface IFlutterWithDelayProps {
  flutterIdx: number;
}

const FlutterWithDelay: React.FunctionComponent<IFlutterWithDelayProps> = ({
  flutterIdx,
  ...props
}) => {
  const delay = Math.min(Math.random() * 650 + 250, 750) + 1000 * flutterIdx;
  const item = flyers[flutterIdx % flyers.length];
  const src = item.webp;
  const gifSrc = item.gif;

  const [shouldRender, setRender] = React.useState<boolean>();
  React.useEffect(() => {
    setTimeout(() => setRender(true), delay);
  }, []);

  return shouldRender ? (
    <picture
      ref={(ref) => {
        ref && animatePaper(ref, item.relScale);
      }}
    >
      {!/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (
        <source srcSet={src} type="image/webp" />
      )}
      <img src={gifSrc} />
    </picture>
  ) : null;
};

const FlutterArray = (length: number) =>
  Array.from(Array(length)).map((_, idx) => {
    return <FlutterWithDelay key={idx} flutterIdx={idx} />;
  });

const FallingFlyers: React.FC<{}> = () => {
  return <StartingLine>{FlutterArray(25)}</StartingLine>;
};

export default FallingFlyers;
