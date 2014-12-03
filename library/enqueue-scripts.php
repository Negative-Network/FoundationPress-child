<?php

function FoundationPress_scripts() {

    // deregister the jquery version bundled with wordpress
    wp_deregister_script('jquery');

	// register scripts
	wp_register_script( 'modernizr', get_template_directory_uri() . '/js/modernizr/modernizr.min.js', array(), '1.0.0', false );
    wp_register_script( 'jquery', get_template_directory_uri() . '/js/jquery/dist/jquery.min.js', array(), '1.0.0', false );
	wp_register_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.min.js', array('jquery','modernizr'), '1.0.0', true );

	// enqueue scripts
	wp_enqueue_script('custom');

    if (getenv('WP_ENV') == 'development')
    {
    	wp_register_script( 'init-livereload', get_template_directory_uri() . '/js/init-livereload.js', array('jquery'), '1.0.0', true );
    	wp_enqueue_script('init-livereload');
    }
}

add_action('wp_enqueue_scripts', 'FoundationPress_scripts');
?>