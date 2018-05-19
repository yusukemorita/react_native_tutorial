/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    NavigatorIOS,
} from 'react-native';
import SearchPage from './SearchPage';

type Props = {};
export default class App extends Component<{}> {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Property Finder',
                    component: SearchPage,
                }}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65,
    },
});
