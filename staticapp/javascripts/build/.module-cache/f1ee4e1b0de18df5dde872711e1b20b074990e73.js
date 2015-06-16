define(['react'], function(React) {
	var CommentBox = React.createClass({displayName: 'CommentBox',
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