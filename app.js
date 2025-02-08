var app = new Vue({
    el: '#app',
    data: () => {
        return {
            phrase: '',
            xoni: '' // Store xonized text as a data property instead of computed
        }
    },
    created() {
        const s = sessionStorage.getItem('p');
        this.phrase = s ? s : 'Hola caracola';
        this.xoni = xoniza(this.phrase); // Initialize xoni when loading
    },
    methods: {
        xonizeText() {
            this.xoni = xoniza(this.phrase); // Apply xonization and update xoni
            sessionStorage.setItem('p', this.phrase); // Store input phrase
        }
    }
});
