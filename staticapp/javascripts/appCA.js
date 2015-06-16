requirejs.config({
    baseUrl: 'staticapp/javascripts/lib',
    urlArgs: "v="+(new Date()).getTime(),
});
require(['http://grupocanton.com/copaamerica/json_noticias.json?callback=define','domReady','react','../build/NoticiasReact'], function (Noticias,domReady,React,NoticiasReact) {
  domReady(function () {
    console.log("el DOOM ESTA LISTO");
    var DivContFeed = document.getElementById('FeedNoticias');
    AppFeedNoticias = React.createElement(NoticiasReact,{Noticias:Noticias['nota'],Indice:10});   
    React.render(AppFeedNoticias, DivContFeed);
  });// domready
});//require