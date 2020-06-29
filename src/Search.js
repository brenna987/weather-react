import React from "react";

export default function Search() {
  return (
    <div>
      <form>
        <input type="search" autoComplete="off" placeholder="Enter a city" />
        <button type="submit" className="btn btn-primary shadow-sm">
          Search
        </button>
      </form>
    </div>
  );
}
