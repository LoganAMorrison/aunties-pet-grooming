import React from "react";
import Head from "next/head";
import { siteMetadata } from "../utils/metadata";

interface HeaderProps extends React.ComponentProps<"head"> {
  title?: string;
  description?: string;
}

const KEYWORDS = [
  "Pet Grooming",
  "Dog Grooming",
  "Cat Grooming",
  "Pet Bathing",
  "Dog Bathing",
  "Nail Trim",
  "Pet Nail Trim",
  "Dog Nail Trim",
  "Cat Nail Trim",
  "Pet Haircut",
  "Dog Haircut",
  "Cat Haircut",
  "Santa Cruz",
  "California",
];

const SiteHeader: React.FC<HeaderProps> = (props) => {
  const title = props.title || siteMetadata.title;
  const description = props.description || siteMetadata.description;
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content={description} />
      <meta name="type" content="website" />
      <meta name="title" content={title} key="title" />
      <meta name="site_name" content={siteMetadata.siteName} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteMetadata.siteName} />

      <meta property="twitter:type" content="website" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:site_name" content={siteMetadata.siteName} />

      <link rel="apple-touch-icon" href="../../public/apple-touch-icon.png" />

      <meta name="keywords" content={KEYWORDS.join(",")} />

      {props.children}
    </Head>
  );
};

export default SiteHeader;
