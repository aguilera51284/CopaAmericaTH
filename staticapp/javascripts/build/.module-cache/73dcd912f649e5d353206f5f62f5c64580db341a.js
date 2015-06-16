define(['react','underscore'], function(React,_) {	
	var Image = React.createClass({displayName: "Image",
		getInitialState: function() {
			return {
			  loaded: false
			};
		},
		onImageLoad: function(e) {
			if (this.isMounted()) {
			  this.setState({loaded: true});
			}
		},
		componentDidMount: function() {
			var imgTag = this.refs.img.getDOMNode();
			var imgSrc = imgTag.getAttribute('src');
			var img = new window.Image();
			img.onload = this.onImageLoad;
			img.src = imgSrc;
			console.log(img);
		},
		render: function() {
			var className  = 'Animation_LoaderImage';
			if (this.state.loaded) {
			  className = ' Animation_LoaderImage--Load';
			  console.log(this)
			}
			return (
			  React.createElement("img", {ref: "img", src: this.props.img, className: className})
			);
		}
	});
	//**Componente Principal - Item de las noticias
	var FeedNoticia = React.createClass({displayName: "FeedNoticia",
		getInitialState: function() {
			return {
				visible:false 
			};
		},
		render: function() {
			return React.createElement("article", {className: "Componente_Article"}, 
						React.createElement("div", {className: "Loader_Noticias"}, 
		                    React.createElement("figure", null, React.createElement(Image, {img: this.props.img, alt: this.props.titulo})), 
		                    React.createElement("div", {className: "Loader_Noticias-Cont"}, 
		                        React.createElement("h1", null, this.props.titulo)
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
			var Items = _.map(this.state.Noticias, function(item,key){ 
				if (key==1) {
					return React.createElement(FeedNoticia, {key: item.clave, id_noticia: item.clave, img: item.grande, sumario: item.sumario, titulo: item.titulo, fecha: item.fecha})

				}
			});	
			return  React.createElement("div", {className: "ThoyCA_ContMain-MoPrincipal--React"}, 
						Items
		 			)
		}
	});
	window.React = React;
    return AppNoticiasCA;
});