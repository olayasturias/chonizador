var app = new Vue({
    el: '#app',
    data: () => ({
        phrase: '',
        xoni: '',
        isClicked: false // ✅ Add this to make it reactive
    }),
    created() {
        const s = sessionStorage.getItem('p');
        this.phrase = s ? s : 'La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética, en términos de cantidades observables';
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
