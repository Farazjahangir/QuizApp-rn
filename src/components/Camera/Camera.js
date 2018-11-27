import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';
import { Button } from 'react-native-elements';
import leftArrow from '../../images/left.png'

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front,
        error : false
    };

    async componentDidMount() {
        console.log("PROPS============>" , this.props);
        
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }
    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            const options = { mode: FaceDetector.Constants.Mode.fast }
            const result = await FaceDetector.detectFacesAsync(photo.uri, options);
            console.log(result);
            if (result.faces.length > 0) {
                this.setState({error : false})
                console.log("Match found");
                this.props.startQuiz();
            }
            else if(!result.faces.length){
                this.setState({error : true})
            }
        }
    }

    backToHome(){
        console.log('BACKED========>');
        
        this.props.back()
    }

    render() {
        const { hasCameraPermission, error } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => this.camera = ref}
                        style={{ flex: 1 }} type={this.state.type}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                justifyContent: 'flex-end',
                                // alignItems:'center'
                            }}>
                           {error &&  <Text style={{flex : 1 , textAlign: 'center' , padding : 8 , color : 'white' , fontSize : 22 }}>No Face Detect</Text>}
                            <Button
                                onPress={()=>{this.backToHome()}}
                                buttonStyle={{ backgroundColor: '#e74c3c', borderRadius: 10, marginBottom: 8 }}
                                textStyle={{ textAlign: 'center' }}
                                title={`Back`}
                            />
                            <Button
                                onPress={this.snap}
                                buttonStyle={{ backgroundColor: '#00bfff', borderRadius: 10 }}
                                textStyle={{ textAlign: 'center' }}
                                title={`Capture`}
                            />
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}