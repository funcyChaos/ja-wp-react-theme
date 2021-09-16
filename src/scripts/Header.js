import React from 'react';

function Header()
{
	return(
		<nav className="nav-cell" id="nav-cell-change">
			<h2>a-reilly.dev</h2>
			<div className="column nav-items" id="nav-id">
				<ul>
					<li>
						<a href="index.html" className="current-nav">home</a>
					</li>
					<li>
						<a href="blog.html">blog</a>
					</li>
					<li>
						<a href="page.html">about</a>
					</li>
					<li>
						<a href="#">contact</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Header