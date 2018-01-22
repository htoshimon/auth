import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Button from './common/Button';
import Card from './common/Card'
import CardSection from './common/CardSection';


class LoginForm extends Component {

    state = {text: ''};

    render() {
        return (
            <Card>
                <CardSection>

                    <TextInput value = this.state.text
                               onChangeText={text => this.setState(text)}
                               style={{height: 20, width: 100}}/>
                </CardSection>
                <CardSection>
                    <TextInput style={{height: 20, width: 100}}/>
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
