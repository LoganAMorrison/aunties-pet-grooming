import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { type NextPage } from "next";

import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/pro-solid-svg-icons";

import { galleryImages, Breed } from "../utils/images";
import SiteHeader from "../components/head";
import { Footer, InfoFooter } from "../components/footer";
import NavBar from "../components/navbar";
import { LogoOutline } from "../components/logos/outline";

const breeds = [
  Breed.AustralianShepherd,
  Breed.AussieDoodle,
  Breed.Cat,
  Breed.Corgi,
  Breed.Chihuahua,
  Breed.Cavachon,
  Breed.Cavapoo,
  Breed.GoldenDoodle,
  Breed.GermanShepherd,
  Breed.GreatPyrenees,
  Breed.Labrador,
  Breed.LhasaApso,
  Breed.MiniAussie,
  Breed.Morkie,
  Breed.Pug,
  Breed.Pomeranian,
  Breed.ScottishFold,
  Breed.Schnauzer,
  Breed.Shepherd,
  Breed.StandardPoodle,
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Hero = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid h-fit  grid-cols-1 bg-white pb-3 md:grid-cols-2">
        <div className="col-span-1 flex justify-center text-4xl text-white md:my-auto md:text-5xl lg:text-7xl">
          <div className="flex flex-col">
            {/* ===== */}
            <div className="wx-auto flex justify-center py-8">
              <Link href="/" aria-label="Navigate to Aunties Pet Grooming home">
                <LogoOutline
                  fill="#059595"
                  backgroundColor="#fff"
                  className="w-52"
                  aria-label="Aunties Pet Grooming LLC Logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto my-auto grid h-full grid-cols-1  content-around py-3">
          <div className="text-center font-serif text-7xl font-extralight text-purple-600">
            Gallery
          </div>
          <div className="text-center font-sans text-xl text-slate-500">
            Browse photos of some of the many friends who have visited our
            salon. We think you'll{" "}
            <span>
              <FontAwesomeIcon icon={faHeart} className="text-rose-500" />
            </span>{" "}
            what you see.
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery: NextPage = () => {
  const [breedName, setBreed] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof breedName>) => {
    const {
      target: { value },
    } = event;
    setBreed(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const filterBreeds = (
    name: Breed | Breed[],
    selectedNames: typeof breedName
  ) => {
    if (selectedNames.length == 0) {
      return true;
    }
    if (Array.isArray(name)) {
      return name.reduce(
        (value, currentValue) =>
          value || !(selectedNames.indexOf(currentValue) === -1),
        false
      );
    } else {
      return !(selectedNames.indexOf(name) === -1);
    }
  };

  return (
    <>
      <SiteHeader
        title="Aunties Pet Grooming Gallery"
        description="Gallery of dogs and cats groomed at Aunties Pet Gromming."
      />
      <div className="w-full bg-white pb-3">
        <header className="sticky top-0 z-50">
          <NavBar />
        </header>

        <Hero />

        <div className="mx-auto my-3 grid max-w-4xl grid-cols-1 gap-3 px-3 py-3 lg:grid-cols-2">
          <div className="text-center text-slate-500 lg:order-last">
            Want to see a specific breed? Use the filter to select all the
            breeds you'd like to see.
          </div>
          <div className="flex justify-center">
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="breed-select-label">Apply Filter</InputLabel>
              <Select
                labelId="breed-select-label"
                id="breed-select"
                multiple
                value={breedName}
                input={<OutlinedInput label="Filter Breed" />}
                renderValue={(selected) => selected.join(", ")}
                onChange={handleChange}
                MenuProps={MenuProps}
              >
                {breeds.map((name, index) => (
                  <MenuItem key={index} value={name}>
                    <Checkbox checked={breedName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="my-8 mx-auto grid max-w-4xl grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
            {galleryImages
              .reverse()
              .filter((image) => filterBreeds(image.breed, breedName))
              .map((image, key) => {
                return (
                  <div
                    key={key}
                    className="my-auto flex justify-center align-middle"
                  >
                    <Image
                      src={image.image}
                      alt={image.alt}
                      height={500 / image.aspectRatio}
                      width={500}
                      priority={key < 3 ? true : false}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <InfoFooter />
        <Footer />
      </div>
    </>
  );
};

export default Gallery;

// export const Head: HeadFC = () => <SEO />;
