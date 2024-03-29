import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchHandler = () => {
    navigate("/search?keyword=" + keyword);
  };
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          onBlur={searchHandler}
          className="form-control"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn" onClick={searchHandler}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
