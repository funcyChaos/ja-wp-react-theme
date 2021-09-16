<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <!-- Font Awesome Link -->
		<script src="https://kit.fontawesome.com/aebdbe8212.js" crossorigin="anonymous"></script>
  </head>

  <body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
    <div id="page" class="site grid-container-index">
      <a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'reacttheme' ); ?></a>

      <header id="masthead" class="nav-cell <?php echo is_singular() ? 'site-header featured-image' : 'site-header'; ?>">
      
        <?php get_template_part( 'template-parts/header/site', 'branding' ); ?>

        <?php if ( is_singular() ) : ?>
          <div class="site-featured-image">
            <?php
              reacttheme_post_thumbnail();
              the_post();
              $discussion = ! is_page() ? reacttheme_get_discussion_data() : null;

              $classes = 'entry-header';
            if ( ! empty( $discussion ) && absint( $discussion->responses ) > 0 ) {
              $classes = 'entry-header has-discussion';
            }
            ?>
            <div class="<?php echo $classes; ?>">
              <?php get_template_part( 'template-parts/header/entry', 'header' ); ?>
            </div><!-- .entry-header -->
            <?php rewind_posts(); ?>
          </div>
        <?php endif; ?>
      </header><!-- #masthead -->

      <div class="hero-cell">
        <h2>Why does Peter Pan always fly?</h2>
        <div>
          <h2 class="align-self-end">Because he never lands.</h2>
          <h2 class="align-self-end">haha, that joke never gets old...</h2>
        </div>
      </div>

      <div id="content" class="site-content main-content-cell align-items-center justify-space-between">