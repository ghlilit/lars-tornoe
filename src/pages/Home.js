import React, { Component } from 'react'
import Header from '../components/Header'
import { works } from '../allWorks'
import '../index.css'

export default class Home extends Component {

    handleClick = (id) => {
        let link = `/work/${id}`
        this.props.history.push(link)
    }
    render() {
        return (
            <div className="home-wrapper">
                <Header />
                <div className="gallery">
                {works.map(work => 
                        <div className={work.className} onClick={() => this.handleClick(work.id)}>
                            <img src={work.source}/>
                            <span> {work.name} </span>
                        </div>
                    )}
                </div>
                <div className="footer">
                    <strong>Lars Tornøe</strong> Kvitsøygata 10A, 4014 Stavanger, Norway
                </div>
            </div>
        )
    }
}
