import React from 'react';
import { ArticleList } from "../features/article/Article";

function Home() {
    return (
        <div className="home">
            <ArticleList range={[0, 15]} />
        </div>
    );
}

export default Home;