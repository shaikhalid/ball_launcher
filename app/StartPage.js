import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Levels from './components/Levels.js'

export default class StartPage extends Component {
    constructor()   {
        super()
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
                ]
    }
    render() {
        return (
            <View>
                <Levels levels={this.levels}/>
            </View>
        )
    }
}

