import React, { Component } from 'react'
import Header from '../components/Header'
import '../index.css'
import NewsItem from '../components/NewsItem'
import { news } from '../allNews'
import left from './leftArrow.png'
import right from './rightArrow.png'

export default class News extends Component {
    state = {
        start: 0
    }
    handleClick = (num) =>{
        this.setState((state, props) => ({
            start: state.start + num
          }));
    }
    render() {
        let { start } = this.state;
        return (
            <div className="news-about-wrapper">
                <Header />
                <div className="news-grid">
                    {news.slice(start, start + 6).map((news, index) => <NewsItem {...news} id={start + index+1}/>)}
                </div>
                {start!==0 &&
                    <div className="newer" onClick = {() => this.handleClick(-6)}>
                        <img src = {left}/>
                        <span>Newer</span>
                    </div>}
                {news.length > start+6 &&
                    <div className="older" onClick = {() => this.handleClick(6)}>
                        <span>Older</span>
                        <img src = {right}/>
                    </div>}
            </div>
        )
    }
}
