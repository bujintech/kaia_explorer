"use client";

function Search({ searchParams: { keyword } }: { searchParams: { keyword: string } }) {
  console.log(keyword);
  return <>search page keyword: {keyword}</>;
}

export default Search;
