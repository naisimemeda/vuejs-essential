webpackJsonp([2],{j7e0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),r=s("NYxO"),l={name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1,articles:[],filter:"default",filters:[{filter:"default",name:"活跃",title:"最后回复排序"},{filter:"excellent",name:"精华",title:"只看加精的话题"},{filter:"vote",name:"投票",title:"点赞数排序"},{filter:"recent",name:"最近",title:"发布时间排序"},{filter:"noreply",name:"零回复",title:"无人问津的话题"}],total:0,pageSize:10}},beforeRouteEnter:function(t,e,s){var a=e.name,i=t.params.logout;s(function(e){if(e.$store.state.auth)switch(a){case"Register":e.showMsg("注册成功");break;case"Login":e.showMsg("登录成功")}else i&&e.showMsg("操作成功");e.setDataByFilter(t.query.filter)})},computed:i()({},Object(r.b)(["auth","user"]),{currentPage:function(){return parseInt(this.$route.query.page)||1}}),watch:{auth:function(t){t||this.showMsg("操作成功")},$route:function(t){this.setDataByFilter(t.query.filter)}},methods:{showMsg:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=t,this.msgType=e,this.msgShow=!0},setDataByFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",e=this.pageSize,s=this.currentPage,a=this.$store.getters.getArticlesByFilter(t);this.filter=t,this.total=a.length,this.articles=a.slice(e*(s-1),e*s)},changePage:function(t){this.$router.push({query:i()({},this.$route.query,{page:t})})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}}),t._v(" "),s("div",{staticClass:"col-md-9 topics-index main-col"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("ul",{staticClass:"list-inline topic-filter"},t._l(t.filters,function(e){return s("li",[s("router-link",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],class:{active:t.filter===e.filter},attrs:{to:"/topics?filter="+e.filter}},[t._v(t._s(e.name))])],1)}),0),t._v(" "),s("div",{staticClass:"clearfix"})]),t._v(" "),s("div",{staticClass:"panel-body remove-padding-horizontal"},[s("ul",{staticClass:"list-group row topic-list"},t._l(t.articles,function(e){return s("li",{key:e.articleId,staticClass:"list-group-item"},[s("router-link",{staticClass:"reply_count_area hidden-xs pull-right",attrs:{to:"/articles/"+e.articleId+"/content",tag:"div"}},[s("div",{staticClass:"count_set"},[s("span",{staticClass:"count_of_votes",attrs:{title:"投票数"}},[t._v(t._s(e.likeUsers?e.likeUsers.length:0))]),t._v(" "),s("span",{staticClass:"count_seperator"},[t._v("/")]),t._v(" "),s("span",{staticClass:"count_of_replies",attrs:{title:"回复数"}},[t._v(t._s(e.comments?e.comments.length:0))]),t._v(" "),s("span",{staticClass:"count_seperator"},[t._v("|")]),t._v(" "),s("abbr",{staticClass:"timeago"},[t._v(t._s(t._f("moment")(e.date,"from")))])])]),t._v(" "),s("router-link",{staticClass:"avatar pull-left",attrs:{to:"/"+e.uname,tag:"div"}},[s("img",{staticClass:"media-object img-thumbnail avatar avatar-middle",attrs:{src:e.uavatar}})]),t._v(" "),s("router-link",{staticClass:"infos",attrs:{to:"/articles/"+e.articleId+"/content",tag:"div"}},[s("div",{staticClass:"media-heading"},[t._v("\n                "+t._s(e.title)+"\n              ")])])],1)}),0)]),t._v(" "),s("div",{staticClass:"panel-footer text-right remove-padding-horizontal pager-footer"},[s("Pagination",{attrs:{currentPage:t.currentPage,total:t.total,pageSize:t.pageSize,onPageChange:t.changePage}})],1)])])],1)},staticRenderFns:[]};var o=s("VU/8")(l,n,!1,function(t){s("lC52")},"data-v-a6d1998e",null);e.default=o.exports},lC52:function(t,e){}});
//# sourceMappingURL=2.c4f03ccc2439ee46ec50.js.map