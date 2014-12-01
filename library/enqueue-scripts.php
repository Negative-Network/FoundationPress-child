<?php

function FoundationPress_scripts() {

    // deregister the jquery version bundled with wordpress
    wp_deregister_script( 'jquery' );

    // register scripts
    // wp_register_script( 'modernizr', get_template_directory_uri() . '/js/modernizr/modernizr.min.js', array(), '1.0.0', false );
    // wp_register_script( 'jquery', get_template_directory_uri() . '/js/jquery/dist/jquery.min.js', array(), '1.0.0', false );
    // wp_register_script( 'foundation', get_template_directory_uri() . '/js/app.js', array('jquery'), '1.0.0', true );
    
    wp_register_script( 'base', get_stylesheet_directory_uri() . '/js/base.min.js', array(), '1.0.0', false );
    // wp_register_script( 'foundation', get_stylesheet_directory_uri() . '/js/foundation/js/foundation.min.js', array('base'), '1.0.0', true );
    wp_register_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.min.js', array('base'), '1.0.0', true );
    
    // wp_register_script( 'app', get_stylesheet_directory_uri() . '/js/app.min.js', array(), '1.0.0', false );

    // enqueue scripts
    // wp_enqueue_script('modernizr');
    // wp_enqueue_script('jquery');
    // wp_enqueue_script('foundation');
    
    wp_enqueue_script('base');
    // wp_enqueue_script('foundation');
    wp_enqueue_script('custom');
    
    // wp_enqueue_script('app');
    
    if (getenv('WP_ENV') == 'development')
    {
        wp_enqueue_script('init-livereload', get_template_directory_uri() . '/js/init-livereload.js', array('base'), false, true);
    }

}

add_action( 'wp_enqueue_scripts', 'FoundationPress_scripts' );


?>
