webpackJsonp([7],{WWai:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("lC5x"),s=i.n(a),l=i("J0Oq"),o=i.n(l),r=i("/p82"),n=i("gej+"),d={data:function(){return{page:{whiteList:[],pageIndex:1,pageSize:6,total:0},dialog:{addwhiteListForm:{issuerType:""},dialogaddwhiteListVisible:!1,whiteListForm:{issuerType:"",weId:""},dialogwhiteFormVisible:!1,whiteWeIdListPage:{whiteWeIdList:[],pageIndex:1,pageSize:5,total:0},deleteType:"",dialogTableVisible:!1}}},methods:{showRegistWhiteList:function(){n.a.data.nodeStatus?this.dialog.dialogaddwhiteListVisible=!0:n.a.checkNodeState(!0)},deleteRow:function(e){var t=this;this.$confirm("确定删除该白名单用户？","温馨提示",{closeOnClickModal:!1,cancelButtonClass:"el-button--primary"}).then(function(i){var a={};a.issuerType=t.dialog.deleteType,a.weId=e,r.a.doPost("removeIssuerFromIssuerType",a).then(function(e){0===e.data.errorCode?(t.$alert("删除成功!","温馨提示",{closeOnClickModal:"true"}).catch(function(){}),t.getAllIssuerInType(t.dialog.deleteType)):t.$alert("删除失败!","温馨提示",{closeOnClickModal:"true"}).catch(function(){})})}).catch(function(e){console.log(e)})},showAddIssuer:function(e){this.dialog.whiteListForm.issuerType=e,this.dialog.whiteListForm.weId="",this.dialog.dialogwhiteFormVisible=!0},showAllIssuer:function(e){this.indexChange2(1),this.getAllIssuerInType(e)},getAllIssuerInType:function(e){var t=this;this.dialog.dialogTableVisible=!0;var i={};i.issuerType=e,this.dialog.deleteType=e,r.a.doPost("getAllIssuerInType",i).then(function(e){0===e.data.errorCode&&(t.dialog.whiteWeIdListPage.whiteWeIdList=e.data.result,t.dialog.whiteWeIdListPage.total=e.data.result.length),t.dialog.whiteWeIdListPage.total===t.dialog.whiteWeIdListPage.pageSize*(t.dialog.whiteWeIdListPage.pageIndex-1)&&t.indexChange2(t.dialog.whiteWeIdListPage.pageIndex-1)})},addWeIdToWhiteList:function(){var e=this;""!==this.dialog.whiteListForm.weId?r.a.doPost("addIssuerIntoIssuerType",this.dialog.whiteListForm).then(function(t){0===t.data.errorCode?e.$alert("添加白名单成功!","温馨提示",{}).then(function(){e.dialog.dialogwhiteFormVisible=!1}).catch(function(){}):e.$alert(t.data.errorMessage,"温馨提示",{}).catch(function(){})}):this.$alert("请输入WeID!","温馨提示",{}).catch(function(){})},registerWhiteList:function(){var e=this;""!==this.dialog.addwhiteListForm.issuerType?0!==this.dialog.addwhiteListForm.issuerType.indexOf("@")?r.a.doPost("registerIssuerType",this.dialog.addwhiteListForm).then(function(t){0===t.data.errorCode?(e.$alert("白名单新增成功!","温馨提示",{}).then(function(){e.dialog.dialogaddwhiteListVisible=!1}).catch(function(){}),e.dialog.addwhiteListForm.issuerType="",e.page.pageIndex=1,e.init()):e.$alert(t.data.errorMessage,"温馨提示",{}).catch(function(){})}):this.$alert("白名单名称输入非法!","温馨提示",{}).catch(function(){}):this.$alert("请输入白名单名称!","温馨提示",{}).catch(function(){})},indexChange2:function(e){e<1&&(e=1),this.dialog.whiteWeIdListPage.pageIndex=e},indexChange:function(e){this.page.pageIndex=e},init:function(){var e=this;r.a.doGet("getIssuerTypeList").then(function(t){0===t.data.errorCode&&(e.page.whiteList=t.data.result,e.page.total=t.data.result.length)})},check:function(){var e=this;return o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.checkNodeState(!0);case 2:n.a.data.nodeStatus&&e.init();case 3:case"end":return t.stop()}},t,e)}))()}},mounted:function(){this.check()}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content app_main"},[a("el-row",{staticClass:"app_main_header_row"},[a("el-col",{attrs:{span:2}},[a("el-button",{staticClass:"btn",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:e.showRegistWhiteList}},[e._v("新增白名单")])],1),e._v(" "),a("el-col",{staticClass:"head-icon",attrs:{span:22}},[a("a",{attrs:{target:"blank",href:"https://weidentity.readthedocs.io/zh_CN/latest/docs/weidentity-quick-tools-web.html?highlight=白名单#id4"}},[a("img",{staticClass:"icon_question",attrs:{src:i("JaJV"),alt:""}}),e._v(" "),a("span",{staticClass:"icon_question"},[e._v("白名单使用教程")])])])],1),e._v(" "),a("div",{staticClass:"app_view"},[a("el-table",{attrs:{data:e.page.whiteList.slice((e.page.pageIndex-1)*e.page.pageSize,e.page.pageIndex*e.page.pageSize),border:"true",align:"center"}},[a("el-table-column",{attrs:{prop:"type",label:"白名单名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"long_words",attrs:{title:t.row.type}},[e._v(e._s(t.row.type))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"btn",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(i){return e.showAllIssuer(t.row.type)}}},[e._v("查看白名单")]),e._v(" "),a("el-button",{staticClass:"btn",staticStyle:{width:"180px"},attrs:{type:"primary"},on:{click:function(i){return e.showAddIssuer(t.row.type)}}},[e._v("添加WeID到这个白名单")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.page.pageIndex,"page-size":e.page.pageSize,layout:"total, prev, pager, next, jumper",total:e.page.total},on:{"current-change":e.indexChange}})],1),e._v(" "),a("el-dialog",{staticClass:"dialog-view",attrs:{title:"新增白名单",width:"29%",visible:e.dialog.dialogaddwhiteListVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"dialogaddwhiteListVisible",t)}}},[a("div",{staticClass:"dialog-body"},[a("el-form",{attrs:{model:e.dialog.addwhiteListForm}},[a("el-form-item",{attrs:{label:"新增白名单名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{onkeyup:"this.value=this.value.replace(/[^a-zA-Z0-9]/g,'')",placeholder:"Enter new whitelist name"},on:{blur:function(t){e.dialog.addwhiteListForm.issuerType=t.target.value}},model:{value:e.dialog.addwhiteListForm.issuerType,callback:function(t){e.$set(e.dialog.addwhiteListForm,"issuerType",t)},expression:"dialog.addwhiteListForm.issuerType"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"width_100",attrs:{type:"primary"},on:{click:function(t){return e.registerWhiteList()}}},[e._v("新 增")])],1)]),e._v(" "),a("el-dialog",{staticClass:"dialog-view",attrs:{title:"添加到白名单",width:"29%",visible:e.dialog.dialogwhiteFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"dialogwhiteFormVisible",t)}}},[a("div",{staticClass:"dialog-body"},[a("el-form",{attrs:{model:e.dialog.whiteListForm}},[a("el-form-item",{attrs:{label:"WeID","label-width":e.formLabelWidth}},[a("el-input",{attrs:{onkeyup:"this.value=this.value.replace(/[^\\w：:]/g,'');this.value=this.value.replace(/：/g,':');",placeholder:"Enter WeID"},on:{blur:function(t){e.dialog.whiteListForm.weId=t.target.value}},model:{value:e.dialog.whiteListForm.weId,callback:function(t){e.$set(e.dialog.whiteListForm,"weId",t)},expression:"dialog.whiteListForm.weId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"白名单名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{disabled:""},model:{value:e.dialog.whiteListForm.issuerType,callback:function(t){e.$set(e.dialog.whiteListForm,"issuerType",t)},expression:"dialog.whiteListForm.issuerType"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"width_100",attrs:{type:"primary"},on:{click:function(t){return e.addWeIdToWhiteList()}}},[e._v("添 加")])],1)]),e._v(" "),a("el-dialog",{staticClass:"dialog-view",attrs:{title:"白名单用户列表",width:"55%",visible:e.dialog.dialogTableVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialog,"dialogTableVisible",t)}}},[a("el-table",{attrs:{data:e.dialog.whiteWeIdListPage.whiteWeIdList.slice((e.dialog.whiteWeIdListPage.pageIndex-1)*e.dialog.whiteWeIdListPage.pageSize,e.dialog.whiteWeIdListPage.pageIndex*e.dialog.whiteWeIdListPage.pageSize),border:"true",cellpadding:"0",cellspacing:"0"}},[a("el-table-column",{attrs:{property:"weId",label:"WeID"}}),e._v(" "),a("el-table-column",{attrs:{property:"name",label:"权威机构名称",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return""!==t.row.name?[e._v("\n          "+e._s(t.row.name)+"\n          "),!0===t.row.recognized?a("img",{staticClass:"icon_question",attrs:{src:i("MeCv"),widht:"50",height:"50",alt:""}}):e._e(),e._v(" "),!1===t.row.recognized?a("img",{staticClass:"icon_question",attrs:{src:i("B7UN"),widht:"50",height:"50",alt:""}}):e._e()]:void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(i){return e.deleteRow(t.row.weId)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.dialog.whiteWeIdListPage.pageIndex,"page-size":e.dialog.whiteWeIdListPage.pageSize,layout:"total, prev, pager, next, jumper",total:e.dialog.whiteWeIdListPage.total},on:{"current-change":e.indexChange2}}),e._v(" "),a("br")],1)],1)},staticRenderFns:[]},g=i("C7Lr")(d,c,!1,null,null,null);t.default=g.exports}});