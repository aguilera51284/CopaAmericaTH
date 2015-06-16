define(['react','underscore'], function(React,_) {
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		getInitialState: function() {
			return {
				Noticias:this.props.Noticias, 
			};
		},
		render: function() {
			var Items = _.map(this.state.Noticias, function(num, key){ 
				
				console.log(num);

			});	
			return (
		     	React.createElement("div", null, "HOLA MAMA")
		    );
		}
	});
	window.React = React;
    return AppNoticiasCA;
});