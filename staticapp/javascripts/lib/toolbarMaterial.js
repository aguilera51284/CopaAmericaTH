;(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define(factory);
    } else if ( typeof exports === 'object' ) {
        module.exports = factory;
    } else {
        root.toolbarMaterial = factory(root);
    }
})(this, function (root) {
	'use strict';
	function toolbarMaterial(settings){
		/*Configuraciones*/
        this.selector = settings.selector ? document.querySelector(settings.selector) : false;
        this.bgcolor = settings.bgcolor || "#E0E0E0";
        this.duracion = settings.duracion || 1;
        this.efecto = settings.efecto || "default";
        this.lista = settings.lista ? document.querySelector(settings.lista) : false;
        this.filtar = settings.appFiltro;
        this._addevent();
        console.log(this.lista.offsetWidth);

	}
    toolbarMaterial.prototype._addevent = function() {
        document.addEventListener('click', function(e) {
               this.showToolbar(e);
            }.bind(this), false);
    };
    toolbarMaterial.prototype.showToolbar = function(e) {
        /*Edit el contenido*/
        if (e.target.className == "icon-edit"){
            ActualizarEstado(e.target);
        }
        if (e.target.parentNode === this.selector){
            var pageData = getOffset(this.selector);
            this.lista.style.left = (pageData.left+ e.target.parentNode.offsetWidth)+"px";
            this.lista.style.top = (pageData.top+ e.target.parentNode.offsetHeight)+"px";
            this.lista.style.backgroundColor = this.bgcolor;
            this.lista.className = "listaMunicipios dis-visible";
            TweenMax.set(this.lista, {transformOrigin:"0% 0%",scale:0 }); 
            // since scaleX and scaleY are the same you can just use scale
            TweenMax.to(this.lista, 0.4, {scale:1}); 
        }
        /*FUNCION CUANDO DAN CLICK EN LA LISTA DE SELECCION*/
        if (e.target.getAttribute("data-menuList")){
            /*Agregando efecto material*/
            var material_boton = new newDiv({
                "class":"circle",
                "height":e.target.offsetWidth+"px",
                "width":e.target.offsetWidth+"px",
                "position":"absolute",
                "top":"50%",
                "left":"50%",
                "margin-top":"-"+(e.target.offsetWidth/2)+"px",
                "margin-left":"-"+(e.target.offsetWidth/2)+"px",
                "background-color":"rgba(245, 245, 245, 0.4)",
                "border-radius":"50%"
            }); 
            e.target.appendChild(material_boton); 
            // since scaleX and scaleY are the same you can just use scale
            TweenMax.to(material_boton, 0.6, {scale:2,onComplete:Borrar_materialboton});
            /*Funcion Cambiar texto en el h3*/
   
    
            var municipio = document.querySelector(".mainMunicipio");
            municipio.innerHTML= e.target.getAttribute("data-realRealList"); 
            /*Funcion que activa el filtro*/
            var filtroMunicipio = e.target.getAttribute("data-menuList");
            this.filtar.arrange({filter:"."+filtroMunicipio.toLowerCase()});
        }
        if (e.target.parentNode != this.selector ) {
            if (e.target.getAttribute("data-menuList")){
                TweenMax.to(this.lista, 0.2, {delay:.4,scale:0});
            }
            else {
                 TweenMax.to(this.lista, 0.4, {delay:0,scale:0});
            }
        }

        event.stopPropagation();
    };
    /*
    * Actualizar el el porcentaje de cada candidato
    */
    function ActualizarEstado(target){
        var papa = findAncestor(target,"iso-item");
        
    }
    function findAncestor (el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }
    /**************************************
    ****Plugin AAQ| Crear Elementos en DOM
    **************************************/
        function newDiv(parametros){
            /*Contar los objetos: Object.keys(parametros).length
              Nombre de la llave : key
              Valor de la llave : parametros[llave];
            */
            var new_div = document.createElement('div');
            var new_styl ="";
            for (var key in parametros) {
                if (key == "id" || key == "class") {
                    new_div.setAttribute(key, parametros[key]);
                } else {
                    new_styl += key+":"+parametros[key]+";"; 
                    new_div.setAttribute("style", new_styl);
                }
                
            }
            return new_div;
        }
    /*Devuelve el valor del offsetTop y offsetLeft absolutos*/
    function getOffset(elem) {
        var top=0, left=0;
        while(elem) {
            top = top + parseInt(elem.offsetTop);
            left = left + parseInt(elem.offsetLeft);
            elem = elem.offsetParent;
        }
        return {top: top, left: left};
    }
    function Borrar_materialboton(){
        var papi = this.target.offsetParent;
        papi.removeChild(this.target);
    }
	return toolbarMaterial;
});