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
							label: '❤️ | Item İade',
							description: 'Bir iade bileti açın.',
							value: 'iade',
						},
						{
							label: '📬 | Oyuncu Şikayet',
							description: 'Şikayet bileti aç ',
							value: 'şikayet',
						},
						{
							label: '❗️ | Bug Bildirim',
							description: 'Bug Bildirim bileti aç ',
							value: 'bug',
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
						{
							label: '🛑 | Genel',
							description: 'Genel için bir bilet açın',
							value: 'genel',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet Açın',
                description: '**__Bir Bilet Nasıl Açılır :__**\nLütfen açmak istediğiniz bilet türünü seçin.',
                color: "RED",
                footer: {text: 'TheTomenTosaDev. Ticket'}
            }],
            components: [row]
        })
    }
}
