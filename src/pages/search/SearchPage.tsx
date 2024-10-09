import React from "react";
import { useLoaderData } from "react-router-dom";

const SearchPage = () => {
  const data = useLoaderData();

  console.log(data);
  return <div>SearchPage</div>;
};

export default SearchPage;
