import React from 'react';
import { ArticleList } from "../features/article/Article";
import { CartIcon } from "../features/cart/Cart";

function Home() {
    return (
        <div className="home">
            <CartIcon />
            <ArticleList range={[0, 15]} />
        </div>
    );
}

export default Home;