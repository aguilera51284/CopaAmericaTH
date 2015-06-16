define(['react','underscore'], function(React,_) {
	
	var Image = React.createClass({displayName: "Image",
  getInitialState: function() {
    return {
      loaded: false
    };
  },

  onImageLoad: function() {
    if (this.isMounted()) {
      this.setState({loaded: true});
    }
  },

  componentDidMount: function() {
    var imgTag = this.refs.img.getDOMNode();
    var imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  },

  render: function() {
    var {className, ...props} = this.props;
    var imgClasses = 'image';
    if (this.state.loaded) {
      imgClasses = joinClasses(imgClasses, 'image-loaded');
    }
    return (
      React.createElement("img", React.__spread({ref: "img"},  props, {className: joinClasses(className, imgClasses)}))
    );
  }
});
	var FeedNoticia = React.createClass({displayName: "FeedNoticia",
		getInitialState: function() {
			return {
				visible:false 
			};
		},
		componentWillMount:function(){
			console.log("imagen Cargada");
		},
		render: function() {
			return React.createElement("article", {className: "Componente_Article"}, 
						React.createElement("div", {className: "Loader_Noticias"}, 
		                    React.createElement("figure", null, React.createElement(LazyLoadImg, {img: this.props.img, alt: this.props.titulo})), 
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
			var Items = _.map(this.state.Noticias, function(item){ 
				return React.createElement(FeedNoticia, {key: item.clave, id_noticia: item.clave, img: item.grande, sumario: item.sumario, titulo: item.titulo, fecha: item.fecha})
			});	
			return  React.createElement("div", {className: "ThoyCA_ContMain-MoPrincipal--React"}, 
						Items
		 			)
		}
	});
	window.React = React;
    return AppNoticiasCA;
});