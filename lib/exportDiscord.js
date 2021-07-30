import data from '../data/developpeurwebjunior.json';

export function getCleanData() {
	// Retourne uniquement les liens comportant une miniature (Open Graph Meta Tags, Twitter card, etc...)
	const filterNoEmptyLinks = data.messages.filter((e) => e.embeds.length > 0);

	// Suppression propriétés inutile pour gagner sur le poids de la page
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

	// Renvoi la liste des résustats du plus récent au plus ancien
	return filterDeleteUselessFields.sort(
		(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
	);
}
