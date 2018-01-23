import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common/Header';
import Button from './components/common/Button'
import LoginForm from './components/LoginForm';
import {Spinner} from "./components/common";


class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyAvkIlEbOGcx3nrcsAqe27z8uTGpSrxAgE",
            authDomain: "toshimon-9ceac.firebaseapp.com",
            databaseURL: "https://toshimon-9ceac.firebaseio.com",
            projectId: "toshimon-9ceac",
            storageBucket: "",
            messagingSenderId: "692492724608"
        });

        firebase.auth().onAuthStateChanged((user) => {

            if (user) {

                this.setState({loggedIn: true});

            } else {

                this.setState({loggedIn: false});
            }


        })
    }

    renderContent() {
        switch (this.state.loggedIn) {

            case true:
                return (<Button>Log out</Button>);
            case false:
                return <LoginForm/>
            default:
                return (
                    <View style={styles.spinnerContainerStyle}>
                        <Spinner size="large"/>
                    </View>
                )
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>

                {this.renderContent()}

            </View>
        );
    }
}

const styles = {


    spinnerContainerStyle: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf:'center'
    }


}
export default App;
