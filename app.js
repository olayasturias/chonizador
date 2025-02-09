var app = new Vue({
    el: '#app',
    data: () => ({
        phrase: '',
        xoni: '',
        isClicked: false // ✅ Add this to make it reactive
    }),
    created() {
        const s = sessionStorage.getItem('p');
        this.phrase = s ? s : 'Hola mundo! Te trae aqui la arqueologia o la nostalgia millenial?';
        this.xoni = xoniza(this.phrase);
    },
    methods: {
        xonizeText() {
            this.isClicked = true; // ✅ Now Vue will detect the change
            this.xoni = xoniza(this.phrase);
            sessionStorage.setItem('p', this.phrase);

            // Reset effect after 150ms
            setTimeout(() => {
                this.isClicked = false;
            }, 150);
        }
    }
});
