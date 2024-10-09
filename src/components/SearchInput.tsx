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
    <Form action="/search">
      <input type="text" name="query" />
    </Form>
  );
};

export default SearchInput;
