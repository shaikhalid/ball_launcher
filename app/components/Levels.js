import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Button } from 'react-native'

const Levels = (props) => {
    return (
        <View style={styles.container}>
            {props.levels.map((level) => {
                return <View style={styles.buttoncon} >
                            <TouchableOpacity key={level.id} style={{ height: 100, marginTop: 10 }}>
                                <Text style={styles.button}>{level.name}</Text>
                            </TouchableOpacity>
                        </View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    buttoncon: {
      flex:1
    },
    button: {
        borderWidth: 1,
        padding: 25,
        //borderColor: 'black',
        borderRadius: 5,
        textAlign:"center",
        fontSize: 30,
        backgroundColor:"#3282b8"
     }
  });

export default Levels
