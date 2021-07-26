//@ts no-check

import data from '../data/developpeurwebjunior.json';

export function getCleanData() {
	const filterNoEmptyLinks = data.messages.filter((e) => e.embeds.length > 0);

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

	return filterDeleteUselessFields;
}
