<?php
/**
 * DATAVORA INDONESIA Theme Functions and Definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package DATAVORA_INDONESIA
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Setup theme defaults and register support for various WordPress features.
 */
function datavora_theme_support() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1200, 675, true ); // 16:9 ratio for corporate cards

    // Enable support for full and wide align images.
    add_theme_support( 'align-wide' );

    // Enable responsive embedded content.
    add_theme_support( 'responsive-embeds' );

    // Enqueue editor styles for Gutenberg Block Editor.
    add_theme_support( 'editor-styles' );
    add_editor_style( 'assets/css/custom.css' );

    // HTML5 markup support
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );
}
add_action( 'after_setup_theme', 'datavora_theme_support' );

/**
 * Enqueue scripts and styles.
 */
function datavora_scripts() {
    // Google Fonts: Plus Jakarta Sans
    wp_enqueue_style(
        'datavora-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'datavora-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get( 'Version' )
    );

    // Custom CSS
    wp_enqueue_style(
        'datavora-custom',
        get_template_directory_uri() . '/assets/css/custom.css',
        array( 'datavora-style' ),
        wp_get_theme()->get( 'Version' )
    );

    // Custom JS for interactive elements
    wp_enqueue_script(
        'datavora-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'datavora_scripts' );

/**
 * Register custom Block Pattern Categories for DATAVORA.
 */
function datavora_register_pattern_categories() {
    $categories = array(
        'datavora-hero'       => array( 'label' => __( 'DATAVORA: Hero Sections', 'datavora-indonesia' ) ),
        'datavora-services'   => array( 'label' => __( 'DATAVORA: Core Services', 'datavora-indonesia' ) ),
        'datavora-about'      => array( 'label' => __( 'DATAVORA: About & Values', 'datavora-indonesia' ) ),
        'datavora-solutions'  => array( 'label' => __( 'DATAVORA: Business Solutions', 'datavora-indonesia' ) ),
        'datavora-process'    => array( 'label' => __( 'DATAVORA: 5-Step Process', 'datavora-indonesia' ) ),
        'datavora-portfolio'  => array( 'label' => __( 'DATAVORA: Case Studies & Portfolio', 'datavora-indonesia' ) ),
        'datavora-cta'        => array( 'label' => __( 'DATAVORA: Call to Action', 'datavora-indonesia' ) ),
        'datavora-contact'    => array( 'label' => __( 'DATAVORA: Contact & Forms', 'datavora-indonesia' ) ),
    );

    foreach ( $categories as $slug => $properties ) {
        register_block_pattern_category( $slug, $properties );
    }
}
add_action( 'init', 'datavora_register_pattern_categories' );

/**
 * Custom excerpt length for corporate blog posts
 */
function datavora_custom_excerpt_length( $length ) {
    return 28;
}
add_filter( 'excerpt_length', 'datavora_custom_excerpt_length', 999 );

/**
 * Custom excerpt ellipsis
 */
function datavora_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'datavora_excerpt_more' );
