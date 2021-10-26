<?php

function reacttheme_load_assets() {
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
	
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'reacttheme_load_assets');

function reacttheme_add_support() {
  add_theme_support('custom-logo');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  
  register_nav_menu('Primary', 'Main Menu');
}

add_action('after_setup_theme', 'reacttheme_add_support');

function wp_menu_route() {
	$mainMenu = wp_get_nav_menu_name('Primary');
	// Get the array of wp objects, the nav items for our queried location.
  return wp_get_nav_menu_items($mainMenu);
}

add_action( 'rest_api_init', function () {
  //https://your-wp-domain-url.com/wp-json/menu
  register_rest_route( 'menu', '/primary', array(
    'methods' => 'GET',
    'callback' => 'wp_menu_route',
  ) );
} );