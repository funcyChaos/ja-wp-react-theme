	</div><!-- #content -->

	<footer id="colophon" class="site-footer footer-cell">
		<?php get_template_part( 'template-parts/footer/footer', 'widgets' ); ?>

    <a href="https://github.com/tinker-dot-bin" target="_blank"><i title="tinker-dot-bin" class="fas fa-code-branch fa-5x" aria-hidden="true"></i><span class="sr-only">tinker-dot-bin</span></a>
    <a href="https://www.instagram.com/austin_reilly_93/" target="_blank"><i title="@austin_reilly_93" class="fas fa-hashtag fa-5x" aria-hidden="true"></i><span class="sr-only">@austin_reilly_93</span></a>

		<div class="site-info">
			<?php $blog_info = get_bloginfo( 'name' ); ?>
			<?php
			if ( function_exists( 'the_privacy_policy_link' ) ) {
				the_privacy_policy_link( '', '<span role="separator" aria-hidden="true"></span>' );
			}
			?>
			<?php if ( has_nav_menu( 'footer' ) ) : ?>
				<nav class="footer-navigation" aria-label="<?php esc_attr_e( 'Footer Menu', 'reacttheme' ); ?>">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'menu_class'     => 'footer-menu',
							'depth'          => 1,
						)
					);
					?>
				</nav><!-- .footer-navigation -->
			<?php endif; ?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
