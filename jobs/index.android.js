/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    StyleSheet
} from 'react-native';
import App from './src/App';

export default class jobs extends Component {
    render() {
        return (
            <View style={styles.container}>
                <App/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

AppRegistry.registerComponent('jobs', () => jobs);
