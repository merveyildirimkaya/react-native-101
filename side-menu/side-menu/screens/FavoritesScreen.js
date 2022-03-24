import React from 'react'
import { ScrollView,Text,StyleSheet } from 'react-native'
const FavoritesScreen = () => {
    return (
        <ScrollView style={styles.screen}>
            <Text>
                Welcome to favorite Sweetieee
            </Text>
        </ScrollView>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    screen: {
        padding:30
    },
  });
  