define(['react','underscore','ImageLoader'], function(React,_,ImageLoader) {
	console.log(ImageLoader);
	var LazyLoadImg=React.createClass({displayName: "LazyLoadImg",
		componentDidUpdate: function() {
		    console.log("algoCambio");
  		},
  		render:function(){
  			return React.createElement(LazyLoadImg, {src: this.props.img})
  		}

	});
	var FeedNoticia = React.createClass({displayName: "FeedNoticia",
		getInitialState: function() {
			return {
				visible:false 
			};
		},
		componentWillMount:function(){
			console.log("imagen Cargada");
		},
		render: function() {
			return React.createElement("article", {className: "Componente_Article"}, 
						React.createElement("div", {className: "Loader_Noticias"}, 
		                    React.createElement("figure", null, React.createElement(LazyLoadImg, {img: this.props.img, alt: this.props.titulo})), 
		                    React.createElement("div", {className: "Loader_Noticias-Cont"}, 
		                        React.createElement("h1", null, this.props.titulo)
		                    )
		                )
	            	)
			
		}
	});
	//**Componente Principal - Recibe datos del ajax
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		getInitialState: function() {
			return {
				Noticias:this.props.Noticias, 
			};
		},
		render: function() {
			var Items = _.map(this.state.Noticias, function(item){ 
				return React.createElement(FeedNoticia, {key: item.clave, id_noticia: item.clave, img: item.grande, sumario: item.sumario, titulo: item.titulo, fecha: item.fecha})
			});	
			return  React.createElement("div", {className: "ThoyCA_ContMain-MoPrincipal--React"}, 
						Items
		 			)
		}
	});
	window.React = React;
    return AppNoticiasCA;
});