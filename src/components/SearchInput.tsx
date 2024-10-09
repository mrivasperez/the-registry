import { Form } from "react-router-dom";

const SearchInput = () => {
  // const [query, setQuery] = useState("");
  // const navigate = useNavigate();
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   navigate(`/search?term=${query}`);
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input value={query} onChange={(e) => setQuery(e.target.value)} />
  //   </form>
  // );
  return (
    <Form
      action="/search"
      className="flex border rounded px-2 py-1 my-2 bg-white border-blue-200 w-4/12"
    >
      <i className="bi bi-search me-2"></i>
      <input
        type="text"
        name="query"
        placeholder="Search..."
        className="w-full"
      />
    </Form>
  );
};

export default SearchInput;
