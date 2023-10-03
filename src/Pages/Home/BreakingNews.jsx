import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center h-20 bg-[#F3F3F3] px-4 mb-6">
      <button className="btn btn-error">Breaking News</button>
      <Marquee className="text-sm md:text-base font-semibold" speed={100} pauseOnHover={true}>
        <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some
        text....</Link>
        <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some
        text....</Link>
        <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some
        text....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
