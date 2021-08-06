import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Burger/menu.module.scss';

const Menu = ({ sideMenuOpen, setSideMenuOpen, favMode, setFavMode }) => {
	const handleClick = (e) => {
		e.preventDefault();
		setFavMode((prevState) => !prevState);
		setSideMenuOpen(false);
	};

	return (
		<nav className={sideMenuOpen ? styles.active : styles.inactive}>
			<Link href="#">
				<a onClick={handleClick}>
					<span role="img" aria-label="Afficher/Masquer les favoris">
						⭐
					</span>
					{favMode ? 'Masquer' : 'Afficher'} les favoris
				</a>
			</Link>
		</nav>
	);
};
export default Menu;
