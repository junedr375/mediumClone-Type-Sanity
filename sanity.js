import { createCurrentUserHook, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

//Set up the client for fetching data from Sanity in getProps page functions
export const sanityClient = createClient(config);

//Setting up the image url builder for the sanity client

// const builder = imageUrlBuilder(san);

// export function urlFor(source) {
//   return builder.image(source);
// }
export const urlFor = (source) =>
  createImageUrlBuilder(sanityClient).image(source);

//Setting up the current user hook for the sanity client to get the current user
export const currentUser = createCurrentUserHook(sanityClient);
