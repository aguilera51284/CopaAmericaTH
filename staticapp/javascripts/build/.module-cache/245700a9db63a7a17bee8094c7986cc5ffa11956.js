define(['react','underscore'], function(React,_) {
	
	var FeedNoticia = React.createClass({displayName: "FeedNoticia",
		getInitialState: function() {
			return {
				visible:false 
			};
		},
		render: function() {
			return React.createElement("article", {className: "Componente_Article"}, 
						React.createElement("div", {className: "Loader_Noticias"}, 
		                    React.createElement("figure", null, React.createElement("img", {src: this.props.img, alt: this.props.titulo})), 
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
				React.createElement(FeedNoticia, {key: item.clave, id_noticia: item.clave, img: item.mediana, sumario: item.sumario, titulo: item.titulo, fecha: item.fecha})
			});	
			console.log(Items)
			return  React.createElement("div", null, 
						Items
		 			)
		}
	});
	window.React = React;
    return AppNoticiasCA;
});