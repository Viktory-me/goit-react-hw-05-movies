(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[2],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(59),i=n(0),o=n(18),r=n(58),c=n(65),s=n(19),u=n(1),l="pending",f="resolved",d="rejected";function v(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],v=t[1],p=Object(i.useState)(""),g=Object(a.a)(p,2),b=g[0],_=g[1],m=Object(i.useState)(l),j=Object(a.a)(m,2),h=j[0],O=j[1];return Object(i.useEffect)((function(){O(l),Object(r.f)().then((function(e){return v(e.results)})).then(O(f)).catch((function(e){console.log(b),_(d)}))}),[b]),h===l?Object(u.jsx)(s.a,{}):h===d?o.b.dark("\ud83e\udd84Page not found",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):h===f?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(c.a,{movies:n})}):void 0}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return m}));var a=n(60),i=n.n(a),o=n(61),r=n(62),c=n.n(r),s="https://api.themoviedb.org/3",u="febbe388fd385fbc8b7d8be3042ab312",l="https://image.tmdb.org/t/p/w500",f="".concat(s,"/trending/movie/day?api_key=").concat(u);function d(){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(i.a.mark((function e(){var t,n,a,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:{},e.next=4,fetch(t,n);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"))}function g(){return d(f)}function b(e){return d("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function _(e){return d("".concat(s,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"))}function m(e){return d("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"))}c.a.defaults.baseURL=s},63:function(e,t,n){e.exports={movieCard:"MovieCard_movieCard__1-AYF",image:"MovieCard_image__3fsYT",infoMovie:"MovieCard_infoMovie__YMFwZ",infoMovieRelease:"MovieCard_infoMovieRelease__3HdzP",infoMovieRating:"MovieCard_infoMovieRating__2qh_v",fullInfo:"MovieCard_fullInfo__VDuFv",linkMovie:"MovieCard_linkMovie__19Dfh"}},64:function(e,t,n){e.exports={list:"MovieList_list__J24gA"}},65:function(e,t,n){"use strict";var a=n(4),i=n(9),o=n.p+"static/media/noimage.ed97b93f.jpg",r=n(63),c=n.n(r),s=n(1);var u=function(e){var t=e.id,n=e.title,r=e.original_name,u=e.poster_path,l=e.release_date,f=e.vote_average,d=Object(a.g)();return Object(s.jsx)("li",{className:c.a.movieCard,children:Object(s.jsxs)(i.b,{className:c.a.linkMovie,to:{pathname:"/movies/".concat(t),state:{from:d}},children:[Object(s.jsx)("img",{className:c.a.image,src:u?"https://image.tmdb.org/t/p/w500".concat(u):o,alt:"about movie"}),Object(s.jsxs)("div",{className:c.a.fullInfo,children:[Object(s.jsxs)("span",{className:c.a.infoMovie,children:[n||r," |"," "]}),Object(s.jsx)("span",{className:c.a.infoMovieRelease,children:l?parseInt(l):""})," ",Object(s.jsx)("span",{className:c.a.infoMovieRating,children:f})]})]})})},l=n(64),f=n.n(l);t.a=function(e){var t=e.movies;return Object(s.jsx)("ul",{className:f.a.list,children:t.map((function(e){var t=e.id,n=e.title,a=e.original_name,i=e.poster_path,o=e.release_date,r=e.vote_average;return Object(s.jsx)(u,{id:t,title:n,original_name:a,poster_path:i,release_date:o,vote_average:r},t)}))})}}}]);
//# sourceMappingURL=HomePage.8df1fecc.chunk.js.map