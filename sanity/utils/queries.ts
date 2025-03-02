import { groq } from "next-sanity";
import { client } from "../lib/client";

const getPostForHomePageListingQuery = groq`
*[_type == "post"] | order(_createdAt desc)[0..2] {
  title,
  slug,
  mainImage,
  body
}
`;

const getPostQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  slug,
  mainImage,
  body
}
`;

export const getPostForHomePageListing = async () => {
  return await client.fetch(getPostForHomePageListingQuery);
};

export const getPost = async (slug: string) => {
  return await client.fetch(getPostQuery, { slug });
};
