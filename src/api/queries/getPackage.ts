import { PackageDetails } from "../types/packageDetails";

export const getPackage = async (name: string): Promise<PackageDetails> => {
  const res = await fetch(`https://registry.npmjs.org/${name}`);
  const data: PackageDetails = await res.json();
  return data;
};
