var app = new Vue({
    el: '#app',
    data: () => {
        return {
            phrase: '',
        }
    },
    created() {
        const s = sessionStorage.getItem('p');
        this.phrase = s ? s : 'La mecánica cuántica es la rama de la física que estudia la naturaleza a escalas espaciales pequeñas, los sistemas atómicos y subatómicos y sus interacciones con la radiación electromagnética, en términos de cantidades observables';
    },
    computed: {
        xoni: function() {
            sessionStorage.setItem('p', this.phrase);
            return `${xoniza(this.phrase)}`;
        }
    }
});
