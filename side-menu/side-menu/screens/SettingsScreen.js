import React from 'react'
import { ScrollView,Text,StyleSheet } from 'react-native'
const SettingsScreen = () => {
    return (
        <ScrollView style={styles.screen}>
            <Text>
                Welcome to settings Sweetieee
            </Text>
        </ScrollView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    screen: {
        padding:30
    },
  });
  