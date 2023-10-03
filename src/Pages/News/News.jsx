import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default News;