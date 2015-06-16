<?php 
    /* Convierte objeto json en arreglo */
    function obj_ArrRecursivo($objeto) {
      if(is_object($objeto)) $objeto=get_object_vars($objeto);
      if(is_array($objeto)) {
        foreach($objeto as $key=>$v) {
          $objeto[$key] = obj_ArrRecursivo($objeto[$key]);
        }
      }
      return $objeto;
    }
    /* Trae remotamente un archivo desde la web*/
    function geturl($url){
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_URL,$url);
        $datos = curl_exec($curl);
        curl_close($curl);
        return $datos;

    };
    /**Recientes**/
    $Nota = geturl("http://www.tabascohoy.com/2/includes/servicios/datos/noticias/json_".$_GET['ID'].".php");
    $Nota = obj_ArrRecursivo(json_decode($Nota));


?>
<!doctype html>
<html class="no-js" lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- 
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        Place favicon.ico in the root directory -->
        <link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="staticapp/bower_components/normalize.css/normalize.css">
        <link rel="stylesheet" href="staticapp/stylesheets/cathoy.css">
        <script src="staticapp/javascripts/lib/modernizr.custom.21882.js"></script>

    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">Tu estas usando<strong> MUY VIEJO </strong> navegador. Por favor <a href="http://browsehappy.com/">actualiza a uno de estos </a> para mejorar tu experiencia en la web :).</p>
        <![endif]-->

        <!-- HEADER -->
        <header>
            <!-- Nav -->
            <nav>
                <!-- Logo - Copa America / TabascoHoy -->
                <div class="logo">TABASCO HOY ESPECIAL</div>
                <!-- Menu -->
                <ul>
                    <li>LA COPA  <div class="Animations-HoverNav"></div></li>
                    <li>PROGRAMA <div class="Animations-HoverNav"></div></li>
                    <li>MEDIA    <div class="Animations-HoverNav"></div></li>
                </ul>

            </nav>
        </header>

        <!-- ThoyCA -->
        <section class="ThoyCA">
            <div class="ThoyCA_Nota">
                <h1><?php  echo $Nota['titulo'];?></h1>
                <div class="ThoyCA_Nota-Cont">
                    <figure>
                        <img src="<?php  echo $Nota['imagen'];?>" alt="">
                    </figure>
                    <h2><?php  echo $Nota['sumario'];?></h2>
                    <?php  echo $Nota['contenido'];?>

                </div>
            </div>
        </section>
        

    
    
    </body>
</html>
