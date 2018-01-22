import React from 'react';
import {Text, View} from 'react-native';


export const Header = (props) => {

    const {viewStyle, textStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    )
};

const styles = {

    viewStyle: {
        backgroundColor: "#F8f8f8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }

};


