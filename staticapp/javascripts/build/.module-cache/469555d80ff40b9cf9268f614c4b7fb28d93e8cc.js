define(['react','underscore'], function(React,_) {
	
	var FeedNoticia = React.createClass({displayName: "FeedNoticia",
		getInitialState: function() {
			return {
				visible:false 
			};
		},
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
		     	React.createElement("div", null, "HOLA MAMA")
		    );
		}
	});
	window.React = React;
    return AppNoticiasCA;
});