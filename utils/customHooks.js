/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * * */
/*                                                                                                */
/*   How does this hook work ? :                                                                  */
/*                                                                                                */
/*   When we click somewhere on the page, we need to check whether the clicked element is         */
/*   our current element (in our case, that is the Menu component) or if the clicked element      */
/*   contains the current element (for instance, our div that wraps our menu and hamburger icon). */
/*   If so, we don’t do anything, otherwise, we call a function, that we’ll name handler.         */
/*                                                                                                */
/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * * */

import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [ref, handler]);
};
