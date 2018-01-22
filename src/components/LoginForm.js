import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Button from './common/Button';
import Card from './common/Card'
import CardSection from './common/CardSection';
import {Input} from './common';


class LoginForm extends Component {

    state = {email: '', password:''};

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

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )

    }

}

export default LoginForm;
