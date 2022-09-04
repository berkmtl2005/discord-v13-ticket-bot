const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
const { kategori, yetkili } = require('../config.json');
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Bileti silmek için seçin!')
					.addOptions([
						{
							label: '🔥 Silinen bilet',
							description: 'Kanalı sil',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = kategori
        let roleStaff = interaction.guild.roles.cache.get(yetkili)

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
              
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '<:celestial_onay:1005235245550936165> Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
            if (interaction.values[0] == "genel") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const yetkili = new MessageEmbed()
                    .setTitle('Genel için bilet')
                    .setDescription('Konuyu belirtiniz. Moderatörlerimiz ilgilenicektir.')
                    .setFooter('Celestial. Ticket')
                    c.send({embeds: [yetkili], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:celestial_onay:1005235245550936165> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "şikayet") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const şikayet = new MessageEmbed()
                    .setTitle('Şikayet için bilet')
                    .setDescription('Lütfen şikayetinizi detaylandırın ki bir sunucu moderatörü gelip ilgilensin.')
                    .setFooter('Celestial. Ticket')
                    c.send({embeds: [şikayet], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:celestial_onay:1005235245550936165> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "iade") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('İtem iade için bilet')
                    .setDescription('Lütfen item iade talebi sebebini belirtiniz ve itemlerinizi belirtiniz yetkililer ilgilenicektir.')
                    .setFooter('Celestial. Ticket')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:celestial_onay:1005235245550936165> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '<:celestial_onay:1005235245550936165> Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
            if (interaction.values[0] == "yardım") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const yetkili = new MessageEmbed()
                    .setTitle('Yardım için bilet')
                    .setDescription('Yardım istediğiniz konuyu belirtiniz. Rehberlerimiz ilgilenicektir.')
                    .setFooter('Celestial. Ticket')
                    c.send({embeds: [yetkili], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:celestial_onay:1005235245550936165> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })                
            
        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '<:celestial_onay:1005235245550936165> Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
            if (interaction.values[0] == "yetkili") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const yetkili = new MessageEmbed()
                    .setTitle('Yetkili alım için bilet')
                    .setDescription('Lütfen adminimizin sizle iletişime geçmesini bekleyiniz.')
                    .setFooter('Celestial. Ticket')
                    c.send({embeds: [yetkili], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:celestial_onay:1005235245550936165> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
            }
        }
    }
}
