import React from "react";
import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";
import { v4 as uuid } from "uuid";

const SearchPage = () => {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  if (searchResults.length === 0) {
    return <p>No results found.</p>;
  }
  
  const renderedResults = searchResults.map((result) => (
    <PackageListItem data={result} key={ `${result.name}-${uuid()}`} />
  ));
 
  return <div className="space-y-4 mt-4">{renderedResults}</div>;
};

export default SearchPage;
