define(['react','underscore'], function(React,_) {
	
	var FeedNoticia = React.createClass({displayName: "FeedNoticia",
		getInitialState: function() {
			return {
				visible:false 
			};
		},
		render: function() {
			return (
				React.createElement("article", {class: "Componente_Article"}, 
					React.createElement("div", {class: "Loader_Noticias"}, 
	                    React.createElement("figure", null, React.createElement("img", {src: this.props.img, alt: ""})), 
	                    React.createElement("div", {class: "Loader_Noticias-Cont"}, 
	                        React.createElement("div", {class: "L-sh1"}), 
	                        React.createElement("div", {class: "L-sh2"}), 
	                        React.createElement("div", {class: "L-sh2"}), 
	                        React.createElement("div", {class: "L-sh2"}), 
	                        React.createElement("div", {class: "L-sh2"}), 
	                        React.createElement("div", {class: "L-sbu"})
	                    )
	                )
	            )
			);
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
			var Items = _.map(this.state.Noticias, function(item, key){ 
				React.createElement(FeedNoticia, {key: item.clave, id_noticia: item.clave, img: item.mediana, sumario: item.sumario, titulo: item.titulo, fecha: item.fecha})
			});	
			return (
		     	{Items}
		    );
		}
	});
	window.React = React;
    return AppNoticiasCA;
});