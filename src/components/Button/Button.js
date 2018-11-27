import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


const CameraButton = (props) => {
    return (
        <View style={{ borderColor: 'red' }} >
            <Button
                onPress={props.onPress}
                buttonStyle={{ backgroundColor: '#e74c3c' }}
                textStyle={{ textAlign: 'center' }}
                title={props.name || `Click To Open Camera`}
            />
        </View>
    )
}
export default CameraButton;