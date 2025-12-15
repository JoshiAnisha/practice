// import axios from "axios";
import { getRanran } from "../services/GetService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "../components/UI/card";
import { Button } from "./button";

export const Random = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [page, setPage] = useState();
  // const [limit, setLimit] = useState();
  // const [sortBy, setSortBy] = useState("");
  // const [sortOrder, setSortOrder] = useState("");

  const getRandom = async () => {
    try {
      setLoading(true);
      const res = await getRanran(); //if we are not calling function use: axios.get(API);
      // console.log(res.data); //(jastai header, data)res-> response object returned by axios.

      const fetchedData = Array.isArray(res.data) ? res.data : res.data.photos;
      setData(fetchedData);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getRandom();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // photos?page=2&limit=20&sort_by=file_size&sort_order=desc

  return (
    <>
      {/* <section area-label="filter">
        <h1>Filter Photo Search</h1>
        <input
          type="number"
          placeholder="page"
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className="m-10 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="m-10 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="sort by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="m-10 p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="sort order"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="m-10 p-2 border border-gray-300 rounded-md"
        /> */}
      {/* <button onClick={getRandom}>ok</button>
      </section> */}
      <div className="p-10">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[150px]">
          {data.map((curElem, index) => (
            <div
              key={curElem.id}
              className={
                index === 0
                  ? "col-span-2 row-span-3"
                  : index === 3
                  ? "col-span-1 row-span-3"
                  : index === 6
                  ? "col-span-2 row-span-2"
                  : "col-span-1"
              }
            >
              <Card randomData={curElem} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="/">
        <button className="bg-green-700 text-white border border-white px-4 py-2 rounded-full hover:bg-green-600">Go to home</button>
        </Link>
        <br></br>
        <Link to="/view">
        <button className="bg-green-700 text-white border border-white px-4 py-2 rounded-full hover:bg-green-600">Go to View Page</button>
        </Link>
      </div>
    </>
  );
};
