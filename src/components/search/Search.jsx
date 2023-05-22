import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "45cfe3ca8dmshebed28c54da6d16p13339fjsna832a74d2963",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

const Search = () => {
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);

  useEffect(() => {
    fetchMe();
  }, [endPoint]);

  const fetchMe = () => {
    fetch(`https://imdb-top-100-movies.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
      .then((response) => {
        console.log(response.json());
      })

      .then((data) => {
        setContainer(data);
      })

      .catch((err) => console.error(err));
  };

  const onChangeHandler = (e) => {
    endPoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div class="w-[50%] mx-auto mt-20">
      <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <input
            type="text"
            id='default-search"'
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            value={endPoint}
            onChange={() => onChangeHandler}
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={submitHandler}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
