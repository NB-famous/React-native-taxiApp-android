import React from "react"
import { StyleSheet, Text, View, Button } from 'react-native';


const Test = () => {
  return (
    <>   
        <Text style={styles.button}> Hello Nikko </Text>
        <Button title="submit" color="red"/> 
    </>
  )
}

const styles = StyleSheet.create({
    button: {
        color: 'red'
    }
})

export default Test