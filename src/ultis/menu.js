import icons from "./icons";

const { MdOutlineLibraryMusic, TbChartArcs ,ImRadioChecked ,RiPagesLine} = icons;

export const slideBarMenu = [
  {
    path: "mymusic",
    text: "Cá Nhân",
    icons: <MdOutlineLibraryMusic size={24}/>,
  },
  {
    path: "",
    text: "Khám phá",
    end:true,
    icons: <ImRadioChecked size={24}/>,
  },
  {
    path: "zing-char",
    text: "#zingchar",
    icons: <TbChartArcs size={24}/>,
  },
  {
    path: "follow",
    text: "Theo dõi",
    icons: <RiPagesLine size={24}/>,
  }
];
