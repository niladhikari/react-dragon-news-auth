import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaRegCalendarAlt } from "react-icons/fa";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold">All Category</h2>
      <div className="text-center mt-5 space-y-8">
        <h2 className="text-xl font-semibold rounded-md bg-[#E7E7E7] py-5 px-10">
          National News
        </h2>
        <div>
          {categories.map((category) => (
            <Link
              className="block ml-4 text-xl font-medium mb-7 text-[#9F9F9F]"
              key={category.id}
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <img src="https://i.ibb.co/gV0pmk9/1.png" alt="" />
        <h2 className="text-xl font-semibold mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex items-center gap-5 mt-5">
          <p>Sports</p>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt></FaRegCalendarAlt>
            <p className="">{moment().format("MMMM D, YYYY")}</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <img src="https://i.ibb.co/zhJtzxS/2.png" alt="" />
        <h2 className="text-xl font-semibold mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex items-center gap-5 mt-5">
          <p>Sports</p>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt></FaRegCalendarAlt>
            <p className="">{moment().format("MMMM D, YYYY")}</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <img src="https://i.ibb.co/mTbLYWQ/3.png" alt="" />
        <h2 className="text-xl font-semibold mt-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        <div className="flex items-center gap-5 mt-5">
          <p>Sports</p>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt></FaRegCalendarAlt>
            <p className="">{moment().format("MMMM D, YYYY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
