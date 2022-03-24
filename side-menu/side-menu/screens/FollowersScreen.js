import React from 'react'
import { ScrollView,Text,StyleSheet } from 'react-native'
const FollowersScreen = () => {
    return (
        <ScrollView style={styles.screen}>
            <Text>
                Welcome to FollowersScreen Sweetieee
            </Text>
        </ScrollView>
    )
}

export default FollowersScreen

const styles = StyleSheet.create({
    screen: {
        padding:30
    },
  });
  