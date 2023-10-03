import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="grid justify-center items-center mt-12 mb-8">
        <img src="https://i.ibb.co/fQDTbVG/logo.png" alt="" />
        <p className="text-[18px] text-center mt-5">
          Journalism Without Fear or Favour
        </p>
        <p className="text-xl text-center mt-2">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
