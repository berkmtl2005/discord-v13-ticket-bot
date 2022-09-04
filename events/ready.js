module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`${client.user.username} Giriş Yapıldı`)

        var KARISIKDURUM = 1
        setInterval(async () => {
            status =  [`Ben Laves`, `Celestial.`, `<3`]
            KARISIKDURUM = (KARISIKDURUM + 2) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[KARISIKDURUM]}`,
                    type: "PLAYING",
                  }],
                  status: "online"})
        }, 5000);
    }
}
