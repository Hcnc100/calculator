

import React from 'react'
import { Pressable, Text } from 'react-native'
import { AppTheme } from '../../config/theme/app-theme'

interface CalculatorButtonProps {
    text: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
}


export const CalculatorButton = (
    {
        text,
        color = AppTheme.button.backgroundColor,
        doubleSize = false,
        blackText = false,
    }: CalculatorButtonProps
) => {
    return (
        <Pressable style={
            ({ pressed }) => ({
                ...AppTheme.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: (doubleSize) ? 180 : 80,

            })
        }>
            <Text style={{
                ...AppTheme.buttonText,
                color: (blackText) ? 'black' : 'white',
            }}>{text}</Text>
        </Pressable>
    )
}
