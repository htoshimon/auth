import React, {Component} from 'react';
import {Text} from 'react-native';
import Button from './common/Button';
import Card from './common/Card'
import CardSection from './common/CardSection';
import {Input, Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = {email: '', password: '', error: '', loading: false};

    onButtonPress() {

        const {email, password} = this.state;

        this.setState({
            error: '',
            loading: true
        });

        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            this.onLoginSuccess();
        }).catch(() => {
            this.onLoginFail();
        })
    }

    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
    //
    //     this.setState({error: " User creation failed"});
    //
    // });

    renderButton() {

        if (this.state.loading) {
            return <Spinner size="small"/>;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
        );
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''

        });

    }

    onLoginFail(){
        this.setState({
            error: "Authentication failed",
            loading: false
        });

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
                    {this.renderButton()}
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
