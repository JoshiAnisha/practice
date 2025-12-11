// import axios from "axios";
import { getRanran } from "../services/GetService";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../components/UI/card";

export const Random = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  // console.log({ data });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getRandom();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
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
  );
};
