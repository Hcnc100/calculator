


import React from 'react'
import { Text, View } from 'react-native'
import { AppTheme } from '../../config/theme/app-theme'

export const CalculatorScreen = () => {
    return (
        <View style={AppTheme.calculatorContainer}>
            <View style={{
                paddingHorizontal: 20,
                paddingBottom: 10,
            }}>
                <Text style={AppTheme.mainResult}>1500</Text>
                <Text style={AppTheme.subResult}>15</Text>

            </View>


        </View>
    )
}
