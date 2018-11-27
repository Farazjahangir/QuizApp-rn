import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

class QuizList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            value: 0,
            question: this.props.data.question,
            radio_props: [
                { label: this.props.data.options[0], value: 0 },
                { label: this.props.data.options[1], value: 1 },
                { label: this.props.data.options[2], value: 2 },
            ]
        }
    }
    componentWillReceiveProps(nextPorps,prviousProps){
        console.log("Next ===> ?",nextPorps.data);
        
    }

    render() {
        const { checked, radio_props, question } = this.state;

        return (
            <View style={{flex:1,fontSize:30,marginLeft:10}} >
                <View style={styles.question}>
                    <Text  style={{fontSize:30}} >
                        {question}
                    </Text>
                </View>
                <View style={styles.options}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => { this.setState({ value: value }) }}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    question: {
        flex: 1,
        // height: 500,
        justifyContent: 'center',
        fontSize: 30
    },
    options:{
        flex:1,
        // height: 500,
        justifyContent: 'center',
        fontSize: 30
    }
});


export default QuizList;