import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, placeHolder, secureTextEntry}) => {

    const {labelStyle, inputStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput autoCorrect={false}
                       placeholder={placeHolder}
                       value={value}
                       onChangeText={onChangeText}
                       style={inputStyle}
                       secureTextEntry={secureTextEntry}

            />
        </View>

    );

};

const styles = {
    labelStyle: {
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height:40,
        flex: 1,
        flexDirection:'row',
        alignItems:'center'
    }

};

export {Input};
