import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Data from './QuizData';
// import Quiz from './QuizList';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Button from '../Button/Button';



class QuizScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            index: 0,
            value: 0,
            marks: 0,
            selectedValue: 0,
            questionNo : 1
        }
    }
    saveData() {
        let { index, value, marks, selectedValue, questionNo } = this.state;
        console.log(marks);
        if (Data.length == index + 1) {
            console.log("Length Completed");
            if (selectedValue == Data[index].correct) {
                marks += 10;
                this.props.result({ marks, length: Data.length })
            }
            else {
                this.props.result({ marks, length: Data.length })
            }

        }
        else if (Data.length > index + 1) {
            if (selectedValue == Data[index].correct) {
                marks += 10;
                this.setState({ index: index + 1, marks, value: 0 , questionNo : questionNo + 1 })
            }
            else {
                this.setState({ index: index + 1, value: 0, questionNo : questionNo + 1 })
            }
        }
    }
    render() {
        const { index, value, questionNo } = this.state;
        console.log(" Form Quiz ===>", value);
        const radio_props = [
            { label: Data[index].options[0], value: 0 },
            { label: Data[index].options[1], value: 1 },
            { label: Data[index].options[2], value: 2 },
        ];
        const question = Data[index].question;

        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, fontSize: 30, marginLeft: 10 }} >
                        <View style={styles.question}>
                            <Text style={{ fontSize: 30 }} >
                                {questionNo}:{question}
                            </Text>
                        </View>
                        <View style={styles.options}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={value}
                                buttonSize={10}
                                labelStyle={{ fontSize: 15, color: '#e74c3c' }}
                                onPress={(value) => { this.setState({ selectedValue: value }) }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: "20%" }}>
                    <TouchableOpacity onPress= {() => this.saveData()} style={{marginLeft : 20, textAlign : 'right' }}>
                        <Text  style={styles.btn}>
                            Next
                        </Text>
                    </TouchableOpacity>

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
    options: {
        flex: 1,
        height: 500,
        justifyContent: 'center',
        fontSize: 30
    },
    btn: {
        backgroundColor: '#e74c3c',
        color : 'white',
        borderWidth: 1,
        borderColor : '#e74c3c',
        borderStyle : 'solid',
        padding : 10,
        width: 100,
        borderRadius : 10,
        textAlign : 'center'


    }
});
export default QuizScreen;