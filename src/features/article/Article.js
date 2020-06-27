import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from "./articlesSlice";
import api from "../../app/api";

export function Article({ id }) {
    const article = useSelector((state) => state.articles.list.find(elem => elem.id === id));
    return(
    <div>{JSON.stringify(article)}</div>
    );
}

export function ArticleList({ range }) {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles);
    
    useEffect(() => {
        if (!articles.list || (range[0] + range[1]) !== (articles.range[0] + articles.range[1])) {
            api.get(`/photos?_page=${range[0]}&_limit=${range[1]}`).then(res => {
                dispatch(setList(res.data))
            })
        }
    });

    return(
        <div className="articles-list">
            {
                articles.list?.map(article => <Article key={article.id} id={article.id} />)
            }
        </div>
    );
}