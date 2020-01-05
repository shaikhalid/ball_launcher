import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Levels from './components/Levels.js'
import Header from './components/Header.js'

export default class StartPage extends Component {
    constructor()   {
        super();

        this.levels = [{
                            id: 0,
                            name:"easy"
                       },
                       {
                            id: 1,
                            name:"intermediate"
                       },
                       {
                            id: 2,
                            name:"hard"
                       }
                ];
        this.header = {
            name: "Levels",
            discription: "please select a difficulty level to continue"
        }
    };
    render() {
        return (
            <View style={{flex:1,justifyContent:"center",backgroundColor:"#fff", alignItems:"stretch"}}>
                <View  style={styles.header}><Header header={this.header}/></View>
                <View  style={styles.content}><Levels levels={this.levels}/></View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:"#6decb9",
        alignItems:"stretch",
        paddingHorizontal:100
    },

    content:{
        flex:3,
        backgroundColor:"#bbe1fa",
        padding:40
    }

})


