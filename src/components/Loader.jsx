import {} from "../assets";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1 className="font-bold text-2xl mt-44 text-white">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
