import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export const searchPackages = async (
  query: string
): Promise<PackageSummary[]> => {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${query}`
  );
  const data: SearchResponse = await res.json();
  return data.objects.map(
    ({ package: { name, description, version, keywords } }) => {
      return {
        name,
        description,
        version,
        keywords
      };
    }
  );
};
