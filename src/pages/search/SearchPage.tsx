import React from "react";
import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

const SearchPage = () => {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  const renderedResults = searchResults.map((result) => (
    <PackageListItem data={result} key={result.name} />
  ));
  return <div className="space-y-4 mt-4">{renderedResults}</div>;
};

export default SearchPage;
