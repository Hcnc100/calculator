


import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { AppTheme, colors } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton'

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

            <View style={AppTheme.row}>

                <CalculatorButton
                    blackText
                    text="C"
                    color={colors.lightGray}
                />
                <CalculatorButton
                    blackText
                    text="+/-"
                    color={colors.lightGray} />

                <CalculatorButton
                    blackText
                    text="del"
                    color={colors.lightGray} />

                <CalculatorButton
                    text="÷"
                    color={colors.orange} />


            </View>

            <View style={AppTheme.row}>

                <CalculatorButton text="7" />
                <CalculatorButton text="8" />
                <CalculatorButton text="9" />

                <CalculatorButton
                    text="x"
                    color={colors.orange} />
            </View>


            <View style={AppTheme.row}>

                <CalculatorButton text="6" />
                <CalculatorButton text="5" />
                <CalculatorButton text="4" />

                <CalculatorButton
                    text="-"
                    color={colors.orange} />
            </View>


            <View style={AppTheme.row}>

                <CalculatorButton text="1" />
                <CalculatorButton text="2" />
                <CalculatorButton text="3" />

                <CalculatorButton
                    text="+"
                    color={colors.orange} />
            </View>


            <View style={AppTheme.row}>

                <CalculatorButton text="0" doubleSize />
                <CalculatorButton text="." />

                <CalculatorButton
                    text="="
                    color={colors.orange} />
            </View>


        </View>
    )
}
