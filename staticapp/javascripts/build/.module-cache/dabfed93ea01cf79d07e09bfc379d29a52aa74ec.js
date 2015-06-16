define(['react','underscore'], function(React,_) {
	
	var LazyLoadImg=React.createClass({displayName: "LazyLoadImg",
		componentDidUpdate: function() {
		    console.log("algoCambio");
  		},
  		render:function(){
  			return React.createElement("img", {src: this.props.img, alt: this.props.alt})
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
		                        React.createElement("div", {className: "L-sh1"}), 
		                        React.createElement("div", {className: "L-sh2"}), 
		                        React.createElement("div", {className: "L-sh2"}), 
		                        React.createElement("div", {className: "L-sh2"}), 
		                        React.createElement("div", {className: "L-sh2"}), 
		                        React.createElement("div", {className: "L-sbu"})
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