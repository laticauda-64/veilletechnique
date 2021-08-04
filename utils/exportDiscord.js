/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */
/*                                                                       */
/*              Export data from Json file with some    		         */
/*              filtering to reduce weight...		                     */
/*  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  */

import data from '../data/developpeurwebjunior.json';

export function getCleanData() {
	// Filter links with preview tag only (img/desc) : (Open Graph Meta Tags, Twitter card, etc...)
	const filterNoEmptyLinks = data.messages.filter((e) => e.embeds.length > 0);

	// Delete useless property to reduce weight
	const filterDeleteUselessFields = filterNoEmptyLinks.map((e) => {
		delete e.type;
		delete e.timestampEdited;
		delete e.callEndedTimestamp;
		delete e.isPinned;
		delete e.content;
		delete e.author.id;
		delete e.author.name;
		delete e.author.discriminator;
		delete e.author.color;
		delete e.author.isBot;
		delete e.author.avatarUrl;
		delete e.attachments;
		delete e.reactions;
		delete e.mentions;

		return e;
	});

	// Sort results from newest to older
	return filterDeleteUselessFields.sort(
		(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
	);
}
