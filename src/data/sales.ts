import victony from "../assets/images/stubborn tour.webp";
import playboi from "../assets/images/playboi.jpeg";
import subaru from "../assets/images/subaru.jpeg";
import subaruWrld from "../assets/images/subaru-world.jpeg";
import nisaru from "../assets/images/nisaru.jpeg";
import cruel from "../assets/images/cruel.jpeg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: "subaru",
    name: "subaru boyz (vinyl)",
    price: 999,
    image: subaru,
  },

  {
    id: "tour",
    name: "stubborn's world tour",
    price: 199,
    image: victony,
  },

  {
    id: "lego",
    name: "Subaru Lego",
    price: 499,
    image: cruel,
  },

  {
    id: "vinyl",
    name: "I Am Music (Vinyl)",
    price: 1099,
    image: playboi,
  },

  {
    id: "ps5",
    name: "Sub Wrld PS5",
    price: 899,
    image: subaruWrld,
  },

  {
    id: "nisaru",
    name: "Nisaru NFTs",
    price: 1999,
    image: nisaru,
  },
];
