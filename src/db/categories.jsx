import { v4 as uuid } from "uuid";

export const categories = [
  {
      _id: uuid(),
      categoryName: "Formals",
      img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697362803/woodland-formal-brwn_o7cwe3.webp",
      description: "formals",
    },
    {
        _id: uuid(),
        categoryName: "Casuals",
        img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697362804/woodland-casual-navy_y88ixr.webp",
        description: "casuals",
    },
    {
        _id: uuid(),
        categoryName: "Loafers",
        img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697362803/woodland-loafer-biege_mjlanr.webp",
        description: "loafers",
      },
  {
    _id: uuid(),
    categoryName: "Sneakers",
    img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697342438/woodland-sneaker-cashewbrn_johwog.webp",
    description: "sneakers",
  },
  {
    _id: uuid(),
    categoryName: "Sport Shoes",
    img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697363085/woodland-sports-blue_kwlvo6.webp",
    description: "sports",
  },
    {
      _id: uuid(),
      categoryName: "Boots",
      img: "https://res.cloudinary.com/dewisedrc/image/upload/v1697342434/woodland-boot-navy_psbkjx.webp",
      description: "boots",
    },
];
