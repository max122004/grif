import style from './../styles/News.module.css';
import line from './../images/newsLine.svg';
import newImage from './../images/newsImage.svg';
import NewsGrif from './../images/NewsGrif.svg';
import NewsGerb from './../images/NewsGerb.svg';
import {useState, useEffect} from 'react';
import axios from 'axios';

const src = "http://127.0.0.1:8000/news/"

const NewBlock = () => {


    useEffect(() => {
        axios.get(src).then(data => {
            console.log(data);
        })
    }, [])
    return (
        <article className={style.newBlock}>
            <div className={style.ArticleText}>
                <p>Придумали, как сделать лампы накаливания более энергоэффективными и долговечными</p>
                <i>5 мая 2023 г.</i>
            </div>
            <img src={newImage}/>
        </article>
    )
}

const News = () => {
    return (
        <section className={style.NewsSection}>
            <img src={NewsGerb}/>
            <div className={style.news}>
                <p className={style.text}>НОВОСТИ</p>
                <img src={line}/>
                <div>
                    <NewBlock />
                    <NewBlock />
                    <NewBlock />
                    <NewBlock />
                </div>
            </div>
            <img src={NewsGrif}/>
        </section>
    )
}

export default News;