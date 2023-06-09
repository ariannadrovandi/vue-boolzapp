// import Picker from './emoji-picker';

const contacts = [
    {
        id:1,
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        id:2,
        name: 'Fabio',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        id:3,
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        id:4,
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        id:5,
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        id:6,
        name: 'Claudia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        id:7,
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        id:8,
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ]
        
    }
];

const dt = luxon.DateTime;

const {createApp} = Vue;

createApp ({
    data() {
        return{
            contacts: contacts,
            activeIndex: 0,
            showChat: false,
            newMessage: '',
            searchContactText: '',
            showEmoji: false,
            messageActive: {
                index : false,
                show : false
            },
            userMsg: [
                {
                    message: 'Ciao, come va?',
                    status: 'received'
                },
                {
                    message: 'Ci vediamo in questi giorni 😊',
                    status: 'received'
                },
                {
                    message: 'Ricordati di inviare la mail !',
                    status: 'received'
                },
                {
                    message: 'Noooo daii hahaha, non ci credooo',
                    status: 'received'
                },
                {
                    message: 'Seriamente? 👁️ 👄 👁️',
                    status: 'received'
                },
                {
                    message: 'Buonanotte 🩵',
                    status: 'received'
                }
            ],
            

        }
    },
    methods: {
        selectChat(index){
            this.activeIndex = index;
        },
        
        // aggiungo messaggi automatici casuali
        addMessage(activeIndex) {
            const newMsg = {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT),
                message: this.newMessage,
                status: 'sent',
            };
            // console.log(newMsg);
            this.contacts[this.activeIndex].messages.push(newMsg);
            this.newMessage = '';


            const newUserMsg = {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT),
                message: this.userMsg[getRandomInt(0, 5)].message,
                status: 'received',
            };
            // console.log(newUserMsg);

            setTimeout(()=> {
                this.contacts[this.activeIndex].messages.push(newUserMsg);
                this.$nextTick(()=>{
                    this.$refs.items[this.$refs.items.length -1].scrollIntoView()  //scroll chat
                });
            }, 1000);
            // console.log('setTimeout');
        },

        // filtro i contatti
        filterContacts() { 
            // console.log(this.searchContactText);
            this.contacts.forEach((contact)=> {
                if (!contact.name.toLowerCase().includes(this.searchContactText.toLowerCase())) {
                    contact.visible = false;
                } else {
                    contact.visible = true;
                    // console.log('true');
                }
            })
        },

        //opzioni messaggio
        showOptions(index) {
            // faccio in modo che si apra solo quello selezionato 
            if (this.messageActive.index !== false && this.messageActive.index !== index) {
                this.messageActive.show = false;
                this.messageActive.index = false;
            }
            this.messageActive.show = (this.messageActive.show) ? false : true;
            this.messageActive.index = index;
        },

        // emoji picker
        // onSelectEmoji(emoji) {
        //     console.log(emoji)
        //     this.messageText += emoji.i;
        //     /*
        //       // result
        //       { 
        //           i: "😚", 
        //           n: ["kissing face"], 
        //           r: "1f61a", // with skin tone
        //           t: "neutral", // skin tone
        //           u: "1f61a" // without tone
        //       }
        //       */
        // },

    },
    computed: {
        
    }

}).mount('#app');

// .component('Picker', Picker)

