'use strict';

import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';

export default class PropertyView extends Component<{}> {
    render() {
        const property = this.props.property;
        return (
            <View style={styles.container}>
                <Image
                    resizeMode='contain'
                    style={styles.image}
                    source={{uri: property.img_url}}
                />
                <Text>{property.title}</Text>
                <View style={styles.row}>
                    <Text style={styles.rowName}>Price</Text>
                    <Text style={styles.rowElement}>{property.price_formatted}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowName}>Summary</Text>
                    <Text style={styles.rowElement}>{property.summary}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.rowName}>Keywords</Text>
                    <Text style={styles.rowElement}>{property.keywords}</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 30,
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    row: {
        flexDirection: 'row',
        padding: 10,
    },
    rowName: {
        flex: 0.5,
    },
    rowElement: {
        flex: 1,
    },
});
