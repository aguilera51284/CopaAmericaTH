define(['react'], function(React) {
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		render: function() {
			return (
		     	React.createElement("div", null, "HOLA MAMA")
		    );
		}
	});

	window.React = React;
    return AppNoticiasCA;
});