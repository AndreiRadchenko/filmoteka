!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in a)return a[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return a[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var a,o;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var a;t(e.exports,"getBundleURL",(function(){return a}),(function(t){return a=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.6e3421ee.js","7VDdD":"file_not_found.886b5e99.jpg","2hvCh":"index.2031b970.js"}')),i("9h1VZ"),i("cVYaS"),i("fJHat");var c=i("2oYM3"),r=(c=i("2oYM3"),i("bpxeT")),d=i("2TvXO"),l=(c=i("2oYM3"),i("eQLRL")),u=i("hRbC3"),s=i("ijwS8"),m=u.default.tags,p=m.WATCHED,f=m.QUEUE,b=(m.NOT_ADDED,"add"),v="delete",_={body:document.querySelector("body"),showBackdrop:document.querySelector("[data-detail-modal]"),modalDetail:document.querySelector(".modal-detal__container"),closeModalBtn:document.querySelector(".modal-detail__cross-frame"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),modalDetailBackdrop:document.querySelector(".modal-detail__backdrop"),gallery:document.querySelector(".gallery"),pagination:document.querySelector(".pagination")};function y(){_.modalDetailBackdrop.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",g),_.modalDetailBackdrop.removeEventListener("click",h)}function g(t){"Escape"===t.code&&y()}function h(t){t.target===_.modalDetailBackdrop&&y()}function x(){return(x=e(r)(e(d).mark((function t(n){var a,o,i,c;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.buttonWatched,o=n.buttonQueue,i=n.id,t.next=3,u.default.searchFilmInCollection(i);case 3:(c=t.sent)===p?(a.textContent="Remove from watched",a.dataset.action=v,a.classList.add("button-active"),o.textContent="Add to queue",o.dataset.action=b,o.classList.remove("button-active")):c===f?(a.textContent="Add to watched",a.dataset.action=b,a.classList.remove("button-active"),o.textContent="Remove from queue",o.dataset.action=v,o.classList.add("button-active")):(a.textContent="Add to watched",a.dataset.action=b,a.classList.remove("button-active"),o.textContent="Add to queue",o.dataset.action=b,o.classList.remove("button-active"));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t){return k.apply(this,arguments)}function k(){return(k=e(r)(e(d).mark((function t(n){var a,o,i,c;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target,document.querySelector(".modal-detal__container"),o=document.querySelector(".button-queue"),i=a.dataset.action,c=o.dataset.action,i!==b||c!==b){t.next=18;break}return t.prev=6,t.next=9,u.default.addFilmToCollection(p);case 9:a.dataset.action=v,a.textContent="Remove from watched",a.classList.add("button-active"),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(6);case 16:t.next=37;break;case 18:if(i!==b||c!==v){t.next=31;break}return t.next=21,u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id);case 21:return t.next=23,u.default.addFilmToCollection(p);case 23:a.dataset.action=v,a.textContent="Remove from watched",a.classList.add("button-active"),o.textContent="Add to queue",o.dataset.action=b,o.classList.remove("button-active"),t.next=37;break;case 31:if(i!==v){t.next=37;break}return t.next=34,u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id);case 34:a.dataset.action=b,a.textContent="Add to watched",a.classList.remove("button-active");case 37:case"end":return t.stop()}}),t,null,[[6,14]])})))).apply(this,arguments)}function w(t){return q.apply(this,arguments)}function q(){return(q=e(r)(e(d).mark((function t(n){var a,o,i,c;return e(d).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target,document.querySelector(".modal-detal__container"),o=document.querySelector(".button-watched"),i=o.dataset.action,(c=a.dataset.action)!==b||i!==b){t.next=18;break}return t.prev=6,t.next=9,u.default.addFilmToCollection(f);case 9:a.dataset.action=v,a.textContent="Remove from queue",a.classList.add("button-active"),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(6);case 16:t.next=42;break;case 18:if(c!==b||i!==v){t.next=36;break}return t.next=21,u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id);case 21:return t.prev=21,t.next=24,u.default.addFilmToCollection(f);case 24:a.dataset.action=v,a.textContent="Remove from queue",a.classList.add("button-active"),o.textContent="Add to watched",o.dataset.action=b,o.classList.remove("button-active"),t.next=34;break;case 32:t.prev=32,t.t1=t.catch(21);case 34:t.next=42;break;case 36:if(c!==v){t.next=42;break}return t.next=39,u.default.deleteFilmFromCollection(u.default.currentlyOpenedFilm.filmData.id);case 39:a.dataset.action=b,a.textContent="Add to queue",a.classList.remove("button-active");case 42:case"end":return t.stop()}}),t,null,[[6,14],[21,32]])})))).apply(this,arguments)}var S=function(t){var e=t.id,n=t.poster_path,a=t.title,o=t.vote_average,i=t.vote_count,c=t.popularity,r=t.original_title,d=t.genres,l=t.overview;return' <div class="modal-detail__cross-frame">\n      <i class="fa-solid fa-xmark"></i>\n    </div>\n  <div class="movie-poster">\n  <img\n            class="movie-image" data-id="'.concat(e,'"\n            src="https://image.tmdb.org/t/p/w500/').concat(n,'"\n            alt=""\n          />\n          <div class="modal-detail__youtube" data-modal-youtube>\n      <i class="fa-brands fa-youtube"></i>\n    </div>\n          </div>\n           <div class="movie-data">\n          <h2 class="data__title">').concat(a,'</h2>\n          <ul class="data__list list">\n            <li class="list__item">\n              <p class="data__item">Vote / Votes\n              </p>\n              <p class="data__info">\n                <span class="data__span data__span--orange">').concat(o,'</span>\n                <span data__span--divider> / </span>\n                <span class="data__span">').concat(i,'</span>\n              </p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Popularity</p>\n              <p class="data__info">').concat(c,'</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Original Title</p>\n              <p class="data__info data__info--upper">').concat(r,'</p>\n            </li>\n            <li class="list__item">\n              <p class="data__item">Genre</p>\n              <p class="data__info">').concat(d.map((function(t){return t.name})).join(", "),'</p>\n            </li>\n          </ul>\n          <p class="data__about">About</p>\n          <p class="data__about-text">').concat(l,'</p>\n  <div class="buttons">\n        <button\n          type="button"\n          class="modal-detail__button button-watched"\n          data-click="addToWached"\n          data-action="add"\n        >\n          Add to watched\n        </button>\n        <button\n          type="button"\n          data-action="add"\n          class="modal-detail__button button-queue"\n          data-click="addToQueue"\n        >\n          Add to queue\n        </button>\n      </div>\n    </div>')},C=(l=i("eQLRL"),c=i("2oYM3"),l=i("eQLRL"),document.querySelector(".pagination"));function F(t,e){if(1!==e){var n="",a=document.documentElement.scrollWidth,o="",i=1!=t?'<button type="button" class="pagination_button pagination_button-arrow" data-page="'.concat(t-1,'"><i class="fa-solid fa-arrow-left"></i></button>'):"",c=t!=e?'<button type="button" class="pagination_button pagination_button-arrow" data-page="'.concat(t+1,'"><i class="fa-solid fa-arrow-right"></i></button>'):"",r='<button type="button" class="pagination_button" data-page="1">1</button>',d='<button type="button" class="pagination_button" data-page="'.concat(e,'">').concat(e,"</button>"),l='<button type="button" class="pagination_button pagination_button-points">...</button>';if(a<768){n+=i;for(var u=t-2;u<=t+2;u++)o=u,u!=t?u<=e&&u>0&&(n+='<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>")):n+='<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=c}if(a>=768){if(e<=9){n+=i;for(var s=1;s<=e;s++)o=s,n+=s!=t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=c}if(e>=10){if(t<=5){n+=i;for(var m=1;m<=7;m++)o=m,n+=m!=t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=l+d+c}if(t>e-5){n+=i+r+l;for(var p=e-6;p<=e;p++)o=p,n+=p!=t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=c}if(t>5&&t<=e-5){n+=i+r+l;for(var f=t-2;f<=t+2;f++)o=f,n+=f!=t?'<button type="button" class="pagination_button" data-page="'.concat(o,'">').concat(o,"</button>"):'<button type="button" class="pagination_button pagination_button-active">'.concat(o,"</button>");n+=l+d+c}}}C.innerHTML=n}else refs.paginationBox.innerHTML=""}C.addEventListener("click",(function(t){"BUTTON"===t.target.nodeName&&function(t){document.body.scrollIntoView();var e=Number(t.dataset.page);""===c.default.searchParams.query?((0,l.spinnerPlay)(),c.default.getFilmsPopular(e).then((function(t){O(t.results)})).finally((function(){return(0,l.spinnerStop)()}))):((0,l.spinnerPlay)(),c.default.getFilmsSearched(c.default.searchParams.query,e).then((function(t){O(t.results)})).finally((function(){return(0,l.spinnerStop)()})))}(t.target)}));var E,D=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],T=function(t){return D.find((function(e){return e.id===t})).name};E=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("7VDdD"),(0,l.spinnerPlay)(),c.default.getFilmsPopular().then((function(t){O(t.results)})).finally((function(){return(0,l.spinnerStop)()}));var A=document.querySelector(".gallery"),O=function(t){var n=t.map((function(t){var n,a=t.poster_path,o=t.original_title,i=t.genre_ids,c=t.release_date,r=t.id,d=t.vote_average,l=i.map(T);return l.length>2&&(l="".concat(l[0],", ").concat(l[1],", Other")),n=a?"https://image.tmdb.org/t/p/w500/".concat(a):e(E),'<div class="film__card" data-id='.concat(r,'>\n        <a class="film__link link" href="" onclick="event.preventDefault()">\n          <img class="film__img" src=').concat(n,' alt="" data-id=').concat(r,' loading="lazy"/>\n          <div class="film__info">\n            <h3 class="film__title">\n              ').concat(o,'\n            </h3>\n            <div class="film__details">\n          <div class="film__genre">').concat(l,'</div>\n          <div class="film__year">').concat(c.substr(0,4),'</div>\n          <div class="film__rating">').concat(d.toFixed(1),"</div>\n          </div>\n          </div>\n        </a>\n      </div>")})).join("");A.innerHTML=n,F(c.default.page,c.default.total_pages)};A.addEventListener("click",(function(t){var e=t.target;if(!e.classList.contains("gallery")){(0,l.spinnerPlay)();var n=e.closest("[data-id]").getAttribute("data-id");c.default.getFilmsById(n).then((function(t){_.showBackdrop.classList.remove("is-hidden"),document.body.classList.add("modal-open");var e,n=S(t);_.modalDetail.innerHTML=n,u.default.currentlyOpenedFilm.filmData=t,function(t){x.apply(this,arguments)}({buttonWatched:(e={closeModalBtn:document.querySelector(".modal-detail__cross-frame"),modalDetail:document.querySelector("[data-detail-modal]"),moviePoster:document.querySelector(".movie-poster"),movieInfo:document.querySelector(".movie-data"),buttonWatched:document.querySelector(".button-watched"),buttonQueue:document.querySelector(".button-queue")}).buttonWatched,buttonQueue:e.buttonQueue,id:t.id}),e.closeModalBtn.addEventListener("click",y),e.buttonWatched.addEventListener("click",L),e.buttonQueue.addEventListener("click",w),e.moviePoster.addEventListener("click",s.openModalTrailer)})).catch((function(t){return console.log(t)})).finally((function(){document.body.classList.add("modal-open"),document.addEventListener("keydown",g),_.modalDetailBackdrop.addEventListener("click",h),(0,l.spinnerStop)()}))}}));l=i("eQLRL");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var e=t.currentTarget.elements.searchQuery.value.trim().toLowerCase();e?((0,l.spinnerPlay)(),c.default.getFilmsSearched(e).then((function(t){O(t.results)})).finally((function(){return(0,l.spinnerStop)()}))):((0,l.spinnerPlay)(),c.default.getFilmsPopular().then((function(t){O(t.results)})).finally((function(){return(0,l.spinnerStop)()})))})),i("XJkyI"),i("your5"),i("fDiVl"),i("ghI91"),i("aZhHc"),i("ijwS8"),i("2NTPx"),i("2oYM3")}();
//# sourceMappingURL=index.6e3421ee.js.map
