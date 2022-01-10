// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
    el: "#app",
    data: {
        
    },

    created() {
        
        for (let i = 0; i < 10; i++) {
            // Make a request for a user with a given ID
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    // handle success
                    console.log(response.data.response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },

    methods: {

    }
});