import { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

interface PackageListItemProps {
  data: PackageSummary;
}

const PackageListItem = ({ data }: PackageListItemProps) => {
  const renderedKeywords = (data.keywords || []).map((keyword) => (
    <div
      key={keyword}
      className="block py-0.5 px-1 text-xs bg-blue-100 rounded h-full w-full whitespace-nowrap"
    >
      {keyword}
    </div>
  ));

  return (
    <div className="border p-4 rounded flex justify-between items-center  w-full hover:shadow">
      <div className="w-2/3">
        <Link to={`/packages/${data.name}`}>{data.name}</Link>
        <p className="text-sm text-gray-500 py-2">{data.description}</p>
        <div className="flex gap-1 overflow-auto">
          <i className="bi bi-key"></i>
          {renderedKeywords}
        </div>
      </div>
      <Link
        to={`/packages/${data.name}`}
        className="py-2 px-3 rounded bg-blue-800 text-white flex text-sm"
      >
        View <i className="bi bi-arrow-right ms-1"></i>
      </Link>
    </div>
  );
};

export default PackageListItem;
