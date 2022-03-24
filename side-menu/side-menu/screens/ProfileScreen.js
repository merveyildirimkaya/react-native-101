import React from 'react'
import { ScrollView,Text,StyleSheet } from 'react-native'
const ProfileScreen = () => {
    return (
        <ScrollView style={styles.screen}>
            <Text>
                Welcome to ProfileScreen Sweetieee
            </Text>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen: {
        padding:30
    },
  });
  