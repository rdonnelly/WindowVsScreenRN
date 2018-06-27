import React from 'react';
import { Dimensions, Text, View } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    const screenDimensions = Dimensions.get('screen');
    const windowDimensions = Dimensions.get('window');

    this.state = {
      screenWidth: screenDimensions.width,
      screenHeight: screenDimensions.height,
      windowWidth: windowDimensions.width,
      windowHeight: windowDimensions.height,
    };

    this.updateDimensionState = this.updateDimensionState.bind(this);

    Dimensions.addEventListener('change', this.updateDimensionState);
  }

  updateDimensionState(dimensions) {
    this.setState({
      screenWidth: dimensions.screen.width,
      screenHeight: dimensions.screen.height,
      windowWidth: dimensions.window.width,
      windowHeight: dimensions.window.height,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>

        <View>
          <Text>Window Width: { this.state.windowWidth }, Window Height: { this.state.windowHeight }</Text>
        </View>

        <View>
          <Text>Screen Width: { this.state.screenWidth }, Screen Height: { this.state.screenHeight }</Text>
        </View>
      </View>
    );
  }
}
