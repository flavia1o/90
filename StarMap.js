import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: ''
    };
  }

  render() {
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.Ico.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Digite sua latitude"
          placeholderTextColor="white"
          onChangeText={(text) => {
            this.setState({
              latitude: text
            });
          }}
        />

        <TextInput
          style={styles.inputStyle}
          placeholder="Digite sua longitude"
          placeholderTextColor="white"
          onChangeText={(text) => {
            this.setState({
              longitude: text
            });
          }}
        />

        <Text>Tela do mapa estelar!</Text>

        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
      </View>
    );
  }
}


      
  
  

























































