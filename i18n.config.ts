
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            language: {
                input_text: "Select your language",
                english: "English",
                french: "French"
            },
            "welcome": 'Welcome',
            jumbotron: {
                title: "Together we can build the future of sustainble transportation.",
                subtitle: "Join the biggest community of sustainable transportation enthusiasts and help us build the future of transportation",
                get_started: "Get Started",
                learn_more: "Learn More"
            },
            footer: {
                message: "Copyright { currentYear } - Made with  &#{emojiCode}; Transet Team"
            }

        },
        fr: {
            "welcome": 'Bienvenue',
            jumbotron: {
                title: "Ensemble, nous pouvons construire l'avenir du transport durable.",
                subtitle: "Rejoignez la plus grande communauté d'enthousiastes du transport durable et aidez-nous à construire l'avenir du transport",
                get_started: "Commencer",
                learn_more: "En savoir plus"
            },
            footer: {
                message: "Droits d'auteur { currentYear } - d&#233;velopper avec  &#{emojiCode}; &#233;quipe  Transet"
            },
            language: {
                input_text: "Choisissez votre langue",
                english: "Anglais",
                french: "Fran&#231;ais" ,
            }
        }
    }
})) 