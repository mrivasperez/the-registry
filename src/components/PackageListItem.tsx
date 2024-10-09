import React from "react";
import { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

interface PackageListItemProps {
  data: PackageSummary;
}

const PackageListItem = ({ data }: PackageListItemProps) => {
  const renderedKeywords = (data.keywords || []).map((keyword) => (
    <div
      key={keyword}
      className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
    >
      {keyword}
    </div>
  ));

  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${data.name}`}>{data.name}</Link>
        <p className="text-sm text-gray-500">{data.description}</p>
        <div className="flex gap-1">{renderedKeywords}</div>
      </div>
      <div className="mr-6">
        <Link
          to={`/packages/${data.name}`}
          className="py-2 px-3 rounded bg-black text-white text-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default PackageListItem;
