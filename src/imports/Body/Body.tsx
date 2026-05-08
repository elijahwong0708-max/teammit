function Button() {
  return (
    <div className="bg-[#f3f4f6] relative shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-black top-0 tracking-[-0.1504px] whitespace-nowrap">Elijah Wang</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[131.969_0_0] h-[20px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[11.031px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center whitespace-nowrap">←</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container3 />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[73px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-black h-[46px] relative shrink-0 w-full" data-name="Link">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[14px] text-white top-[13px] tracking-[-0.1504px] whitespace-nowrap">Explore</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Link">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[14px] text-black top-[13px] tracking-[-0.1504px] whitespace-nowrap">Messaging</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white h-[46px] relative shrink-0 w-full" data-name="Link">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[17px] not-italic text-[14px] text-black top-[13px] tracking-[-0.1504px] whitespace-nowrap">Schedule</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[167px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">MY PROJECTS</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[14px] text-black top-[8px] tracking-[-0.1504px] whitespace-nowrap">Mobile Banking Redesign</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[14px] text-black top-[8px] tracking-[-0.1504px] whitespace-nowrap">E-commerce Checkout</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[14px] text-black top-[8px] tracking-[-0.1504px] whitespace-nowrap">Fitness Dashboard</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[14px] text-black top-[8px] tracking-[-0.1504px] whitespace-nowrap">Recipe Platform</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[14px] text-black top-[8px] tracking-[-0.1504px] whitespace-nowrap">Productivity Timer</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[212px] items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[262px] items-start pt-[13px] relative shrink-0 w-[207px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-solid border-t inset-0 pointer-events-none" />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[874_0_0] min-h-px relative w-[239px]" data-name="Navigation">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] px-[16px] relative size-full">
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Link">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[103.02px] not-italic text-[14px] text-black text-center top-[11px] tracking-[-0.1504px] whitespace-nowrap">+ Create Project</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[77px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Link8 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[1024px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Navigation />
      <Container9 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white h-[1024px] relative shrink-0 w-[240px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px relative size-full">
        <Container />
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Search projects</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[467_0_0] h-[44px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[19px] relative size-full">
        <TextInput />
      </div>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option1() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option2() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option3() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-[136px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-763px] pr-[899px] pt-[-24px] relative size-full">
        <Option />
        <Option1 />
        <Option2 />
        <Option3 />
      </div>
    </div>
  );
}

function Option4() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option5() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option6() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-[110px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-915px] pr-[1025px] pt-[-24px] relative size-full">
        <Option4 />
        <Option5 />
        <Option6 />
      </div>
    </div>
  );
}

function Option7() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option8() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option9() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option10() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[44px] min-w-px relative" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1041px] pr-[1272px] pt-[-24px] relative size-full">
        <Option7 />
        <Option8 />
        <Option9 />
        <Option10 />
      </div>
    </div>
  );
}

function Option11() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option12() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Option13() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown3() {
  return (
    <div className="bg-white h-[44px] relative shrink-0 w-[120px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1288px] pr-[1408px] pt-[-24px] relative size-full">
        <Option11 />
        <Option12 />
        <Option13 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[44px] relative shrink-0 w-[645px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Dropdown />
        <Dropdown1 />
        <Dropdown2 />
        <Dropdown3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[24px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[93px] relative shrink-0 w-[1200px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[32px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f3f4f6] h-[90px] relative shrink-0 w-[120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-nowrap">Mobile Banking Redesign</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[284.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Expected effort: Medium effort (4–6h/week)</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">2w</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Team: 2 / 5</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Roles: UX · Developer</p>
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[942_0_0] h-[90px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading />
        <Container18 />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-white h-[140px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[25px] relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f3f4f6] h-[90px] relative shrink-0 w-[120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-nowrap">E-commerce Checkout Flow</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[284.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Expected effort: Medium effort (4–6h/week)</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">3w</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Team: 3 / 5</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Roles: UX · Researcher</p>
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[942_0_0] h-[90px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading1 />
        <Container24 />
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-white h-[140px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[25px] relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f3f4f6] h-[90px] relative shrink-0 w-[120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-nowrap">Fitness Tracking Dashboard</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[265.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Expected effort: Light effort (2–4h/week)</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">2w</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Team: 1 / 5</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Roles: Developer · Designer</p>
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[942_0_0] h-[90px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading2 />
        <Container30 />
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-white h-[140px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[25px] relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#f3f4f6] h-[90px] relative shrink-0 w-[120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-nowrap">Recipe Sharing Platform</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[262.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Expected effort: High effort (6–8h/week)</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">3w</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Team: 2 / 5</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Roles: Developer · UX · Content</p>
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[942_0_0] h-[90px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading3 />
        <Container36 />
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-white h-[140px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[25px] relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f3f4f6] h-[90px] relative shrink-0 w-[120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-nowrap">Productivity Timer App</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[20px] relative shrink-0 w-[284.766px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Expected effort: Medium effort (4–6h/week)</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">2w</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Team: 4 / 5</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Roles: Developer · Designer</p>
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[942_0_0] h-[90px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading4 />
        <Container42 />
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-white h-[140px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[25px] relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[#f3f4f6] h-[90px] relative shrink-0 w-[120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-0 tracking-[-0.3125px] whitespace-nowrap">Community Events Platform</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[20px] relative shrink-0 w-[265.078px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Expected effort: Light effort (2–4h/week)</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">3w</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.156px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-0 tracking-[-0.1504px] whitespace-nowrap">Team: 1 / 5</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] tracking-[-0.1504px] whitespace-nowrap">Roles: Developer · UX</p>
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[942_0_0] h-[90px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading5 />
        <Container48 />
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="bg-white h-[140px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#99a1af] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[24px] items-start p-[25px] relative size-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[920px] items-start relative shrink-0 w-full" data-name="Container">
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[931_0_0] min-h-px relative w-[1200px]" data-name="Main Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1200_0_0] h-[1024px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <MainContent />
      </div>
    </div>
  );
}

function ExplorePage() {
  return (
    <div className="bg-white content-stretch flex h-[1024px] items-start relative shrink-0 w-full" data-name="ExplorePage">
      <Sidebar />
      <Container10 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative size-full" data-name="Body">
      <ExplorePage />
    </div>
  );
}