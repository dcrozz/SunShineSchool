import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { MoreHeader } from 'components/MoreHeader';
import { CallRoll } from 'components/CallRoll';

import ReactPullToRefresh from 'react-pull-to-refresh';

//import { AskLeave } from 'components/AskLeave';
//import { MiddlePic } from 'components/MiddlePic';
//import { BusinessActivity } from 'components/BusinessActivity';
//import { HorizontalList } from 'components/HorizontalList';

//const metaData = {
//  title: 'Redux Easy Boilerplate',
//  description: 'Start you project easy and fast with modern tools',
//  canonical: 'http://example.com/path/to/page',
//  meta: {
//    charset: 'utf-8',
//    name: {
//      keywords: 'react,meta,document,html,tags',
//    },
//  },
//};





export class More extends Component {

  handleRefresh(){
    console.log ("2313213135613651356156146351456");
  }
  render() {
    return (
      <section>
          <MoreHeader/>
            <CallRoll/>


      </section>
    );
  }
}
