import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/Header';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyAvkIlEbOGcx3nrcsAqe27z8uTGpSrxAgE",
            authDomain: "toshimon-9ceac.firebaseapp.com",
            databaseURL: "https://toshimon-9ceac.firebaseio.com",
            projectId: "toshimon-9ceac",
            storageBucket: "",
            messagingSenderId: "692492724608"
        })
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>

            </View>
        );
    }
}

export default App;
