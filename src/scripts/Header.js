import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header({ name, description, site_logo })
{
  const [logo, setLogo] = useState([]);
  const [primaryMenu, setPrimaryMenu] = useState([]);

  useEffect(
    () => {
      if(site_logo) {
        const amediaApiUrl = `http://reacttheme.local/wp-json/wp/v2/media/${site_logo}`;
        axios.get(amediaApiUrl).then((response) => {
          const logoData = response.data;
          setLogo(logoData);
        });
      }
      const menuApiUrl = `http://reacttheme.local/wp-json/menu/primary`;
      axios.get(menuApiUrl).then((response) => {
        const menuData = response.data;
        setPrimaryMenu(menuData);
      });
    },
    [axios, site_logo, setLogo, setPrimaryMenu]
  );

  // console.log('Logo', logo.media_details);
  // console.log('Primary Menu', primaryMenu);

	return(
		<nav className="nav-cell" id="nav-cell-change">
      {logo &&
        <img
          src={logo.source_url}
          alt={logo.alt_text}
          style={{width: "70px", height: "60px"}}
        />
      }
			<h2>{name}
        {description && 
          <div><small>{description}</small></div>
        }
      </h2>
			<div className="column nav-items" id="nav-id">
				<ul id="menu-main-menu">
          {primaryMenu &&
            primaryMenu.map((item, index) => (
              <li className={`menu-item menu-item-type-${item.post_type} menu-item-object-${item.object} menu-item-${item.post_name}${(window.location.href === item.url)?'current-menu-item current_page_item':''} page_item page-item-${item.ID} menu-item-${item.menu_order}`} key={index}>
                <a href={item.url}>&lt;{item.title.toLowerCase()}&gt;</a>
              </li>
            ))
          }
				</ul>
			</div>
		</nav>
	)
}

export default Header