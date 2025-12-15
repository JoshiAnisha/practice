import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getViewView } from "../services/GetService";
import { Card1 } from "../components/UI/card1";
import { Button } from "./button";

export const View = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getView = async () => {
    try {
      setLoading(true);
      const res = await getViewView();
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getView();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className =" border-l-4 border-green-900">
      {data.map((curlElem) => (
        <div
          key={curlElem.id}
          className="m-4 p-4 border border-green-100 font-serif text-lg leading-relaxed rounded-lg shadow-md hover:bg-gray-100"
        >
          <Card1 viewData={curlElem} />
        </div>
      ))}
      <Link to="/">
      <button className="bg-green-700 text-white border border-white px-4 py-2 rounded-full hover:bg-green-600"> Go to home</button>
      </Link>
    </div>
  );
};
