define(['react','underscore'], function(React,_) {	
	var Image = React.createClass({
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
		onImageError:function(e){
			console.log(e.target);
		},
		componentDidMount: function() {
			var imgTag = this.refs.img.getDOMNode();
			var imgSrc = imgTag.getAttribute('src');
			var img = new window.Image();
			img.onload = this.onImageLoad;
			img.onerror  = this.onImageError;
			img.src = imgSrc;
		},
		render: function() {
			var className  = 'Animation_LoaderImage';
			var alt = this.props.alt;
			if (this.state.loaded) {
			  className = ' Animation_LoaderImage--Load';

			}
			return (
			  <img ref="img" src={this.props.img} className = {className} alt={alt}  />
			);
		}
	});
	//**Componente Principal - Item de las noticias
	var FeedNoticia = React.createClass({
		getInitialState: function() {
			return {
				visible:false 
			};
		},
		render: function() {
			return <article className="Componente_Article">
						<div className="Loader_Noticias">
		                    <figure><Image img={this.props.img} alt={this.props.titulo}/></figure>
		                    <div className="Loader_Noticias-Cont">
		                        <h1>{this.props.titulo}</h1>
		                        <p>{this.props.sumario}</p>
		                        <div className="Noticias_Actions">
		                        	<span>{this.props.fecha}</span>
		                        	<a href={"Nota.php?ID="+this.props.id_noticia}>Leer Mas</a>
		                        </div>
		                    </div>
		                </div>
	            	</article>		
		}
	});
	//**Componente Principal - Recibe datos del ajax
	var AppNoticiasCA = React.createClass({displayName: 'AppNoticiasCA',
		getInitialState: function() {
			var TamDatos = _.size(this.props.Noticias);
			return {
				Noticias:this.props.Noticias,
				Indice:this.props.Indice,
				TamDatos:TamDatos,
			};
		},
		Paginacion:function(e){
			var NuevoIndice = this.state.Indice+10;
			this.setState({Indice:NuevoIndice});
			if (this.state.Indice >= this.state.TamDatos){
				e.target.className = e.target.className + " CargarMas--Disable";
				e.target.innerHTML = "Sin Notas"
			}
		},
		render: function() {
			var Paginacion = _.first(this.props.Noticias,[this.state.Indice]);
			var Items = _.map(Paginacion, function(item,key){ 
				var url = "";
				if (item.grande == null || item.grande == ""  ){
					url = item.mediana;
				
				}
				else{
					url = item.grande;
				}

				return <FeedNoticia key={item.clave} id_noticia={item.clave} img={url} sumario={item.sumario} titulo ={item.titulo} fecha ={item.fecha} />
				
			});	
			return  <div className='ThoyCA_ContMain-MoPrincipal--React'> 
						{Items}
						<div  onClick={this.Paginacion} className="MoPrincipal--CargarMas">
							Ver Mas Notas
						</div>
		 			</div>
		}
	});
	window.React = React;
    return AppNoticiasCA;
});