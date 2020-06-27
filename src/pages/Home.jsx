import React from 'react';
import { ArticleList } from "../features/article/Article";
import { Cart } from "../features/cart/Cart";

function Home() {
    return (
        <div className="home">
            <Cart />
            <ArticleList range={[0, 15]} />
        </div>
    );
}

export default Home;