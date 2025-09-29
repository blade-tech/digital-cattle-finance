import svgPaths from "./svg-d6r87ih3qr";
import imgImage from "figma:asset/cd5f7f9e70aa17fa6ff4e2ceb44822a3c61d9719.png";
import imgImage1 from "figma:asset/50c01d8c090069f885a08b92bd49889aeea32be6.png";
import imgImage2 from "figma:asset/25082c2ffacd2706a9defe5f2cfe818698f655c5.png";
import imgImage3 from "figma:asset/c52349ae8c80f002f03465ebf4d9c8e43f591963.png";
import imgImage4 from "figma:asset/e227e6fb9489638b4df12ef723883f2a83d4a51c.png";

function HeadingInvestor() {
  return (
    <div
      className="bg-neutral-100 relative size-full"
      data-name="Heading Investor"
    >
      <div className="absolute border-[#d9d9d9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end px-6 py-3 relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-[129px] items-center justify-start p-0 relative shrink-0">
              <div
                className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
                data-name="Button"
              >
                <div
                  className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center p-0 relative shrink-0"
                  data-name="Content"
                >
                  <div
                    className="overflow-clip relative shrink-0 size-4"
                    data-name="Icon /Bell"
                  >
                    <div
                      className="absolute bottom-[0.906%] left-[12.5%] right-[12.5%] top-[0.879%]"
                      data-name="Vector"
                    >
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        role="presentation"
                        viewBox="0 0 12 16"
                      >
                        <path
                          d={svgPaths.p37311600}
                          fill="var(--fill-0, black)"
                          fillOpacity="0.88"
                          id="Vector"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute right-0 size-1.5 top-0"
                data-name="Badge Status"
              >
                <div
                  className="absolute inset-[-33.333%]"
                  style={
                    {
                      "--fill-0": "rgba(0, 159, 227, 1)",
                      "--stroke-0": "rgba(255, 255, 255, 1)",
                    } as React.CSSProperties
                  }
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    role="presentation"
                    viewBox="0 0 10 10"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      fill="var(--fill-0, #009FE3)"
                      id="Ellipse"
                      r="4"
                      stroke="var(--stroke-0, white)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row items-center justify-center p-0 relative rounded-md shrink-0 size-8"
              data-name="Button"
            >
              <div
                className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center p-0 relative shrink-0"
                data-name="Content"
              >
                <div
                  className="overflow-clip relative shrink-0 size-4"
                  data-name="Icon /User"
                >
                  <div
                    className="absolute bottom-[5.594%] left-[8.032%] right-[8.039%] top-[5.567%]"
                    data-name="Vector"
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      role="presentation"
                      viewBox="0 0 14 15"
                    >
                      <path
                        d={svgPaths.p3c98d000}
                        fill="var(--fill-0, black)"
                        fillOpacity="0.88"
                        id="Vector"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TextProps {
  text?: string;
  type?:
    | "Default"
    | "Secondary"
    | "Disabled"
    | "Error"
    | "Warning"
    | "Success"
    | "Code";
  edit?: "False";
}

function Text({
  text = "Label",
  type = "Disabled",
  edit = "False",
}: TextProps) {
  if (type === "Disabled" && edit === "False") {
    return (
      <div
        className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full"
        data-name="Type=Disabled, Edit=False"
      >
        <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.25)] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
  if (type === "Error" && edit === "False") {
    return (
      <div
        className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full"
        data-name="Type=Error, Edit=False"
      >
        <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5222d] text-[14px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
  if (type === "Secondary" && edit === "False") {
    return (
      <div
        className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full"
        data-name="Type=Secondary, Edit=False"
      >
        <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
  if (type === "Warning" && edit === "False") {
    return (
      <div
        className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full"
        data-name="Type=Warning, Edit=False"
      >
        <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#faad14] text-[14px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
  if (type === "Success" && edit === "False") {
    return (
      <div
        className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full"
        data-name="Type=Success, Edit=False"
      >
        <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#52c41a] text-[14px] text-left text-nowrap">
          <p className="block leading-[22px] whitespace-pre">{text}</p>
        </div>
      </div>
    );
  }
  if (type === "Code" && edit === "False") {
    return (
      <div
        className="bg-[rgba(0,0,0,0.06)] box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative rounded size-full"
        data-name="Type=Code, Edit=False"
      >
        <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded" />
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-1.5 py-0.5 relative rounded-sm shrink-0">
          <div className="font-['Consolas:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
            <p className="block leading-[16px] whitespace-pre">{text}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full"
      data-name="Type=Default, Edit=False"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative size-full" data-name="Icon /Right">
      <div
        className="absolute bottom-[7.697%] left-[26.563%] right-[20.312%] top-[7.703%]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          role="presentation"
          viewBox="0 0 20 31"
        >
          <path
            d={svgPaths.p3d606240}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </svg>
      </div>
    </div>
  );
}

function ListItemEvent() {
  return (
    <div className="relative rounded-2xl size-full" data-name="list item event">
      <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative size-full">
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Icon /Dollar"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              role="presentation"
              viewBox="0 0 24 24"
            >
              <path
                d={svgPaths.p3dcc88c0}
                fill="var(--fill-0, black)"
                fillOpacity="0.45"
                id="Vector"
              />
            </svg>
          </div>
          <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
              <div
                className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
                data-name="Text"
              >
                <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
                  <p className="block leading-[24px] whitespace-pre">
                    Profit distribution received
                  </p>
                </div>
              </div>
            </div>
            <div
              className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
              data-name="Text"
            >
              <HeadingInvestor />
            </div>
          </div>
          <div
            className="overflow-clip relative shrink-0 size-6"
            data-name="Icon /Right"
          >
            <ListItemEvent />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div
      className="[grid-area:1_/_1] h-[24.403px] ml-0 mt-0 relative w-[110.761px]"
      data-name="Group"
    >
      <div className="absolute bottom-[-0.002%] left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 111 25"
        >
          <g id="Group">
            <path
              d={svgPaths.p1336c7c0}
              fill="url(#paint0_linear_1_14566)"
              id="Vector"
            />
            <path
              d={svgPaths.p3271f400}
              fill="url(#paint1_linear_1_14566)"
              id="Vector_2"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_14566"
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
              id="paint1_linear_1_14566"
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
    </div>
  );
}

function Group2() {
  return (
    <div
      className="[grid-area:1_/_1] h-[9.877px] ml-[64.746%] mt-[27.061%] relative w-[7.737px]"
      data-name="Group"
    >
      <div className="absolute bottom-[-0.006%] left-0 right-[-0.003%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 10"
        >
          <g id="Group">
            <path
              d={svgPaths.p118fd800}
              fill="url(#paint0_linear_1_14517)"
              id="Vector"
            />
            <path
              d={svgPaths.p9b26f00}
              fill="url(#paint1_linear_1_14517)"
              id="Vector_2"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_14517"
              x1="43.3873"
              x2="-75.2315"
              y1="6.66952"
              y2="6.66952"
            >
              <stop stopColor="#83CBE6" />
              <stop offset="1" stopColor="#024376" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1_14517"
              x1="43.3874"
              x2="-75.2315"
              y1="4.93179"
              y2="4.93179"
            >
              <stop stopColor="#83CBE6" />
              <stop offset="1" stopColor="#024376" />
            </linearGradient>
          </defs>
        </svg>
      </div>
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

function LogoPlain() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Logo plain">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-[52px] items-center justify-start px-[37px] py-3 relative w-full">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function LogoWraper() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-16 items-center justify-center p-0 relative shrink-0 w-full"
      data-name="logo wraper"
    >
      <div className="absolute border-[#d9d9d9] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoPlain />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_14474)" id="Icon">
          <path
            d={svgPaths.p1ce7d600}
            fill="var(--fill-0, white)"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeWidth="0.00111607"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_14474">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavigationItemCustom() {
  return (
    <div
      className="bg-[#009fe3] h-10 relative rounded-[32px] shrink-0 w-full"
      data-name="Navigation Item custom"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start px-4 py-0 relative w-full">
          <Icon />
          <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">Home</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p130edc80}
            fill="var(--fill-0, black)"
            fillOpacity="0.88"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ItemInlineSubmenu02() {
  return (
    <div
      className="h-10 relative rounded-[32px] shrink-0 w-full"
      data-name="Item / Inline Submenu02"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start px-4 py-0 relative w-full">
          <Icon1 />
          <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_14537)" id="Icon">
          <path
            d={svgPaths.p1a443fc0}
            fill="var(--fill-0, black)"
            fillOpacity="0.88"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_14537">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ItemInlineSubmenu03() {
  return (
    <div
      className="h-10 relative rounded-[32px] shrink-0 w-full"
      data-name="Item / Inline Submenu03"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start px-4 py-0 relative w-full">
          <Icon2 />
          <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon">
          <path
            d={svgPaths.p27c11580}
            fill="var(--fill-0, black)"
            fillOpacity="0.88"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ItemInlineSubmenu04() {
  return (
    <div
      className="h-10 relative rounded-[32px] shrink-0 w-full"
      data-name="Item / Inline Submenu04"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start px-4 py-0 relative w-full">
          <Icon3 />
          <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
            <p className="block leading-[22px] whitespace-pre">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InlineMenu() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Inline menu"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start pb-0 pl-6 pr-2 pt-6 relative size-full">
          <NavigationItemCustom />
          <ItemInlineSubmenu02 />
          <ItemInlineSubmenu03 />
          <ItemInlineSubmenu04 />
        </div>
      </div>
    </div>
  );
}

function IconLeft() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon /Left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon /Left">
          <path
            d={svgPaths.p31de8b00}
            fill="var(--fill-0, black)"
            fillOpacity="0.88"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <IconLeft />
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-8 items-center justify-center p-0 relative rounded-[32px] shrink-0 w-full"
      data-name="Button"
    >
      <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <Content />
    </div>
  );
}

function CollapseButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="Collapse button">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center pb-6 pl-6 pr-4 pt-0 relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function SidebarCustomerInvestor() {
  return (
    <div
      className="bg-neutral-100 box-border content-stretch flex flex-col h-full items-center justify-start order-2 p-0 relative shrink-0 w-[236px]"
      data-name="Sidebar Customer Investor"
    >
      <div className="absolute border-[#d9d9d9] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <LogoWraper />
      <InlineMenu />
      <CollapseButton />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p3e816000}
            fill="var(--fill-0, black)"
            fillOpacity="0.88"
            id="vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.25)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative rounded-[165px] shrink-0 size-8"
      data-name="Icon Container"
    >
      <Icon4 />
    </div>
  );
}

function Text1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[30px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[38px] whitespace-pre">$25,000</p>
      </div>
    </div>
  );
}

function ValueContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Value Container"
    >
      <Text1 />
    </div>
  );
}

function DashMetricsGlass() {
  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.2)] grow h-[150px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dash-metrics-Glass"
    >
      <div className="absolute border border-[rgba(255,255,255,0.33)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 h-[150px] items-start justify-start px-4 py-5 relative w-full">
          <IconContainer />
          <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Total Invested
            </p>
          </div>
          <ValueContainer />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_16px_0px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_1_14552)" id="Icon">
          <path
            d={svgPaths.p26a4ad00}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_14552">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.25)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative rounded-[165px] shrink-0 size-8"
      data-name="Icon Container"
    >
      <Icon5 />
    </div>
  );
}

function Text2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[30px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[38px] whitespace-pre">$3,500</p>
      </div>
    </div>
  );
}

function ValueContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Value Container"
    >
      <Text2 />
    </div>
  );
}

function DashMetricsGlass1() {
  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.2)] grow h-[150px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dash-metrics-Glass"
    >
      <div className="absolute border border-[rgba(255,255,255,0.33)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 h-[150px] items-start justify-start px-4 py-5 relative w-full">
          <IconContainer1 />
          <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Estimated Return
            </p>
          </div>
          <ValueContainer1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_16px_0px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">
          <path
            d={svgPaths.p6b7180}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.25)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative rounded-[165px] shrink-0 size-8"
      data-name="Icon Container"
    >
      <Icon6 />
    </div>
  );
}

function Text3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[30px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[38px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function ValueContainer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-[38px] items-center justify-start p-0 relative shrink-0"
      data-name="Value Container"
    >
      <Text3 />
    </div>
  );
}

function DashMetricsGlass2() {
  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter basis-0 bg-[rgba(255,255,255,0.2)] grow h-[150px] min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="dash-metrics-Glass"
    >
      <div className="absolute border border-[rgba(255,255,255,0.33)] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 h-[150px] items-start justify-start px-4 py-5 relative w-full">
          <IconContainer2 />
          <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Active Herds</p>
          </div>
          <ValueContainer2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_16px_0px_inset_rgba(255,255,255,0.2)]" />
    </div>
  );
}

function FinancingSummary() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Financing Summary"
    >
      <DashMetricsGlass />
      <DashMetricsGlass1 />
      <DashMetricsGlass2 />
    </div>
  );
}

function Text4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Active Herds</p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative w-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">
          Beef Cattle – Angus
        </p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#009fe3] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Details</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-0 relative rounded shrink-0"
      data-name="Button"
    >
      <Content3 />
    </div>
  );
}

function Head() {
  return (
    <div className="relative shrink-0 w-full" data-name="Head">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-3 relative w-full">
          <Text5 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block font-['Quicksand:Regular',_sans-serif] leading-[20px] text-[12px] whitespace-pre">
          20 head, for meat
        </p>
      </div>
    </div>
  );
}

function IconEnvironment() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon /Environment">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon /Environment">
          <path
            d={svgPaths.p121bf800}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2609453() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 size-5">
      <IconEnvironment />
    </div>
  );
}

function Text7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block font-['Quicksand:Regular',_sans-serif] leading-[20px] text-[12px] whitespace-pre">
          Jashore District
        </p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Bangladesh</p>
      </div>
    </div>
  );
}

function Frame2609452() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Frame2609451() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
      <Frame2609453 />
      <Frame2609452 />
    </div>
  );
}

function Frame2609349() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-start p-0 relative shrink-0">
      <Text6 />
      <Frame2609451 />
    </div>
  );
}

function Image() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="image"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-16"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div className="flex flex-row items-center self-stretch">
        <Frame2609349 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Total Invested</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$10,000</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text10 />
    </div>
  );
}

function MetricBasic() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text9 />
      <Footer />
    </div>
  );
}

function Text11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Target Return</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$1,250</p>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text12 />
    </div>
  );
}

function MetricBasic1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text11 />
      <Footer1 />
    </div>
  );
}

function Frame2609384() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0">
      <MetricBasic />
      <MetricBasic1 />
    </div>
  );
}

function Frame2609454() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Image />
      <Frame2609384 />
    </div>
  );
}

function Text13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Term</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">7 Month</p>
      </div>
    </div>
  );
}

function Frame2609455() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0">
      <Text13 />
      <Text14 />
    </div>
  );
}

function Frame2609366() {
  return (
    <div className="basis-0 bg-[#d9f7be] grow h-full min-h-px min-w-px relative rounded-md shrink-0">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-end px-2 py-1 size-full" />
      </div>
    </div>
  );
}

function Frame2609367() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.06)] grow h-full min-h-px min-w-px relative rounded-md shrink-0">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-2 py-1 size-full" />
      </div>
    </div>
  );
}

function Frame2609372() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-3 items-start justify-start p-0 relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Frame2609366 key={i} />
      ))}
      {[...Array(4).keys()].map((_, i) => (
        <Frame2609367 key={i} />
      ))}
    </div>
  );
}

function MetricBasic2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="metric-basic"
    >
      <Frame2609455 />
      <Frame2609372 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="absolute border-[#f0f0f0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-3 relative w-full">
          <Frame2609454 />
          <MetricBasic2 />
        </div>
      </div>
    </div>
  );
}

function DashMetricsCustomer() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative rounded-2xl shrink-0"
      data-name="dash-metrics-customer"
    >
      <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Head />
      <Body />
    </div>
  );
}

function Text21() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">
          Beef Cattle – Brahman
        </p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#009fe3] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Details</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-0 relative rounded shrink-0"
      data-name="Button"
    >
      <Content4 />
    </div>
  );
}

function Head1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Head">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-3 relative w-full">
          <Text21 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block font-['Quicksand:Regular',_sans-serif] leading-[20px] text-[12px] whitespace-pre">
          18 head, for meat
        </p>
      </div>
    </div>
  );
}

function IconEnvironment1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon /Environment">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Icon /Environment">
          <path
            d={svgPaths.p121bf800}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2609457() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 size-5">
      <IconEnvironment1 />
    </div>
  );
}

function Text23() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block font-['Quicksand:Regular',_sans-serif] leading-[20px] text-[12px] whitespace-pre">
          Jashore District
        </p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Bangladesh</p>
      </div>
    </div>
  );
}

function Frame2609464() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Frame2609465() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
      <Frame2609457 />
      <Frame2609464 />
    </div>
  );
}

function Frame2609350() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-start p-0 relative shrink-0">
      <Text22 />
      <Frame2609465 />
    </div>
  );
}

function Image1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="image"
    >
      <div
        className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-16"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <div className="flex flex-row items-center self-stretch">
        <Frame2609350 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Total Invested</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$8,200</p>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text26 />
    </div>
  );
}

function MetricBasic3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text25 />
      <Footer2 />
    </div>
  );
}

function Text27() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Target Return</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$1,050</p>
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text28 />
    </div>
  );
}

function MetricBasic4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text27 />
      <Footer3 />
    </div>
  );
}

function Frame2609385() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0">
      <MetricBasic3 />
      <MetricBasic4 />
    </div>
  );
}

function Frame2609466() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Image1 />
      <Frame2609385 />
    </div>
  );
}

function Text29() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Term</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">7 Month</p>
      </div>
    </div>
  );
}

function Frame2609467() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Frame2609373() {
  return (
    <div className="basis-0 bg-[#d9f7be] grow h-full min-h-px min-w-px relative rounded-md shrink-0">
      <div className="flex flex-row justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-end px-2 py-1 size-full" />
      </div>
    </div>
  );
}

function Frame2609375() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.06)] grow h-full min-h-px min-w-px relative rounded-md shrink-0">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-2 py-1 size-full" />
      </div>
    </div>
  );
}

function Frame2609379() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-3 items-start justify-start p-0 relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Frame2609373 key={i} />
      ))}
      {[...Array(4).keys()].map((_, i) => (
        <Frame2609375 key={i} />
      ))}
    </div>
  );
}

function MetricBasic5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="metric-basic"
    >
      <Frame2609467 />
      <Frame2609379 />
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="absolute border-[#f0f0f0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-3 relative w-full">
          <Frame2609466 />
          <MetricBasic5 />
        </div>
      </div>
    </div>
  );
}

function DashMetricsCustomer1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative rounded-2xl shrink-0"
      data-name="dash-metrics-customer"
    >
      <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-2xl" />
      <Head1 />
      <Body1 />
    </div>
  );
}

function ActiveDealsList() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Active Deals List"
    >
      <DashMetricsCustomer />
      <DashMetricsCustomer1 />
    </div>
  );
}

function ActiveDeals() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Active Deals"
    >
      <SectionHeader />
      <ActiveDealsList />
    </div>
  );
}

function Text37() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Recent Updates</p>
      </div>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative w-full">
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function MedicalServices() {
  return (
    <div className="relative shrink-0 size-6" data-name="medical_services">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="medical_services">
          <path
            d={svgPaths.p41540}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Veterinary report for
        </p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#009fe3] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">
          Beef Cattle – Angus
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-0 relative rounded shrink-0"
      data-name="Button"
    >
      <Content5 />
    </div>
  );
}

function Frame2609468() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
      <Text38 />
      <Button3 />
    </div>
  );
}

function Text39() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Apr 15, 2025</p>
      </div>
    </div>
  );
}

function Frame2609469() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2609468 />
      <Text39 />
    </div>
  );
}

function IconRight1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon /Right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon /Right">
          <path
            d={svgPaths.p15d01cc0}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ListItemEvent1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full"
      data-name="list item event"
    >
      <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative w-full">
          <MedicalServices />
          <Frame2609469 />
          <IconRight1 />
        </div>
      </div>
    </div>
  );
}

function Scale() {
  return (
    <div className="relative shrink-0 size-6" data-name="scale">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="scale">
          <path
            d={svgPaths.p2ad12800}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">New weight data</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-6 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#009fe3] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">
          Beef Cattle – Brahman
        </p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-0 relative rounded shrink-0"
      data-name="Button"
    >
      <Content6 />
    </div>
  );
}

function Frame2609470() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
      <Text40 />
      <Button4 />
    </div>
  );
}

function Text41() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Apr 15, 2025</p>
      </div>
    </div>
  );
}

function Frame2609471() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2609470 />
      <Text41 />
    </div>
  );
}

function IconRight2() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon /Right">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon /Right">
          <path
            d={svgPaths.p15d01cc0}
            fill="var(--fill-0, black)"
            fillOpacity="0.45"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ListItemEvent2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full"
      data-name="list item event"
    >
      <div className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative w-full">
          <Scale />
          <Frame2609471 />
          <IconRight2 />
        </div>
      </div>
    </div>
  );
}

function Frame2609459() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="bg-[#ffffff] box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative rounded-2xl shrink-0 w-[1156px]"
        data-name="list item event"
      >
        <ListItemEvent />
      </div>
      <ListItemEvent1 />
      <ListItemEvent2 />
    </div>
  );
}

function Frame2609460() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <SectionHeader1 />
      <Frame2609459 />
    </div>
  );
}

function Text42() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Beef Cattle – Charolais
        </p>
      </div>
    </div>
  );
}

function Frame2609472() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
      <Text42 />
    </div>
  );
}

function Text43() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">20 head, for meat</p>
      </div>
    </div>
  );
}

function Frame2609473() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <Frame2609472 />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Target Return</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">10%</p>
      </div>
    </div>
  );
}

function Footer4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text45 />
    </div>
  );
}

function MetricBasic6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text44 />
      <Footer4 />
    </div>
  );
}

function Text46() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Term</p>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">6 months</p>
      </div>
    </div>
  );
}

function Footer5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text47 />
    </div>
  );
}

function MetricBasic7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text46 />
      <Footer5 />
    </div>
  );
}

function Text48() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Minimum Investment
        </p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$2,000</p>
      </div>
    </div>
  );
}

function Footer6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text49 />
    </div>
  );
}

function MetricBasic8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text48 />
      <Footer6 />
    </div>
  );
}

function Frame2609461() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-0 relative shrink-0">
      <MetricBasic6 />
      <MetricBasic7 />
      <MetricBasic8 />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#009fe3] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Tap to view more</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-0 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <Content7 />
    </div>
  );
}

function IconSearchOutlined5() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="Icon / SearchOutlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_14528)" id="Icon / SearchOutlined ">
          <path
            d={svgPaths.p3da0f400}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_14528">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <IconSearchOutlined5 />
      <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Explore All Herds</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="bg-[#009fe3] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-0 relative rounded-2xl shrink-0"
      data-name="Button"
    >
      <Content8 />
    </div>
  );
}

function Frame2609463() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Button5 />
      <Button6 />
    </div>
  );
}

function AdvertisementItem() {
  return (
    <div
      className="bg-[#e8f7fc] relative rounded-2xl shrink-0 w-full"
      data-name="Advertisement item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-14"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage2}')` }}
          />
          <Frame2609473 />
          <Frame2609461 />
          <Frame2609463 />
        </div>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Beef Cattle – Limousin
        </p>
      </div>
    </div>
  );
}

function Frame2609474() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">25 head, for meat</p>
      </div>
    </div>
  );
}

function Frame2609475() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <Frame2609474 />
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Target Return</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">9%</p>
      </div>
    </div>
  );
}

function Footer7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text53 />
    </div>
  );
}

function MetricBasic9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text52 />
      <Footer7 />
    </div>
  );
}

function Text54() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Term</p>
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">6 months</p>
      </div>
    </div>
  );
}

function Footer8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text55 />
    </div>
  );
}

function MetricBasic10() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text54 />
      <Footer8 />
    </div>
  );
}

function Text56() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Minimum Investment
        </p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$7,200</p>
      </div>
    </div>
  );
}

function Footer9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text57 />
    </div>
  );
}

function MetricBasic11() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text56 />
      <Footer9 />
    </div>
  );
}

function Frame2609476() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-0 relative shrink-0">
      <MetricBasic9 />
      <MetricBasic10 />
      <MetricBasic11 />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#009fe3] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Tap to view more</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-0 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <Content9 />
    </div>
  );
}

function IconSearchOutlined7() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="Icon / SearchOutlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_14528)" id="Icon / SearchOutlined ">
          <path
            d={svgPaths.p3da0f400}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_14528">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <IconSearchOutlined7 />
      <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Explore All Herds</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="bg-[#009fe3] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-0 relative rounded-2xl shrink-0"
      data-name="Button"
    >
      <Content10 />
    </div>
  );
}

function Frame2609477() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Button7 />
      <Button8 />
    </div>
  );
}

function AdvertisementItem1() {
  return (
    <div
      className="bg-[#e8f7fc] relative rounded-2xl shrink-0 w-full"
      data-name="Advertisement item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-14"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage3}')` }}
          />
          <Frame2609475 />
          <Frame2609476 />
          <Frame2609477 />
        </div>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Beef Cattle – Belgian Blue
        </p>
      </div>
    </div>
  );
}

function Frame2609478() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0">
      <Text58 />
    </div>
  );
}

function Text59() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">15 head, for meat</p>
      </div>
    </div>
  );
}

function Frame2609479() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
      <Frame2609478 />
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Target Return</p>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">13%</p>
      </div>
    </div>
  );
}

function Footer10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text61 />
    </div>
  );
}

function MetricBasic12() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text60 />
      <Footer10 />
    </div>
  );
}

function Text62() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Term</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">9 months</p>
      </div>
    </div>
  );
}

function Footer11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text63 />
    </div>
  );
}

function MetricBasic13() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text62 />
      <Footer11 />
    </div>
  );
}

function Text64() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.45)] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Minimum Investment
        </p>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Text"
    >
      <div className="font-['Quicksand:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#004f7a] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">$6,000</p>
      </div>
    </div>
  );
}

function Footer12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Footer"
    >
      <Text65 />
    </div>
  );
}

function MetricBasic14() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-[120px]"
      data-name="metric-basic"
    >
      <Text64 />
      <Footer12 />
    </div>
  );
}

function Frame2609480() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-0 relative shrink-0">
      <MetricBasic12 />
      <MetricBasic13 />
      <MetricBasic14 />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#009fe3] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Tap to view more</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-0 relative rounded-lg shrink-0"
      data-name="Button"
    >
      <Content11 />
    </div>
  );
}

function IconSearchOutlined9() {
  return (
    <div
      className="relative shrink-0 size-[18px]"
      data-name="Icon / SearchOutlined"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_1_14528)" id="Icon / SearchOutlined ">
          <path
            d={svgPaths.p3da0f400}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_14528">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-center p-0 relative shrink-0"
      data-name="Content"
    >
      <IconSearchOutlined9 />
      <div className="flex flex-col font-['Quicksand:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Explore All Herds</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div
      className="bg-[#009fe3] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-0 relative rounded-2xl shrink-0"
      data-name="Button"
    >
      <Content12 />
    </div>
  );
}

function Frame2609481() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
      <Button9 />
      <Button10 />
    </div>
  );
}

function AdvertisementItem2() {
  return (
    <div
      className="bg-[#e8f7fc] relative rounded-2xl shrink-0 w-full"
      data-name="Advertisement item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[16px] relative w-full">
          <div
            className="bg-center bg-cover bg-no-repeat rounded shrink-0 size-14"
            data-name="Image"
            style={{ backgroundImage: `url('${imgImage4}')` }}
          />
          <Frame2609479 />
          <Frame2609480 />
          <Frame2609481 />
        </div>
      </div>
    </div>
  );
}

function Advertisement() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow h-[88px] items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Advertisement"
    >
      <AdvertisementItem />
      <AdvertisementItem1 />
      <AdvertisementItem2 />
    </div>
  );
}

function Frame2609462() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <Advertisement />
    </div>
  );
}

function ContentContainer() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px order-1 relative shrink-0 w-full"
      data-name="Content Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-[24px] relative size-full">
          <FinancingSummary />
          <ActiveDeals />
          <Frame2609460 />
          <Frame2609462 />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col-reverse grow h-full items-start justify-between min-h-px min-w-px order-1 p-0 relative shrink-0"
      data-name="Main Container"
    >
      <div
        className="bg-neutral-100 order-2 relative shrink-0 w-full"
        data-name="Heading Investor"
      >
        <HeadingInvestor />
      </div>
      <ContentContainer />
    </div>
  );
}

export default function CustomerDashboardHome() {
  return (
    <div
      className="bg-neutral-100 box-border content-stretch flex flex-row-reverse items-center justify-start p-0 relative size-full"
      data-name="Customer - Dashboard - Home"
    >
      <SidebarCustomerInvestor />
      <MainContainer />
    </div>
  );
}