import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from "./articlesSlice";
import { addOne } from "../cart/cartSlice";
import api from "../../app/api";
import styled from 'styled-components'

const ArticleDiv = styled.div`
    display: inline-block;
    box-shadow: 0px 0px 3px gray;
    width: 200px;
    height: 320px;
    overflow: hidden;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
    #illustration {
        display: block;
        height: 200px;
        background-image: url(${props => props.url});
        background-size: cover
    }
    #buy {
        cursor: pointer;
    }
`

export function Article({ id }) {
    const dispatch = useDispatch();
    const article = useSelector((state) => state.articles.list.find(elem => elem.id === id));


    return(
    <ArticleDiv onClick={() => dispatch(addOne(article))} url={article.url}>
        <div id="illustration"></div>
        <p>{article.title}</p>
        <button id="buy">+</button>
    </ArticleDiv>
    );
}

export function ArticleList({ range, page }) {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles);
    
    useEffect(() => {
        if (!articles.list) {
            api.get(`/photos?_page=${articles.page}&_limit=${articles.range}`).then(res => {
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