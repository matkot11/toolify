import { createClient } from "@sanity/client";

export default createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-08",
  token: import.meta.env.VITE_SANITY_TOKEN
});
