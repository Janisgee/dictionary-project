import react, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition.`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word ..."
          autoFocus={true}
          onChange={handleKeyWordChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
