import 'materialize-css'

import setup from './setup.js'
import Home from './controls/home.js'
import firebase from 'firebase/app'
import 'firebase/database'

import firebaseConfig from './firebase.config.json'

class App {
    initialize () {
        firebase.initializeApp(firebaseConfig)
        this.bindEvents()
        this.controls = {
            home: new Home()
        }
    }

    bindEvents () {
        document.addEventListener('deviceready', () => this.onDeviceReady(), false)
    }

    onDeviceReady () {
        setup(this.controls)
    }
}

let app = new App()
app.initialize()
