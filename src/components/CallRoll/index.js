import React, { Component ,PropTypes } from 'react';
import { Link } from 'react-router';
import * as actionCreators from 'actions/items';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactPullToRefresh from 'react-pull-to-refresh';


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
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
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

export class Article extends Component {
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


  renderTime() {
    console.log( this.props.img );

    let tmp = new Date(this.props.time);
    const limitTime = 3600 * 24;
    const dis = Date.now() - tmp.getTime();
    let strTime = "";
    if (dis <= limitTime)
      if (dis < 3600)
        strTime = dis/60 +"分钟前";
      else
        strTime = dis/3600 + "小时前";
    else
      strTime = this.props.time;
    return strTime;

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
                                <img src={this.props.img}/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="pic">
                                <img src={this.props.img}/>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="pic">
                                <img src={this.props.img}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="detail">
                            {this.props.source}  {this.props.comments}条回复   {this.renderTime()}
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

@connect(
  state =>  {
    return {
     articles: state.items.articles
    }
  } ,
  dispatch =>( { actions: bindActionCreators(actionCreators, dispatch) } )
)
export class CallRoll extends Component {

  constructor(props) {
    super(props)
    this.handleRefresh = this.handleRefresh.bind(this);
  }
    state = {
      nowNewsId:0  //这个ID表示当前刷到的最下面的新闻的id号,id越下面就越小也是约旧,最上面是最新的
    };

    handleRefresh(e){
      console.log("handleRefresh");
      this.props.actions.superagentPosts();
    };

    componentDidMount() {
      //this.props.dispatch( this.props.actions.superagentPosts() );
      this.props.actions.superagentPosts();
      document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
      //if (isBottom) {
      //  ajax.request('api').then(this.addNews);
      //}
      if (this.shouldScrollBottom)
      console.log("scroll 滑动了");
    }
    renderArticle() {
      let testArr =  [];
      const { articles } = this.props;
      let component;
      for (let i = 0 ; i<articles.length; i++) {
        component = <Article source={ articles[i].source } comments={ articles[i].comment } time={ articles[i].time } title={ articles[i].title }  img={articles[i].img}  /> ;
        testArr.push(component);
      }
      console.log("wozai render Article");
      console.log(articles);
      let tmp = new Article();
      tmp.title = "nmb";
      return (
        <div>
          {testArr}
        </div>
      );
    }

    render() {
      const { articles } = this.props;
      console.log("我在组件的render里面");
      console.log(articles);
      let newContent = {
        title: articles==null ? "" : articles[0]
      }
        return (
          <ReactPullToRefresh onRefresh = {this.handleRefresh}>
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
            {this.renderArticle()}
          </div>
          </ReactPullToRefresh>
            );
    }
}
