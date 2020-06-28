import React, { useState } from 'react';
import { ArticleList } from "../features/article/Article";
import { CartIcon } from "../features/cart/Cart";
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from "../features/article/articlesSlice";

function Home() {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles);

    return (
        <div className="home">
            <CartIcon />
            <ArticleList />
            {
                articles.page > 0 && <button className="btn" onClick={() => dispatch(setPage(articles.page - 1))}>prev</button>
            }
            {`${articles.page * articles.range} - ${articles.range + (articles.page * articles.range)}`}
            <button className="btn" onClick={() => dispatch(setPage(articles.page + 1))}>next</button>
        </div>
    );
}

export default Home;