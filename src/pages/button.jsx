import { Link } from "react-router";

export function Button({ name = "Go to About Page" }) {
  return (
    <>
      <button className="border border-blue-300 bg-blue-400  text-white px-4 py-2 rounded-full hover:bg-blue-500 hover:cursor-pointer">
        <Link to="/home">{name}</Link>
        <Link to="/random"></Link>
        <Link to="/view"></Link>
      </button>
    </>
  );
}
