import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { BLACK, DARK_GRAY } from '../assets/styles'
import Icon from './Icon'

const City = () => 
  (
        <TouchableOpacity style={styles.city}>
            <Text style={styles.cityText}>
                <Icon name="location-sharp" size={13} color={DARK_GRAY} /> London
            </Text>
        </TouchableOpacity>
    )


export default City

const styles = StyleSheet.create({
    city: {

        backgroundColor: 'white', 
        padding: 10, 
        width: 100, 
        elevation: 1, 
        borderRadius: 20, 
        shadowRadius: 10, 
        shadowOpacity: 0.05,
        shadowColor: BLACK,
        shadowOffset: { height: 0, width: 0 },

    }, 

    cityText: {

        color: DARK_GRAY, 
        fontSize: 13, 
        textAlign: 'center'

    }



})
