import React, { Component } from 'react';
import { Link } from 'react-router';


const img1 = require('./1.png')
const img2 = require('./2.png')
const img3 = require('./3.png')
const img_ask = require('./ask.png')
const img_call = require('./call.png')

/* component styles */
import { styles } from './styles.scss';
export class Feature extends Component {
    render() {
        return (
            <div>
                <div className="call">
                    <div className="text-call">
                        <ul>
                            <li>点名</li>
                            <li> 查询</li>
                        </ul>
                    </div>
                    <div className="img-call">
                        <img src={img_call}/>
                    </div>
                </div>
                <div className="ask">
                    <div className="text-ask">
                        <ul>
                            <li>我要</li>
                            <li> 请假</li>
                        </ul>
                    </div>
                    <div className="img-ask">
                        <img src={img_ask}/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Show extends Component {
    render() {
        return (
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="https://img.alicdn.com/tps/TB1D_IOLFXXXXXrXXXXXXXXXXXX-520-280.jpg" alt="ad1"/>
                        </div>

                        <div className="item">
                            <img src="https://img.alicdn.com/tps/TB1r.55LFXXXXcNXXXXXXXXXXXX-520-280.jpg" alt="ad2"/>
                        </div>

                    </div>

                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export class Activity extends Component {
    render() {
        return (
            <div className="activity">
                商家活动
            </div>
        )

    }
}

export class Acticle extends Component {
    state = {
        display: 'incline',
        opacity: 1.0
    };

    handleClick(event) {
        if (this.state.display === 'incline') {
            //this.timer = setInterval(function () {
            //    var opacity = this.state.opacity;
            //    opacity -= .05;
            //    this.setState({
            //        opacity: opacity
            //    });
            //}.bind(this), 1000)
            //this.setState({opacity: 0.5})
            this.setState({display: 'none'})
        }

        event.stopPropagation();
        event.preventDefault();
    }


    render() {
        return (
            <div style={this.state}>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="row">
                    <div className="container">
                        <div className="col-xs-4">
                            <div className="pic">
                                <img src={img1}/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="pic2">
                                <img src={img2}/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="pic3">
                                <img src={img3}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="detail">
                            {this.props.source} {this.props.comments}条回复 {this.props.time}分钟前
                        </div>
                        <div className="delete" onClick={this.handleClick}>
                            <botton className="glyphicon glyphicon-remove-circle"
                                    onClick={this.handleClick.bind(this)}></botton>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export class CallRoll extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="parent">
                            <Feature/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <Show/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <Activity/>
                    </div>
                </div>
                <div>
                    <Acticle source="极客世界" comments="140" time="40" title="微软又出新神器 windows phone要逆天"/>
                </div>
                <div>
                    <Acticle source="伯乐在线" comments="28" time="3" title="高效程序员的33个习惯"/>
                </div>

            </div>
        );
    }
}
