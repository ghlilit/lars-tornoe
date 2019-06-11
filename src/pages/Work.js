import Header from '../components/Header'
import { works } from '../allWorks'
import React, { Component } from 'react'
import left from './leftArrow.png'
import right from './rightArrow.png'

export default class Work extends Component {

    state = {
        activePic: "",
        work: {}
    }
    handleClick = () => {
        this.props.history.push("/")
    }
    handleImg = (activePic) => {
        this.setState({activePic})
    }
    componentDidMount(){
        const { params } = this.props.match;
        const work = works.filter(work => work.id === params.id);
        this.setState({ activePic: work[0].morePics[0], work: work[0]})
    }
    handleSlide = (param) => {
        let newPic;
        const { activePic, work } = this.state;
        const idx = work.morePics.findIndex(pic => pic == activePic);
        if(idx === 0 && param === -1){
            newPic = work.morePics[work.morePics.length-1]
        }
        else if(idx=== work.morePics.length-1 && param === 1){
            newPic = work.morePics[0]
        }
        else{
            newPic = work.morePics[idx + param];
        }
        this.setState({activePic: newPic})
    }
    
    render() {
        const { activePic, work } = this.state;
        const {name, description, producer, designer, morePics} = work;
        console.log(morePics);
        return (
            <div className="home-wrapper">
                <Header />
                <div className="img-arw">
                    <span className="hover-left" onClick={()=>this.handleSlide(-1)}>
                        <img className="arw arw-left" src={left}/>
                    </span>
                    <img src={activePic}/>
                    <span className="hover-right" onClick={()=>this.handleSlide(+1)}>
                        <img className="arw arw-right" src={right}/>
                    </span>
                </div>
                <div className="photo-desc">
                    <div>
                        <div className="title">{name}</div>
                        <div className="desc">{description}</div>
                    </div>
                    <div>
                        <div className="title">Producer</div>
                        <div className="small-col">{producer}</div>
                    </div>
                    <div>
                        <div className="title">Designer</div>
                        <div className="small-col">{designer}</div>
                    </div>
                    <div>
                        <div className="title">Gallery</div>
                        <div className="gallery-small">
                            {morePics && morePics.map(pic => 
                                <div className="anchor">
                                    <img src={pic}/>
                                <span onClick={() => this.handleImg(pic)} class="hover"></span>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="button" onClick={this.handleClick}>Back to Overview</div>
            </div>
        )
    }
}

