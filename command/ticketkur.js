const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Oluşturulacak bilet türünü seçin.')
					.addOptions([
						{
							label: '🛑 | Genel',
							description: 'Genel için bir bilet açın.',
							value: 'genel',
						},
						{
							label: '📬 | Oyuncu Şikayet',
							description: 'Şikayet bileti aç ',
							value: 'şikayet',
						},
						{
							label: '❗️ | Item İade',
							description: 'item iade bileti aç ',
							value: 'iade',
						},
						{
							label: '❓ | Yardım',
							description: 'Bug Bildirim bileti aç ',
							value: 'yardım',
						},
                                                {
							label: '🆘 | Yetkili Alım',
							description: 'Yetkili alım başvurusunda bulunmak için bir bilet açın',
							value: 'yetkili',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet Açın',
                description: '**__Bir Bilet Nasıl Açılır :__**\nLütfen açmak istediğiniz bilet türünü seçin.',
                color: "RED",
                footer: {text: 'Celestial. Ticket'}
            }],
            components: [row]
        })
    }
}
