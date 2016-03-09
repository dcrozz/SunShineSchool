import superagent from 'superagent';
export const GET_ARTICLE = "GET_ARTICLE";

export const REQUEST_POST = "REQUEST_POST";

export const RECEIVE_POST = "RECEIVE_POST";




export function addItem(fields) {
  return {
    type: 'ADD_ITEM',
    fields,
  };
}

export function delItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}

export function getArticle() {
  return {
    type: GET_ARTICLE
  };
}

export function requestPosts() {
  return {
    type: REQUEST_POST
  };
}

export function receivePosts( data ) {
  return {
    type: RECEIVE_POST,
    data: data
  };
}

export function superagentPosts() {
  return (dispatch, getState) => {

    //如果现在正在申请数据,那么直接退出
    if (getState().items.isSuperagent)
      return;

    dispatch( requestPosts() );
    let newsContent = {};
    let data = [],  data2= [];
    const request = superagent.post("http://sj.angel-in.net/wap.php?g=Wap&c=Api&a=article");
    request.end(
      function(err, res) {
        if (res.ok) {
          //$$$这里text打成了test低级错误,但是编译器不会报错,要警醒
          data = JSON.parse(res.text).data;
          console.log(data);
          console.log(data[0]);
          dispatch( receivePosts(data) );
          //newsContent = Object.assign({}, data[0]);
          //const request2 = superagent.post("http://sj.angel-in.net/wap.php?g=Wap&c=Api&a=article_imin&imid="+data[0].list[0].pigcms_id);
          //request2.end(
          //  function(err, res) {
          //    if (res.ok) {
          //      //$$$这里text打成了test低级错误,但是编译器不会报错,要警醒
          //      data2 = JSON.parse(res.text).data;
          //      console.log(data2);
          //
          //      newsContent.picUrl = "http://sj.angel-in.net"+data2.cover_pic;
          //      console.log("我现在在reducers里面,我得到了newsContent: ");
          //      console.log(newsContent);
          //
          //    } else {
          //      alert ("获取数据失败");
          //    }
          //  }
          //);
        } else {
          console.log("获取数据失败");
        }
      }
    );
  };
}

