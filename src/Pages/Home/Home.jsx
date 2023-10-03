import FontNews from "../Shared/FontNews/FontNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from './../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './../Shared/RightSideNav/RightSideNav';
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div className="px-3 md:px-0">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid  md:grid-cols-4 gap-6 ">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <FontNews></FontNews>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;