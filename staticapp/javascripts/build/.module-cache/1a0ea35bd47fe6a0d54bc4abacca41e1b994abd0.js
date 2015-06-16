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
		},
		render: function() {
			var className  = 'Animation_LoaderImage';
			var alt = this.props.alt;
			if (this.state.loaded) {
			  className = ' Animation_LoaderImage--Load';

			}
			return (
			  React.createElement("img", {ref: "img", src: this.props.img, className: className, alt: alt})
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
		                        React.createElement("h1", null, this.props.titulo), 
		                        React.createElement("p", null, this.props.sumario), 
		                        React.createElement("div", {className: "Noticias_Actions"}, 
		                        	React.createElement("span", null, this.props.fecha), 
		                        	React.createElement("a", {href: ""}, "Leer Mas")
		                        )
		                    )
		                )
	            	)		
		}
	});
	//**Componente Principal - Recibe datos del ajax
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		getInitialState: function() {
			var TamDatos = _.size(this.props.Noticias);
			console.log(TamDatos);
			return {
				Noticias:this.props.Noticias,
				Indice:this.props.Indice
			};
		},
		Paginacion:function(){
			
		},
		render: function() {
			var Paginacion = _.first(this.props.Noticias,[this.state.Indice]);
			var Items = _.map(Paginacion, function(item,key){ 
					
				return React.createElement(FeedNoticia, {key: item.clave, id_noticia: item.clave, img: item.grande, sumario: item.sumario, titulo: item.titulo, fecha: item.fecha})
				
			});	
			return  React.createElement("div", {className: "ThoyCA_ContMain-MoPrincipal--React"}, 
						Items, 
						React.createElement("div", {onClick: this.Paginacion, className: "MoPrincipal--CargarMas"}, 
							"Ver Mas Notas"
						)
		 			)
		}
	});
	window.React = React;
    return AppNoticiasCA;
});