(window.webpackJsonp=window.webpackJsonp||[]).push([[58,14,30],{1084:function(t,e,n){"use strict";n(912)},1085:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".blade-id[data-v-41a8b229]{background:#ffeeeb;border-radius:17px;color:#fc4d32;flex-shrink:0;font-family:SVN-Gilroy;font-size:12px;font-style:normal;font-weight:500;gap:10px;line-height:normal;padding:3px 11px}.card-item[data-v-41a8b229]{align-items:center;background:#fff;border-radius:10px;display:flex;justify-content:space-between;padding:10px 15px}.card-item .user-name[data-v-41a8b229]{color:#0056b1;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;line-height:normal;text-decoration-line:underline}.card-item .box-img[data-v-41a8b229]{border-radius:50%;height:40px;overflow:hidden;width:40px}.card-item .box-img img[data-v-41a8b229]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.card-lsm[data-v-41a8b229]{background:#fff;border-radius:10px;box-shadow:0 0 10px 0 rgba(0,86,177,.15);padding:10px 15px}.lesson[data-v-41a8b229]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:600;line-height:20px;text-align:center}table[data-v-41a8b229]{margin-top:10px}table tr td[data-v-41a8b229]{padding-bottom:7px;padding-left:20px}.span1[data-v-41a8b229]{font-weight:400}.span1[data-v-41a8b229],.span2[data-v-41a8b229]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;line-height:normal}.span2[data-v-41a8b229]{font-weight:500}.img-w[data-v-41a8b229]{max-width:100%}.span-h[data-v-41a8b229]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:700;line-height:normal}.btn-edit[data-v-41a8b229]{align-items:center;background:#e5e5e5;border-radius:46px;color:#2d2d2d!important;cursor:pointer;display:flex;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;justify-content:center;line-height:normal;padding:12px 32px;text-align:center}",""]),o.locals={},t.exports=o},1220:function(t,e,n){"use strict";n.r(e);var o=n(849),r=n(1147),l=n(13),d=(n(42),n(14),n(5),n(730)),c=n(65),v=(n(506),n(30),{components:{ButtonAdd:d.default},layout:"admin",data:function(){var t;return{title:{name:"Học phần",previous:"/admin/lsm/teacher-training/"+(null!==(t=this.id)&&void 0!==t?t:0)},panel:[0],data:null,teachers:null,lesson:null}},validate:function(t){var e=t.params;return/^[0-9]{0,2}$/.test(e.id)},computed:{id:function(){return this.$route.params.id},course_id:function(){return this.$route.params.course_id},token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{load_data:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.default.get("dao-tao/chi-tiet-hoc-phan?hoc_phan_id="+t.course_id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;t.data=null==e||null===(n=e.data)||void 0===n?void 0:n.data}));case 2:return e.next=4,c.default.get("dao-tao/danh-sach-bai-hoc?page=1&limit=1000&sort=1&tuKhoa=&hoc_phan_id="+t.course_id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;t.lesson=null==e||null===(n=e.data)||void 0===n?void 0:n.data}));case 4:return e.next=6,c.default.get("dao-tao/danh-sach-giao-vien-da-gan?page=1&limit=100&sort=1&tuKhoa=&hoc_phan_id="+t.course_id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;t.teachers=null==e||null===(n=e.data)||void 0===n?void 0:n.data}));case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t;this.title.previous="/admin/lsm/teacher-training/"+(null!==(t=this.id)&&void 0!==t?t:0),this.$store.dispatch("title/set_title",this.title),this.load_data()}}),h=(n(1084),n(36)),component=Object(h.a)(v,(function(){var t,e,l,d,c,v,h,f,C,m,x=this,_=x._self._c;return _("div",{staticClass:"content-mp"},[_(r.a,[_(o.a,{staticClass:"mt-0 pt-0",staticStyle:{"min-width":"373px"},attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[_("div",{staticClass:"d-flex align-items-center justify-content-between wmt-27"},[_("div",[_("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_("circle",{attrs:{cx:"8.00781",cy:"8",r:"8",fill:"#0056B1"}}),x._v(" "),_("path",{attrs:{d:"M10.5997 6.78514L6.47928 4.16485C5.50162 3.54199 4.43863 4.80059 4.93279 5.99476L5.50873 7.38652C5.66871 7.77312 5.66871 8.22845 5.50873 8.61505L4.93279 10.0068C4.43863 11.201 5.50162 12.4553 6.47928 11.8367L10.5997 9.21643C11.4103 8.70096 11.4103 7.30061 10.5997 6.78514Z",fill:"white"}})]),x._v(" "),_("span",{staticClass:"span-h"},[x._v("\n                        "+x._s(null!==(t=null===(e=x.data)||void 0===e?void 0:e.khoaHoc)&&void 0!==t?t:"Loading...")+"\n                    ")])]),x._v(" "),_("nuxt-link",{staticClass:"btn-edit",attrs:{to:"/admin/lsm/teacher-training/3/edit"}},[_("svg",{staticClass:"me-2",attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_("path",{attrs:{d:"M14.7578 12.9814L13.98 13.8121C13.5674 14.2526 13.0079 14.5 12.4246 14.5C11.8412 14.5 11.2818 14.2526 10.8692 13.8121C10.4561 13.3725 9.8967 13.1257 9.31352 13.1257C8.73034 13.1257 8.17093 13.3725 7.7578 13.8121M0.757812 14.5H2.06024C2.44071 14.5 2.63095 14.5 2.80997 14.458C2.9687 14.4208 3.12043 14.3595 3.25961 14.2762C3.41659 14.1823 3.55111 14.051 3.82015 13.7883L13.5912 4.24962C14.2355 3.62061 14.2355 2.60077 13.5912 1.97176C12.9469 1.34275 11.9022 1.34275 11.2578 1.97176L1.48679 11.5105C1.21776 11.7731 1.08324 11.9044 0.98704 12.0577C0.90175 12.1936 0.838899 12.3417 0.800793 12.4966C0.757812 12.6714 0.757812 12.8571 0.757812 13.2286V14.5Z",stroke:"#2D2D2D","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),x._v("\n                    Chỉnh sửa\n                ")])],1),x._v(" "),_("div",{staticClass:"my-2"},[_("title-header",[x._v("\n                    "+x._s(null!==(l=null===(d=x.data)||void 0===d?void 0:d.tieu_de)&&void 0!==l?l:"Loading...")+"\n                ")])],1),x._v(" "),_("div",{staticClass:"w-100"},[null!==(c=x.data)&&void 0!==c&&c.image?_("img",{staticClass:"img-w",attrs:{src:null===(v=x.data)||void 0===v?void 0:v.image,alt:""}}):_("img",{staticClass:"img-w",attrs:{src:n(745),alt:""}})]),x._v(" "),_("div",[_("table",[_("tr",[_("td",[_("div",[_("svg",{attrs:{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_("path",{attrs:{d:"M10.6079 0H7.40784C6.30114 0 5.37222 0.662527 5.09335 1.45977C5.00218 1.72043 5.23167 1.95 5.50781 1.95H9.00786C9.33587 1.95 9.60787 2.154 9.60787 2.4C9.60787 2.646 9.33587 2.85 9.00786 2.85H5.50781C5.23167 2.85 5.00781 3.07386 5.00781 3.35V3.85C5.00781 4.12614 5.23167 4.35 5.50781 4.35H7.25584C7.58384 4.35 7.85585 4.554 7.85585 4.8C7.85585 5.046 7.58384 5.25 7.25584 5.25H5.50781C5.23167 5.25 5.00781 5.47386 5.00781 5.75V6.22374C5.00781 6.49842 5.22939 6.72166 5.50406 6.72372L9.00786 6.75C9.34387 6.75 9.60787 6.954 9.60787 7.206C9.59987 7.452 9.33587 7.65 9.00786 7.65C8.99986 7.65 8.99986 7.65 8.99986 7.65L5.51157 7.62379C5.23397 7.6217 5.00781 7.84616 5.00781 8.12377V8.65C5.00781 8.92614 5.23167 9.15 5.50781 9.15H8.12785C8.46386 9.15 8.72786 9.354 8.72786 9.6C8.72786 9.846 8.46386 10.05 8.12785 10.05H5.50781C5.23167 10.05 5.00218 10.2796 5.09335 10.5402C5.37222 11.3375 6.30114 12 7.40784 12H10.6079C11.9279 12 13.0079 11.196 13.0079 10.2V1.8C13.0079 0.804 11.9279 0 10.6079 0Z",fill:"#FC4D32"}}),x._v(" "),_("path",{attrs:{d:"M4.00786 2.08235V2.5C4.00786 2.77614 3.784 3 3.50786 3H0.507812C0.23167 3 0.0078125 2.77614 0.0078125 2.5V2.08235C0.0078125 0.938823 0.907993 0 2.01122 0C3.10768 0 4.00786 0.938823 4.00786 2.08235Z",fill:"#FC4D32"}}),x._v(" "),_("path",{attrs:{d:"M0.0078125 9.71388C0.0078125 9.96696 0.13641 10.355 0.298848 10.5687L0.847079 11.3336C1.49006 12.2221 2.53238 12.2221 3.1686 11.3336L3.7236 10.5687C3.87927 10.355 4.00786 9.96696 4.00786 9.71388V4.5C4.00786 4.22386 3.784 4 3.50786 4H0.507812C0.23167 4 0.0078125 4.22386 0.0078125 4.5V9.71388Z",fill:"#FC4D32"}})]),x._v(" "),_("span",{staticClass:"span1"},[x._v("Cấp độ")])])]),x._v(" "),_("td",[_("span",{staticClass:"span2"},[x._v(x._s(null!==(h=null===(f=x.data)||void 0===f?void 0:f.capDo)&&void 0!==h?h:"Loading..."))])])]),x._v(" "),_("tr",[_("td",[_("div",[_("svg",{attrs:{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_("path",{attrs:{d:"M9.91455 9.13117C10.3871 8.79446 11.0078 9.16177 11.0078 9.77397V10.7611C11.0078 11.733 10.3095 12.7737 9.4702 13.0798L7.2202 13.891C6.82521 14.0363 6.18336 14.0363 5.79543 13.891L3.54543 13.0798C2.69904 12.7737 2.00781 11.733 2.00781 10.7611V9.76631C2.00781 9.16177 2.6285 8.79446 3.09402 9.12351L4.547 10.1489C5.10421 10.5545 5.80954 10.7535 6.51487 10.7535C7.2202 10.7535 7.92552 10.5545 8.48273 10.1489L9.91455 9.13117Z",fill:"#FFB761"}}),x._v(" "),_("path",{attrs:{d:"M12.0284 3.13048L7.88967 0.373553C7.14346 -0.124518 5.91359 -0.124518 5.16738 0.373553L1.00794 3.13048C-0.325564 4.00737 -0.325564 5.99263 1.00794 6.87653L2.11344 7.6061L5.16738 9.62645C5.91359 10.1245 7.14346 10.1245 7.88967 9.62645L10.9229 7.6061L11.8695 6.97474V9.12136C11.8695 9.40898 12.1044 9.64749 12.3877 9.64749C12.6709 9.64749 12.9059 9.40898 12.9059 9.12136V5.66994C13.1822 4.76499 12.899 3.71273 12.0284 3.13048Z",fill:"#FFB761"}})]),x._v(" "),_("span",{staticClass:"span1"},[x._v("Phân loại")])])]),x._v(" "),_("td",[_("span",{staticClass:"span2"},[x._v(x._s(null!==(C=null===(m=x.data)||void 0===m?void 0:m.type)&&void 0!==C?C:"Loading..."))])])])])]),x._v(" "),_("div",[_("div",{staticClass:"mt-5"},[_("title-header",[x._v("Danh sách bài học")])],1),x._v(" "),_("div",x._l(x.lesson,(function(t,e){return _("nuxt-link",{key:e,staticClass:"d-flex justify-content-between align-items-center card-lsm hover-card mt-4",attrs:{to:""}},[_("div",{},[_("svg",{attrs:{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_("ellipse",{attrs:{cx:"12.2059",cy:"12",rx:"12.1029",ry:"12",fill:"#4EAEEA"}}),x._v(" "),_("path",{attrs:{d:"M10.7753 4.99796L6.3596 7.67751C4.94393 8.5366 4.94393 10.4593 6.3596 11.3184L10.7753 13.998C11.5675 14.4821 12.8731 14.4821 13.6653 13.998L18.059 11.3184C19.4674 10.4593 19.4674 8.54342 18.059 7.68433L13.6653 5.00478C12.8731 4.51387 11.5675 4.51387 10.7753 4.99796Z",stroke:"white","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"}}),x._v(" "),_("path",{attrs:{d:"M7.53321 12.1909L7.52588 15.3886C7.52588 16.2546 8.24472 17.1818 9.12492 17.4546L11.4648 18.1773C11.8682 18.3 12.5357 18.3 12.9465 18.1773L15.2864 17.4546C16.1666 17.1818 16.8854 16.2546 16.8854 15.3886V12.225",stroke:"white","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"}}),x._v(" "),_("path",{attrs:{d:"M19.1011 13.5001V9.40918",stroke:"white","stroke-width":"1.3","stroke-linecap":"round","stroke-linejoin":"round"}})]),x._v(" "),_("span",{staticClass:"lesson mt-2"},[x._v("Bài "+x._s(e)+": Giới thiệu "+x._s(5*e))])]),x._v(" "),_("div",[_("svg",{attrs:{width:"6",height:"10",viewBox:"0 0 6 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_("path",{attrs:{d:"M1 9L5 5L1 1",stroke:"#2D2D2D","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])})),1),x._v(" "),_("div",{staticClass:"my-7"},[_("nuxt-link",{staticClass:"d-block",attrs:{to:"/admin/lsm/teacher-training/"+x.id+"/detail/"+x.course_id+"/create"}},[_("button-add",[_("span",{staticClass:"mdi mdi-plus"}),x._v(" Thêm bài học\n                        ")])],1)],1)]),x._v(" "),_("hr"),x._v(" "),_("div",[_("div",{staticClass:"mt-5"},[_("title-header",[x._v("Danh sách giáo viên được gán")])],1),x._v(" "),_("div",{staticClass:"card-teacher"},x._l(x.teachers,(function(t,e){var n;return _("div",{key:e,staticClass:"card-item mt-3"},[_("div",{staticClass:"d-flex"},[_("div",{staticClass:"box-img me-2"},[_("img",{attrs:{src:null==t?void 0:t.anh_nguoi_dung,alt:""}})]),x._v(" "),_("div",[_("div",{staticClass:"user-id mb-2"},[_("span",{staticClass:"blade-id"},[x._v("# "+x._s(null==t?void 0:t.id))])]),x._v(" "),_("div",{staticClass:"user-name"},[x._v("\n                                    "+x._s(null!==(n=null==t?void 0:t.hoten)&&void 0!==n?n:"Chưa cập nhật tên")+"\n                                ")])])]),x._v(" "),_("div",[_("svg",{attrs:{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[_("circle",{attrs:{cx:"13",cy:"13",r:"12.5",fill:"#0056B1","fill-opacity":"0.15",stroke:"#0056B1"}}),x._v(" "),_("path",{attrs:{d:"M16.2134 6.27344H9.78671C8.37338 6.27344 7.21338 7.43344 7.21338 8.84677V18.2401C7.21338 19.4401 8.07338 19.9468 9.12671 19.3668L12.38 17.5601C12.7267 17.3668 13.2867 17.3668 13.6267 17.5601L16.88 19.3668C17.9334 19.9534 18.7934 19.4468 18.7934 18.2401V8.84677C18.7867 7.43344 17.6334 6.27344 16.2134 6.27344ZM15.4134 11.0201L12.7467 13.6868C12.6467 13.7868 12.52 13.8334 12.3934 13.8334C12.2667 13.8334 12.14 13.7868 12.04 13.6868L11.04 12.6868C10.8467 12.4934 10.8467 12.1734 11.04 11.9801C11.2334 11.7868 11.5534 11.7868 11.7467 11.9801L12.3934 12.6268L14.7067 10.3134C14.9 10.1201 15.22 10.1201 15.4134 10.3134C15.6067 10.5068 15.6067 10.8268 15.4134 11.0201Z",fill:"#0056B1"}})])])])})),0),x._v(" "),_("div",{staticClass:"my-7"},[_("nuxt-link",{attrs:{to:"/admin/lsm/teacher-training/3/teachers"}},[_("button-add",[_("span",{staticClass:"mdi mdi-plus"}),x._v(" Gán giáo viên\n                        ")])],1)],1)])])],1)],1)}),[],!1,null,"41a8b229",null);e.default=component.exports;installComponents(component,{TitleHeader:n(726).default,ButtonAdd:n(730).default})},723:function(t,e,n){var content=n(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("794e685a",content,!0,{sourceMap:!1})},725:function(t,e,n){var content=n(734);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7e2793ea",content,!0,{sourceMap:!1})},726:function(t,e,n){"use strict";n.r(e);n(727);var o=n(36),component=Object(o.a)({},(function(){return(0,this._self._c)("h3",{staticClass:"title-component"},[this._t("default")],2)}),[],!1,null,"4f45fb1e",null);e.default=component.exports},727:function(t,e,n){"use strict";n(723)},728:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".title-component[data-v-4f45fb1e]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:19px;font-style:normal;font-weight:700;line-height:normal;margin:0}",""]),o.locals={},t.exports=o},730:function(t,e,n){"use strict";n.r(e);var o={props:{addClass:{type:String,default:""}},computed:{computedClasses:function(){return this.addClass+" button"}}},r=(n(733),n(36)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{class:t.computedClasses+" hover"},[t._t("default")],2)}),[],!1,null,"346bd5ea",null);e.default=component.exports},733:function(t,e,n){"use strict";n(725)},734:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-346bd5ea]{background:#e8f3ff;border:1px solid #4eaeea;border-radius:42px;color:#4eaeea;cursor:pointer;padding:10px;text-align:center}.btn-success-2[data-v-346bd5ea]{background:#e3f9e5;border:1px solid #18cb3f;color:#18cb3f}.btn-danger-2[data-v-346bd5ea]{background:#ffebe8;border:1px solid #c91919;color:#c91919}.hover[data-v-346bd5ea]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.hover[data-v-346bd5ea]:hover{background:transparent}.btn-header[data-v-346bd5ea]{display:inline;padding:8px 28px}.btn-add-more-law[data-v-346bd5ea]{display:inline;font-size:20px;height:44px;text-align:center;width:44px}",""]),o.locals={},t.exports=o},745:function(t,e,n){t.exports=n.p+"img/Rectangle4052.4da3e7c.png"},912:function(t,e,n){var content=n(1085);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("0b329b6c",content,!0,{sourceMap:!1})}}]);