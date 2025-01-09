import { Form } from "react-router-dom";
import { useState } from "react";

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

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // prevent the input value from submitting if it is empty
    if (event.key === "Enter" && !inputValue.trim()) {
      event.preventDefault();
      return;
    }
  }

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
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </Form>
  );
};

export default SearchInput;
