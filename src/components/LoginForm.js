import React, {Component} from 'react';
import {Text} from 'react-native';
import Button from './common/Button';
import Card from './common/Card'
import CardSection from './common/CardSection';
import {Input} from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = {email: '', password: '', error: ''};

    onButtonPress() {

        const {email, password} = this.state;

        this.setState({error:''});

        firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {

            this.setState({error: " Authentication failed"});
            // firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
            //
            //     this.setState({error: " User creation failed"});
            //
            // });
        })


    }


    render() {
        return (
            <Card>
                <CardSection>

                    <Input label="Email"
                           value={this.state.email}
                           onChangeText={userEmail => this.setState({email: userEmail})}
                           placeHolder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input label="Password"
                           value={this.state.password}
                           onChangeText={userPassword => this.setState({password: userPassword})}
                           placeHolder="password"
                           secureTextEntry={true}
                    />

                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )

    }

}

const styles = {

    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'

    }

};
export default LoginForm;
