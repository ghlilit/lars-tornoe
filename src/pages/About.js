import React, { Component } from 'react'
import Header from '../components/Header'
import Tornoe from './tornoe.jpg'
import '../index.css'

export default class About extends Component {
    render() {
        return (
            <div className="news-about-wrapper">
                <Header />
                <div className="about">
                    <img src={Tornoe}/>
                    <div className="info">
                        <div>
                            <p>Lars Tornøe is a Norwegian design studio devoted to furniture design and related fields of product design, working with various clients across Northern Europe.</p>
                            <p>Tornøe graduated from the University of Bergen in 2006.</p>
                            <p>Tornøe’s work has been shown in numerous exhibitions all over the world, London, Stockholm, Milan, Cologne, Berlin, Copenhagen, Seoul, New York etc. and is used as part of the official promotion of Norwegian design. Tornøe has received several awards such as the Award for Design Excellence by the Norwegian Design Council, Red Dot Award and Designer of The Year by Bo Bedre Magazine.</p>     
                        </div>
                        <div className="contacts">
                            <div>
                                <h2>Address</h2>
                                <p>Kvitsøygata 10A 4014 Stavanger Norway</p>
                            </div>
                            <div>
                                <h2>Email</h2>
                                <p>hello@larstornoe.com</p>
                            </div>
                            <div>
                                <h2>Phone</h2>
                                <p>+47 90 88 77 61</p>
                            </div>
                            <div>
                                <h2>Facebook</h2>
                                <p>Visit public profile</p>
                            </div>
                            <div>
                                <h2>Newsletter</h2>
                                <p>Sign up here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
