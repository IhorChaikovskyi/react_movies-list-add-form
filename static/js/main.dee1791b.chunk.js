(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var n=i(7),a=i.n(n),c=(i(15),i(10)),r=i(3),s=(i(16),i(1)),l=(i(17),i(18),i(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},m=i(2),b=i(8),j=i.n(b);var u=function(e){var t=e.name,i=e.value,n=e.label,a=void 0===n?t:n,c=e.required,o=void 0!==c&&c,d=e.onChange,m=void 0===d?function(){}:d,b=Object(s.useState)((function(){return"".concat(t,"-").concat(Math.random().toString().slice(2))})),u=Object(r.a)(b,1)[0],h=Object(s.useState)(!1),g=Object(r.a)(h,2),O=g[0],p=g[1],v=O&&o&&!i;return Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:u,children:a}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{id:u,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":v}),type:"text",placeholder:"Enter ".concat(a),value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){return p(!0)}})}),v&&Object(l.jsx)("p",{className:"help is-danger",children:"".concat(a," is required")})]})},h=function(e){var t=e.onAdd,i=Object(s.useState)(0),n=Object(r.a)(i,2),a=n[0],c=n[1],o=Object(s.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),d=Object(r.a)(o,2),b=d[0],j=d[1],h=function(e){return""===e.title.trim()||""===e.imdbId.trim()||""===e.imdbUrl.trim()||""===e.imgUrl.trim()};return Object(l.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),h(b)||(c(a+1),j({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),t(b))},children:[Object(l.jsx)("h2",{className:"title",children:"Add a movie"}),Object(l.jsx)(u,{name:"title",label:"Title",value:b.title,onChange:function(e){return j((function(t){return Object(m.a)(Object(m.a)({},t),{},{title:e})}))},required:!0}),Object(l.jsx)(u,{name:"description",label:"Description",value:b.description,onChange:function(e){return j((function(t){return Object(m.a)(Object(m.a)({},t),{},{description:e})}))}}),Object(l.jsx)(u,{name:"imgUrl",label:"Image URL",value:b.imgUrl,onChange:function(e){return j((function(t){return Object(m.a)(Object(m.a)({},t),{},{imgUrl:e})}))},required:!0}),Object(l.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:b.imdbUrl,onChange:function(e){return j((function(t){return Object(m.a)(Object(m.a)({},t),{},{imdbUrl:e})}))},required:!0}),Object(l.jsx)(u,{name:"imdbId",label:"Imdb ID",value:b.imdbId,onChange:function(e){return j((function(t){return Object(m.a)(Object(m.a)({},t),{},{imdbId:e})}))},required:!0}),Object(l.jsx)("div",{className:"field is-grouped",children:Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:h(b),children:"Add"})})})]},a)},g=i(9),O=function(){var e=Object(s.useState)(g),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:i})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{onAdd:function(e){n((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};a.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.dee1791b.chunk.js.map