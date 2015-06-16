define(['react','underscore'], function(React,_) {
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		getInitialState: function() {
			return {
				Noticias:this.props.Noticias, 
			};
		},
		render: function() {
			var Items = _.map(this.state.FiltroCanTipo, function(num, key){ 
				
				return React.createElement(ItemCandidatos, {key: num.id_candidato, nombre: "Otros Partidos", imagen: "appmap/img/stock.jpg", ranking: parseFloat(100-RankingOtros).toFixed(2), partido: "OTROS"})

			});	
			return (
		     	React.createElement("div", null, "HOLA MAMA")
		    );
		}
	});
	window.React = React;
    return AppNoticiasCA;
});