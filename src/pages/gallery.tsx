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

const Home: NextPage = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="col-span-1 md:col-span-2 ">
            <div className="flex justify-center align-middle">
              <Link href="/">
                <LogoOutline
                  fill="#059595"
                  backgroundColor="#fff"
                  className="w-52"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto my-3 grid max-w-4xl grid-cols-2 gap-3 px-3 py-3">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="breed-select-label">Filter Breed</InputLabel>
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

export default Home;

// export const Head: HeadFC = () => <SEO />;
