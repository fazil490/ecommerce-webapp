import { v4 as uuid } from "uuid";

export const categories = [
  {
      _id: uuid(),
      categoryName: "FORMALS",
      img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697362803/woodland-formal-brwn_o7cwe3.webp",
      description: "gents-formals",
    },
    {
        _id: uuid(),
        categoryName: "CASUALS",
        img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697362804/woodland-casual-navy_y88ixr.webp",
        description: "gents-casuals",
    },
    {
        _id: uuid(),
        categoryName: "LOAFERS",
        img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697362803/woodland-loafer-biege_mjlanr.webp",
        description: "gents-loafers",
      },
  {
    _id: uuid(),
    categoryName: "SNEAKERS",
    img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697342438/woodland-sneaker-cashewbrn_johwog.webp",
    description: "gents-sneakers",
  },
  {
    _id: uuid(),
    categoryName: "SPORT SHOES",
    img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697363085/woodland-sports-blue_kwlvo6.webp",
    description: "gents-sports",
  },
    {
      _id: uuid(),
      categoryName: "BOOTS",
      img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697342434/woodland-boot-navy_psbkjx.webp",
      description: "gents-boots",
    },
];
