var app = new Vue({
    el: '#app',
    data: () => ({
        phrase: '',
        xoni: '',
        isClicked: false, // ✅ Tracks button click animation
        randomAd: '' // ✅ Stores the random ad image path
    }),
    created() {
        // Load saved phrase from session storage
        const s = sessionStorage.getItem('p');
        this.phrase = s ? s : 'Hola mundo! Te trae aqui la arqueologia o la nostalgia millenial?';
        this.xoni = xoniza(this.phrase);

        // List of spam images in the "spam" folder
        const spamImages = [
            'spam/ad1.jpg',
            'spam/ad2.jpg',
            'spam/ad3.jpg',
            'spam/ad4.jpg',
            'spam/ad5.jpg'
        ];

        // Pick a random image from the list
        this.randomAd = spamImages[Math.floor(Math.random() * spamImages.length)];
    },
    methods: {
        xonizeText() {
            this.isClicked = true; // ✅ Activates button effect
            this.xoni = xoniza(this.phrase);
            sessionStorage.setItem('p', this.phrase);

            // Reset effect after 150ms
            setTimeout(() => {
                this.isClicked = false;
            }, 150);
        }
    }
});
