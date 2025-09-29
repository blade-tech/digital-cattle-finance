import svgPaths from "./svg-237a9z53vq";

function Group() {
  return (
    <div
      className="[grid-area:1_/_1] h-[24.403px] ml-0 mt-0 relative w-[110.761px]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 111 25"
      >
        <g id="Group">
          <path
            d={svgPaths.p1336c7c0}
            fill="url(#paint0_linear_1_14448)"
            id="Vector"
          />
          <path
            d={svgPaths.p3271f400}
            fill="url(#paint1_linear_1_14448)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_14448"
            x1="113.357"
            x2="-6.88518"
            y1="10.9834"
            y2="12.4615"
          >
            <stop stopColor="#86efac" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1_14448"
            x1="113.367"
            x2="-6.87721"
            y1="11.7002"
            y2="13.1783"
          >
            <stop stopColor="#86efac" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div
      className="[grid-area:1_/_1] h-[9.878px] ml-[64.746%] mt-[27.061%] relative w-[7.737px]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 10"
      >
        <g id="Group">
          <path
            d={svgPaths.p118fd800}
            fill="url(#paint0_linear_1_14507)"
            id="Vector"
          />
          <path
            d={svgPaths.p9b26f00}
            fill="url(#paint1_linear_1_14507)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_1_14507"
            x1="43.3873"
            x2="-75.2315"
            y1="6.66952"
            y2="6.66952"
          >
            <stop stopColor="#86efac" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_1_14507"
            x1="43.3874"
            x2="-75.2315"
            y1="4.93179"
            y2="4.93179"
          >
            <stop stopColor="#86efac" />
            <stop offset="1" stopColor="#047857" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
      <Group2 />
    </div>
  );
}

export default function LogoPlain() {
  return (
    <div className="relative size-full" data-name="Logo plain">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-3 relative size-full">
          <Group1 />
        </div>
      </div>
    </div>
  );
}