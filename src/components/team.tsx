import React from "react";
import Image from "next/image";
// import Stack from "@mui/material/Stack";
// import Container from "@mui/material/Container";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

import MaddiePortrait from "../../public/images/maddie_port.png";
import PennyPortrait from "../../public/images/penny_port.png";

interface TeamMemberProps
  extends Omit<React.ComponentProps<"div">, "className" | "children"> {
  name: string;
  image: React.ReactNode;
  bio: string;
  title: string;
}

// const TeamMember: React.FC<TeamMemberProps> = ({ name, image, bio }) => {
//   return (
//     <div className="grid grid-rows-2 md:grid-cols-2">
//       <div className="row-span-1 md:col-span-1">{image}</div>
//       <div className="row-span-1 md:col-span-1">
//         <h1 className="text-slate-800">{name}</h1>
//         <p className="text-slate-500">{bio}</p>
//       </div>
//     </div>
//   );
// };

const MaddieBrooks: TeamMemberProps = {
  name: "Maddie Brooks",
  title: "Co-Founder",
  bio: `Maddie has 10 years of grooming experience under her belt. She attended
  a grooming academy in 2012 in Washington State. Although born and raised in
  the Pacific Northwest, Maddie has resided in Santa Cruz with her husband since
  2015. She enjoys working with dogs of all sizes and temperaments and is
  particularly interested in large-breed dogs with behavioral issues.`,
  image: (
    <Image
      src={MaddiePortrait}
      alt="Madelyn Brooks"
      placeholder="blur"
      width="400"
      height="400"
    />
  ),
};

const PennyBryant: TeamMemberProps = {
  name: "Penny Bryant",
  title: "Co-Founder",
  bio: "Penny has been grooming since 1992, and her interest is in creating a compassionate relationship with the animals and their people, which grows over time. She welcomes and is highly skilled with working with special needs and “difficult” pets as well as senior pets. She also grooms cats! Penny lives in the Santa Cruz mountains with her family, including a two-legged child, 2 four-legged ( a pug and a puggle) and her very patient husband. She loves reading, sewing and yoga.",
  image: (
    <Image
      src={PennyPortrait}
      alt="Penny Bryan"
      placeholder="blur"
      width="400"
      height="400"
    />
  ),
};

// const teamMembers: TeamMemberProps[] = [MaddieBrooks];
const teamMembers: TeamMemberProps[] = [MaddieBrooks, PennyBryant];

// type TeamProps = Omit<React.ComponentProps<"div">, "className" | "children">;

export const Team = () => {
  return (
    <div className="w-full bg-slate-900 py-8" id="about">
      <div className="mx-auto max-w-lg">
        <h1 className="mx-auto flex justify-center pb-8 text-5xl text-slate-200">
          Meet the Family
        </h1>
        <p className="text-md mx-auto pb-3 text-center font-sans text-slate-100">
          We aunties are gentle and caring groomers, dedicated to providing
          high-quality grooms and exceptional customer service.
        </p>
        <p className="text-md mx-auto pb-8 text-center font-serif italic text-cyan-400">
          To us, you and your best friend are part of the family.
        </p>
      </div>
      <div className="flex justify-center space-x-3">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
          {teamMembers.map((member, key) => {
            return (
              <div
                className="max-h-md flex max-w-md flex-col space-x-3 pb-8"
                key={key}
              >
                <div className="row-span-1 mx-auto overflow-hidden rounded-2xl">
                  {member.image}
                </div>
                <div className="row-span-1 px-3">
                  <h1 className="py-2 text-3xl text-slate-100">
                    {member.name}
                  </h1>
                  <h2 className="py-2 text-xl text-cyan-400">{member.title}</h2>
                  <p className="text-slate-200">{member.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// export const Team: React.FC<TeamProps> = (props) => {
//   return (
//     <Container maxWidth="md">
//       <Stack direction="row" spacing={2}>
//         {teamMembers.map((member, key) => {
//           return (
//             <Card key={key} sx={{ maxWidth: "sm" }}>
//               <CardContent>
//                 <Typography variant="h3">{member.name}</Typography>
//                 <CardMedia>{member.image}</CardMedia>
//                 <Typography variant="body2">{member.bio}</Typography>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </Stack>
//     </Container>
//   );
// };
