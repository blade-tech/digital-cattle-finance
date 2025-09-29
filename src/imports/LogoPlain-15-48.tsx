import svgPaths from "./svg-tkx51k1o1i";

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
            fill="url(#paint0_linear_15_56)"
            id="Vector"
          />
          <path
            d={svgPaths.p3271f400}
            fill="url(#paint1_linear_15_56)"
            id="Vector_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_15_56"
            x1="113.357"
            x2="-6.88518"
            y1="10.9834"
            y2="12.4615"
          >
            <stop stopColor="#83CBE6" />
            <stop offset="1" stopColor="#024376" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_15_56"
            x1="113.367"
            x2="-6.87721"
            y1="11.7002"
            y2="13.1783"
          >
            <stop stopColor="#83CBE6" />
            <stop offset="1" stopColor="#024376" />
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