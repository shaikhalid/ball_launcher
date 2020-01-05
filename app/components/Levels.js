import React from 'react'
import { View, Text, Button } from 'react-native'

const Levels = (props) => {
    return (
        <View>
            {props.levels.map((level) => {
                return <Button key={level.id} title={level.name}/>
            })}
        </View>
    )
}

export default Levels
