import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View>
            <View>
                <Text style={styles.maintext}>{props.header.name}</Text>
            </View>
            <View>
                <Text style={styles.baseText}>{props.header.discription}</Text>
            </View>
        </View>
        
    )
}
styles = StyleSheet.create({
    maintext:{
        fontSize: 70,
        fontWeight: 'bold',
    },
    baseText: {
        fontFamily: 'Cochin',
    }
})

export default Header
