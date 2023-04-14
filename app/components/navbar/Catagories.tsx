"use client"
import Container from "../Container";
import {BsSnow} from 'react-icons/bs'
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill ,GiIsland,GiBoatFishing,GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn} from "react-icons/gi";
import { FaSkiing} from "react-icons/fa";
import { MdOutlineVilla } from "react-icons/md";                 
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an Island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This is close to lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property is in a camping",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in a camping",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in a camping",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in a camping",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a camping",
  },
];
function Catagories() {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
}

export default Catagories;
