define(['react','underscore'], function(React,_) {
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		render: function() {
			return (
		     	React.createElement("div", null, "HOLA MAMA")
		    );
		}
	});
	console.log(_)
	window.React = React;
    return AppNoticiasCA;
});