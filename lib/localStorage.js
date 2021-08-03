/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */
/*                                                                       */
/*              Custom functions to handle localStorage                  */
/*                                                                       */
/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */

// Toggle card ID in localStorage
export function setFav(id) {
	const currFav = JSON.parse(localStorage.getItem('favList')) || [];

	if (currFav.indexOf(id) === -1) {
		localStorage.setItem('favList', JSON.stringify([...currFav, id]));
		return;
	}
	const newFav = currFav.filter((e) => e !== id);
	localStorage.setItem('favList', JSON.stringify(newFav));
}

// Check if ID exist in localStorage
export function checkId(id) {
	const favList = JSON.parse(localStorage.getItem('favList')) || [];
	if (favList.indexOf(id) > -1) {
		return true;
	}
}
