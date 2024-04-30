import { Text } from "@/components/text";
import { Divider } from "@/components/divider";
import { Card } from "@/components/card";
import Image from "next/image";

const Section1 = () => (
  <div className="flex flex-row md:flex-col gap-[1rem] md:gap-[2rem]">
    <div className="h-[5rem] w-[5rem] md:h-[11rem] md:w-[11rem] rounded-full relative overflow-hidden">
      <Image src={'/jared.jpg'} alt="jared" fill objectFit="cover"/>
    </div>

    <div className="grow flex flex-col gap-[.25rem]">
      <Text content="Farid Sharby" size="base-20" weight='bold' />

      <div className="flex flex-col md:flex-row gap-[.25rem] md:gap-[1rem]">
        <div className="flex gap-[0.25rem] md:gap-[.35rem] items-center">
          <div className="h-[18px] w-[18px] relative">
            <Image src={'/location.svg'} alt="" fill objectFit="cover"/>
          </div>
          <Text content="Malaysia" color="gray"/>
        </div>

        <div className="flex gap-[0.25rem] md:gap-[.35rem] items-center">
          <div className="h-[18px] w-[18px] relative">
            <Image src={'/bitcoin.svg'} alt="" fill objectFit="cover"/>
          </div>
          <Text content="$999k/month" color="gray"/>
        </div>
      </div>
    </div>

    <div className="block md:hidden">
      <div className="h-[2rem] w-[2rem] bg-yellow-500 rounded-lg p-[6px]">
        <div className="h-full w-full relative">
          <Image src={'/people.svg'} alt="" fill objectFit="contain"/>
        </div>
      </div>
    </div>
  </div>
)

const Section2 = () => (
  <div className="flex flex-col gap-[1rem]">
    <Text content="Software Dev / Professional Procrastinator" weight="bold"/>

    <Text content={`"The key of creating a good software is merely a combination of pressing Ctrl+C and Ctrl+V."`} color="gray"/>
  </div>
);

const cardData = [
  { title: 'Title 1', description: 'Description 1' },
  { title: 'Title 2', description: 'Description 2' },
  { title: 'Title 3', description: 'Description 3' },
  { title: 'Title 4', description: 'Description 4' },
  { title: 'Title 5', description: 'Description 5' },
  { title: 'Title 6', description: 'Description 6' },
]

export default function Home() {
  return (
    <div className="flex flex-col bg-[#E6E6E6] min-h-screen h-auto md:h-dvh overflow-hidden justify-center">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="max-w-[1200px] grow flex flex-col md:flex-row items-stretch md:items-center">
          {/* Shared Section1 and Section2 */}
          <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] p-[24px] md:p-[64px] max-w-auto md:max-w-[400px]">
            <Section1 />
            <Section2 />
          </div>

          {/* Divider for mobile only */}
          <div className="block md:hidden">
            <Divider />
          </div>

          {/* Shared Cards Section */}
          <div className="flex flex-col gap-[15px] p-[24px] md:grow md:gap-[1rem] md:p-[64px]">
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} description={card.description} />
            ))}
          </div>
        </div>  
      </div>
    </div>

  );
}
