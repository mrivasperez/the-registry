import { searchPackages } from "../../api/queries/searchPackage";

export const searchLoader = async ({ request }: { request: Request }) => {
  // parse search term from url
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  if (!query) {
    throw new Error("Search query must be provided.");
  }

  const results = await searchPackages(query);

  return { searchResults: results };
};
