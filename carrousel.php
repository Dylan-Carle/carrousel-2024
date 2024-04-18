<?php 
/**
 * Plugin Name: Carrousel
 * Description: Affiche un carrousel d'images par des boutons radios
 * Author: Dylan Carle
 * Version: 1.0
 */

 
function eddym_enqueue (){
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "sass/style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
    
    wp_enqueue_style(   'em_plugin_carrousel_css',
    plugin_dir_url(__FILE__) . "sass/style.css",
    array(),
    $version_css);
    
    wp_enqueue_script(  'em_plugin_carrousel_js',
    plugin_dir_url(__FILE__) ."js/carrousel.js",
    array(),
    $version_js,
    true); // True permet d'ajouter le script dans le footer
}

add_shortcode("boite", "boite_modale");

function  boite_modale(){
    $contenu = '<button class="bouton__ouvrir">Ouvrir</button>
    <div class="carrousel">
    <button class="carrousel__x">X</button>
    <figure class="carrousel__figure"></figure>
    <form class="carrousel__form"></form>
    </div>';
    return $contenu;
}

add_action('wp_enqueue_scripts', 'eddym_enqueue');