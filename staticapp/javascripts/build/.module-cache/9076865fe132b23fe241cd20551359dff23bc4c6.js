define(['react'], function(React) {
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		  render: function() {
		    return (
		      React.createElement('div', {className: "commentBox"},
		        "Hello, world! I am a CommentBox."
		      )
		    );
		  }
	});

	window.React = React;
    return CommentBox;
});