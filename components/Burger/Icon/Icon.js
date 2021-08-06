import React from 'react';
import styles from '../../../styles/Burger/burger.module.scss';

const Burger = ({ open, setOpen }) => {
	return (
		<button
			open={open}
			onClick={() => setOpen(!open)}
			className={open ? styles.active : styles.inactive}
		>
			<div />
			<div />
			<div />
		</button>
	);
};

export default Burger;
