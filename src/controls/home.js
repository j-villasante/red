import firebase from 'firebase/app'

export default class Home {
    start () {
        $('.button-collapse').sideNav()
        $('#modal-new-word').modal()

        $('#btn-add-word').click(() => this.addWord())
    }

    addWord () {
        firebase.database().ref('words').push()
            .set({
                name: $('#word').val()
            })
            .then(() => {
                Materialize.toast('Se agrego correctamente la palabra', 4000)
            })
    }
}
