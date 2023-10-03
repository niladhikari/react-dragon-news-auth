import PropTypes from "prop-types";
import { BsShare, BsBookmark, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Story = ({ story }) => {
  const { _id, rating, total_view, title, author, thumbnail_url, details } =
    story;
  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#F3F3F3] mb-3 p-5">
        <div className="flex items-center gap-4">
          <img className="h-10 w-10 rounded-full" src={author.img} alt="" />
          <div>
            <h2>{author?.name}</h2>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <BsShare></BsShare>
          <BsBookmark></BsBookmark>
        </div>
      </div>

      <div className="px-5">
        <h2 className=" text-xl font-bold mb-5">{title}</h2>
        <img className="w-full h-96  mb-8" src={thumbnail_url} alt="" />
        {details.length > 200 ? (
          <p>{details.slice(0, 200)}</p>
        ) : (
          <p>{details}</p>
        )}
        <Link to={`/news/${_id}`}>
          <p className="text-[#FF8C47] font-bold mb-5">Read More...</p>
        </Link>
        <hr />
        <div className="flex items-center justify-between mt-5 mb-8">
          <div className="flex items-center gap-2">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.788 3.21006C11.236 2.13306 12.764 2.13306 13.212 3.21006L15.294 8.21706L20.698 8.65006C21.862 8.74306 22.334 10.1951 21.447 10.9551L17.33 14.4821L18.587 19.7551C18.858 20.8911 17.623 21.7881 16.627 21.1801L12 18.3541L7.373 21.1801C6.377 21.7881 5.142 20.8901 5.413 19.7551L6.67 14.4821L2.553 10.9551C1.666 10.1951 2.138 8.74306 3.302 8.65006L8.706 8.21706L10.788 3.21106V3.21006Z"
                  fill="#FF8C47"
                />
              </svg>
            </div>
            {rating.number}
          </div>

          <div className="flex items-center gap-2">
            <BsEyeFill></BsEyeFill>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.object,
};

export default Story;
