import React from 'react';
import Icon from './Icon/Icon';
import Menu from './Menu/Menu';

const Burger = React.forwardRef(
	({ sideMenuOpen, setSideMenuOpen, favMode, setFavMode }, ref) => (
		<div ref={ref}>
			<Icon open={sideMenuOpen} setOpen={setSideMenuOpen} />
			<Menu
				sideMenuOpen={sideMenuOpen}
				setSideMenuOpen={setSideMenuOpen}
				favMode={favMode}
				setFavMode={setFavMode}
			/>
		</div>
	)
);

export default Burger;
