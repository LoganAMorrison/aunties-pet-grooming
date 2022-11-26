import type { StaticImageData } from "next/image";

import galleryAbby from "../../public/images/abby.png";
import galleryAussieSmile from "../../public/images/aussie_smile.jpeg";
import galleryBathLab from "../../public/images/bath_lab.jpeg";
import galleryBiscuit from "../../public/images/biscuit.png";
import galleryHilaryAndZazu from "../../public/images/hilary_zazu.png";
import galleryJade from "../../public/images/jade.png";
import galleryJinx from "../../public/images/jinx.png";
import galleryKai from "../../public/images/kai.png";
import galleryMustache from "../../public/images/mustache.png";
import galleryOzzy from "../../public/images/ozzy.png";
import galleryThreePugs from "../../public/images/three_pugs.png";
import galleryBella from "../../public/images/bella.png";
import galleryBruno from "../../public/images/bruno.jpg";
import galleryCorg from "../../public/images/corg.jpeg";
import galleryCupcake from "../../public/images/cupcake.png";
import galleryDood from "../../public/images/dood.jpeg";
import galleryDoodWithSolo from "../../public/images/dood_with_solo.jpeg";
import galleryDuke from "../../public/images/duke.png";
import galleryFeetTrim from "../../public/images/feet_trim.jpeg";
import galleryFinn from "../../public/images/finn.jpg";
import galleryFoldy from "../../public/images/foldy.jpeg";
import galleryFrodoAndBubba1 from "../../public/images/frodo_bubba.png";
import galleryFrodoAndBubba2 from "../../public/images/frodo_bubba2.png";
import galleryKody from "../../public/images/kody.png";
import galleryMaddoc from "../../public/images/maddoc.png";
import galleryMazie from "../../public/images/mazie.jpeg";
import galleryNailbiter from "../../public/images/nailbiter.jpeg";
import galleryNorm from "../../public/images/norm.png";
import galleryPhoebe from "../../public/images/phoebe.jpg";
import galleryPj from "../../public/images/pj.jpg";
import galleryPolly from "../../public/images/polly.png";
import galleryPood from "../../public/images/pood.jpeg";
import gallerySidney from "../../public/images/sidney.jpg";
import gallerySolo from "../../public/images/solo.jpeg";
import gallerySoloMat from "../../public/images/solo_mat.jpeg";
import galleryThed from "../../public/images/thed.jpg";

export const enum Breed {
  AustralianShepherd = "Australian Shepherd",
  AussieDoodle = "Aussie Doodle",
  Cat = "Cat",
  Corgi = "Corgi",
  Chihuahua = "Chihuahua",
  Cavachon = "Cavachon",
  Cavapoo = "Cavapoo",
  GoldenDoodle = "Golden Doodle",
  GermanShepherd = "German Shepherd",
  GreatPyrenees = "Great Pyrenees",
  Labrador = "Labrador",
  LhasaApso = "Lhasa Apso",
  MiniAussie = "Mini Aussie",
  Morkie = "Morkie",
  Pug = "Pug",
  Pomeranian = "Pomeranian",
  ScottishFold = "Scottish Fold",
  Schnauzer = "Schnauzer",
  Shepherd = "Shepherd",
  StandardPoodle = "Standard Poodle",
  Other = "Other",
  None = "None",
}

interface GalleryImage {
  id: number;
  image: StaticImageData;
  aspectRatio: number;
  width: number;
  height: number;
  alt: string;
  name: string | string[];
  breed: Breed | Breed[];
}

export const galleryImages: Array<GalleryImage> = [
  {
    id: 0,
    image: galleryAussieSmile,
    width: 3024,
    height: 4032,
    alt: "Smile you Aussie",
    aspectRatio: 0.75,
    name: "Cari",
    breed: Breed.AustralianShepherd,
  },
  {
    id: 1,
    image: galleryBathLab,
    width: 3024,
    height: 4032,
    alt: "Just a lab getting a bab",
    aspectRatio: 0.75,
    name: "",
    breed: Breed.Labrador,
  },
  {
    id: 2,
    image: galleryBella,
    width: 3024,
    height: 4032,
    alt: "The good Bella",
    aspectRatio: 0.75,
    name: "Bella",
    breed: Breed.Chihuahua,
  },
  {
    id: 3,
    image: galleryBruno,
    width: 2739,
    height: 2335,
    alt: "Bruno the Dino Cat",
    aspectRatio: 2739 / 2335,
    name: "Bruno",
    breed: Breed.Cat,
  },
  {
    id: 4,
    image: galleryCorg,
    width: 3024,
    height: 4032,
    alt: "Charlie the Corgi",
    aspectRatio: 0.75,
    name: "Charlie",
    breed: Breed.Corgi,
  },
  {
    id: 5,
    image: galleryCupcake,
    width: 3024,
    height: 4032,
    alt: "Sweetest Cupcake you can find",
    aspectRatio: 0.75,
    name: "Cupcake",
    breed: Breed.GoldenDoodle,
  },
  {
    id: 6,
    image: galleryDood,
    width: 3024,
    height: 4032,
    alt: "Hittin' three's for dayz",
    aspectRatio: 0.75,
    name: "Kobe",
    breed: Breed.GoldenDoodle,
  },
  {
    id: 7,
    image: galleryDoodWithSolo,
    width: 3024,
    height: 4032,
    alt: "Look out, behind you!",
    aspectRatio: 0.75,
    name: ["Kobe", "Solo"],
    breed: [Breed.GoldenDoodle, Breed.AustralianShepherd],
  },
  {
    id: 8,
    image: galleryDuke,
    width: 3024,
    height: 4032,
    alt: "The Duke of the Salon",
    aspectRatio: 0.75,
    name: "Duke",
    breed: Breed.GoldenDoodle,
  },
  {
    id: 9,
    image: galleryFeetTrim,
    width: 3024,
    height: 4032,
    alt: "Fixin' Feet",
    aspectRatio: 0.75,
    name: "",
    breed: Breed.None,
  },
  {
    id: 10,
    image: galleryFinn,
    width: 3024,
    height: 4032,
    alt: "Tiny Finn",
    aspectRatio: 0.75,
    name: "Finn",
    breed: Breed.AustralianShepherd,
  },
  {
    id: 11,
    image: galleryFoldy,
    width: 1284,
    height: 1320,
    alt: "Where'd your ears go, Snowy?",
    aspectRatio: 1284 / 1320,
    name: "Snowy",
    breed: [Breed.Cat, Breed.ScottishFold],
  },
  {
    id: 12,
    image: galleryFrodoAndBubba1,
    width: 4032,
    height: 3024,
    alt: "Shop dogs",
    aspectRatio: 4032 / 3024,
    name: ["Solo", "Bubba"],
    breed: [Breed.AustralianShepherd, Breed.Pug],
  },
  {
    id: 13,
    image: galleryFrodoAndBubba2,
    width: 3024,
    height: 4032,
    alt: "They own the place",
    aspectRatio: 0.75,
    name: "Solo,Bubba",
    breed: [Breed.AustralianShepherd, Breed.Pug],
  },
  {
    id: 14,
    image: galleryJade,
    width: 764,
    height: 1088,
    alt: "You've got me so Jaded",
    aspectRatio: 764 / 1088,
    name: "Jade",
    breed: Breed.AustralianShepherd,
  },
  {
    id: 15,
    image: galleryKody,
    width: 3024,
    height: 4032,
    alt: "Kody with a K",
    aspectRatio: 0.75,
    name: "Kody",
    breed: Breed.Cavachon,
  },
  {
    id: 16,
    image: galleryMaddoc,
    width: 3024,
    height: 4032,
    alt: "Maddoc, you big",
    aspectRatio: 0.75,
    name: "Maddoc",
    breed: Breed.GreatPyrenees,
  },
  {
    id: 17,
    image: galleryMazie,
    width: 3024,
    height: 4032,
    alt: "The aMAZIng Mazie",
    aspectRatio: 0.75,
    name: "Mazie",
    breed: Breed.GoldenDoodle,
  },
  {
    id: 18,
    image: galleryMustache,
    width: 2292,
    height: 2922,
    alt: "Sir, your mustache is great",
    aspectRatio: 1.0,
    name: "Halle",
    breed: Breed.Schnauzer,
  },
  {
    id: 19,
    image: galleryNailbiter,
    width: 3024,
    height: 4032,
    alt: "One dogs nails are Solo's dinner",
    aspectRatio: 0.75,
    name: ["Blaze", "Solo"],
    breed: [Breed.GoldenDoodle, Breed.AustralianShepherd],
  },
  {
    id: 20,
    image: galleryNorm,
    width: 3024,
    height: 4032,
    alt: "Smile you Aussie",
    aspectRatio: 0.75,
    name: "Just a NORMal GSD",
    breed: Breed.GermanShepherd,
  },
  {
    id: 21,
    image: galleryPhoebe,
    width: 3024,
    height: 4032,
    alt: "Phoebe Buffay Bananna Hammock",
    aspectRatio: 0.75,
    name: "Phoebe",
    breed: Breed.GoldenDoodle,
  },
  {
    id: 22,
    image: galleryPj,
    width: 3024,
    height: 4032,
    alt: "P(B&)J, smooth as butter",
    aspectRatio: 0.75,
    name: "Pj",
    breed: Breed.AussieDoodle,
  },
  {
    id: 23,
    image: galleryPolly,
    width: 1787,
    height: 2408,
    alt: "Don't worry, Polly got a cracker",
    aspectRatio: 1787 / 2408,
    name: "Polly",
    breed: Breed.LhasaApso,
  },
  {
    id: 24,
    image: galleryPood,
    width: 2016,
    height: 1512,
    alt: "Are you staring at my...",
    aspectRatio: 2016 / 1512,
    name: "",
    breed: Breed.StandardPoodle,
  },
  {
    id: 25,
    image: gallerySidney,
    width: 3024,
    height: 4032,
    alt: "I'll do a trick for a treat!",
    aspectRatio: 0.75,
    name: "Sidney",
    breed: Breed.MiniAussie,
  },
  {
    id: 26,
    image: gallerySolo,
    width: 3024,
    height: 4032,
    alt: "This is my chair.",
    aspectRatio: 0.75,
    name: "Solo",
    breed: Breed.AustralianShepherd,
  },
  {
    id: 27,
    image: gallerySoloMat,
    width: 3024,
    height: 4032,
    alt: "It's fine, you can bathe your dog. I'll just sit here.",
    aspectRatio: 0.75,
    name: "Solo",
    breed: Breed.AustralianShepherd,
  },
  {
    id: 28,
    image: galleryThed,
    width: 3024,
    height: 4032,
    alt: "I rock then roll around",
    aspectRatio: 0.75,
    name: "Thed",
    breed: Breed.GoldenDoodle,
  },
  {
    id: 29,
    image: galleryThreePugs,
    width: 3024,
    height: 4032,
    alt: "Three little pugs, Pitch by my doorstep, Singin' sweet barks, Of melodies pure and true, Sayin' This is my message to you-ou-ou",
    aspectRatio: 0.75,
    name: ["", "", ""],
    breed: [Breed.Pug, Breed.Pug, Breed.Pug],
  },

  {
    id: 30,
    image: galleryAbby,
    width: 3024,
    height: 4032,
    alt: "Abby is on a Road to beauty.",
    aspectRatio: 0.75,
    name: "Abby",
    breed: Breed.Shepherd,
  },
  {
    id: 31,
    image: galleryBiscuit,
    width: 3255,
    height: 2817,
    alt: "Little biddy Biscuit.",
    aspectRatio: 3255 / 2817,
    name: "Biscuit",
    breed: Breed.GoldenDoodle,
  },
  {
    id: 32,
    image: galleryJinx,
    width: 2490,
    height: 3107,
    alt: "Jinx, you owe me a Cavapoo",
    aspectRatio: 2490 / 3107,
    name: "Jinx",
    breed: Breed.Cavapoo,
  },
  {
    id: 33,
    image: galleryKai,
    width: 3024,
    height: 4032,
    alt: "Morkie",
    aspectRatio: 2490 / 3107,
    name: "This morkie doubles as my swiffer",
    breed: Breed.Morkie,
  },

  {
    id: 34,
    image: galleryHilaryAndZazu,
    width: 2589,
    height: 3118,
    alt: "",
    aspectRatio: 2589 / 3118,
    name: "Welcome, the royal advisor, Zazu!",
    breed: Breed.StandardPoodle,
  },
  {
    id: 35,
    image: galleryOzzy,
    width: 2142,
    height: 2557,
    alt: "Moma, I'm coming home... Clean!",
    aspectRatio: 2490 / 3107,
    name: "Ozzy",
    breed: Breed.Pomeranian,
  },
];

// const images = [
// ];
