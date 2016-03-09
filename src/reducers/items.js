const initialState = {
  items: [{
    text: 'React',
    done: true,
  }, {
    text: 'Redux',
    done: true,
  }, {
    text: 'React router',
    done: true,
  }, {
    text: 'Babel 6',
    done: true,
  }, {
    text: 'Bootstrap webpack',
    done: true,
  }, {
    text: 'Sass modules (sass-loader css-loader style-loader)',
    done: true,
  }, {
    text: 'React transform',
    done: true,
  }, {
    text: 'Redux logger',
    done: true,
  }, {
    text: 'React document meta',
    done: true,
  }, {
    text: 'Redux form',
    done: true,
  }, {
    text: 'Redux simple router',
    done: true,
  }, {
    text: 'Karma',
    done: true,
  }, {
    text: 'Mocha',
    done: true,
  }, {
    text: 'Server-side rendering',
    done: false,
  }], isSuperagent: false,
  articles: [],


  /*这是当前显示的articles在数组中的编号
  * 越大就是最新的编号,所以这个编号应该是越来越小的
  * 在页面上显示出来的越上面越是最大的编号的article*/
  nowArticleNum: 0
};

import  { GET_ARTICLE,RECEIVE_POST,REQUEST_POST } from '../actions/items';

import superagent from 'superagent';

export function items(state = initialState, action) {
  switch (action.type) {
  case 'ADD_ITEM':
    return {
      ...state,
      items: [
        ...state.items, {
          text: action.fields.name.value,
        },
      ],
    };

  case 'DELETE_ITEM':
    return {
      ...state,
      items: [
        ...state.items.slice(0, action.index),
        ...state.items.slice(+action.index + 1),
      ],
    };

    case REQUEST_POST:
      return Object.assign( {}, state, {
        isSuperagent: true
      });

    case RECEIVE_POST:


      //如果获取来的最新数据和当前state的最新数据编号相同,那么直接返回,不更新
      //$$$终于发现了现在的错误,这里的state是items的小state不是全局state!!!!
      //if ( state.items.articles.length>0  &&  action.data[0].list[0].pigcms_id == state.items.articles[0].pigcms_id )

      if  (state.articles.length>0  &&  action.data[0].list[0].pigcms_id == state.articles[0].pigcms_id )
      {
        return state;
      }

      const data = action.data;
      let receNewsMaxId = data[0].list[0].pigcms_id;
      let maxIdNum = 0;

      if ( state.articles.length == 0 ) {
        maxIdNum = data.length;
      } else {
        while (receNewsMaxId > state.articles[0].pigcms_id && maxIdNum < data.length) {
          receNewsMaxId--;
          maxIdNum++;
        }
      }
      let tmpArr = data.slice(0, maxIdNum);

      let articlesTmp = state.articles.concat( tmpArr );
      let articlesTmp2 = [];
      for (let i = 0; i<articlesTmp.length; i++) {
        const src = articlesTmp[i];
        articlesTmp2.push( {
          time: src.dateline,
          title: src.list[0].title,
          pigcms_id: src.list[0].pigcms_id,
          comment: 10,
          source: src.list[0].author,
          img: "http://sj.angel-in.net"+src.list[0].cover_pic
        } )
      }

      return Object.assign( {}, state, {
        isSuperagent: false,
        articles: articlesTmp2
      });

  default:
    return state;
  }
}
