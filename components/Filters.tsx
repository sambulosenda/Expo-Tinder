import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BLACK, DARK_GRAY, WHITE } from '../assets/styles'
import Icon from './Icon'

const Filters = () =>  (
        <TouchableOpacity style={styles.filters}>
            <Text style={styles.filtersText}>
                <Icon name="filter" size={13} color={DARK_GRAY} /> filters
            </Text>
        </TouchableOpacity>
    )


export default Filters

const styles = StyleSheet.create({
    // COMPONENT - FILTERS STYLES
  filters: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  filtersText: {
    color: DARK_GRAY,
    fontSize: 13,
    textAlign: "center",
  },

})
