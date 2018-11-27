import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle} >
            <Text style={textStyle} >{props.name}</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#e74c3c',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset:
        {
            width: 0, height: 40
        }
        ,
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 27,
        alignItems : 'center',
        color : 'white'
    }
}

export default Header;