import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from './../Shared/RightSideNav/RightSideNav';
import Navbar from './../Shared/Navbar/Navbar';
import { useState } from "react";
import { useEffect } from "react";
import NewsCard from "./NewsCard";


const News = () => {
    const {id} = useParams();
    const [news,setNews] = useState({});
    const aNews = useLoaderData();
    console.log(aNews);

    useEffect(()=>{
        const findNews = aNews?.find((data)=> data._id === id)
        setNews(findNews);
    },[id,aNews])

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="md:col-span-3">
                    <h2 className="text-xl font-semibold">Dragon News</h2>
                    <div>
                        <NewsCard news={news}></NewsCard>
                    </div>

                </div>
                <div>
                   <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;