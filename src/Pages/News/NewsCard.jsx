import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {image_url,title,details} = news;
    return (
        <div>
            <div className="p-8 border-2 rounded-lg m-5">
                <img src={image_url} alt="" />
                <h2 className="mt-5 mb-2 text-2xl font-bold">{title}</h2>
                <p className="text-[#706F6F] mb-8">{details}</p>
                <Link>
                <button className="btn btn-error text-white">All news in this category</button>
                </Link>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object,
  };

export default NewsCard;