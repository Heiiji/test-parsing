import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from "./articlesSlice";
import api from "../../app/api";
import styled from 'styled-components'

const ArticleDiv = styled.div`
    display: inline-block;
    box-shadow: 0px 0px 3px gray;
    width: 200px;
    height: 300px;
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
    const article = useSelector((state) => state.articles.list.find(elem => elem.id === id));


    return(
    <ArticleDiv url={article.url}>
        <div id="illustration"></div>
        <p>{article.title}</p>
        <button id="buy">+</button>
    </ArticleDiv>
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