import { StyleSheet } from "react-native";


export const colors = {
    darkGray: '#2D2D2D',
    lightGray: '#9B9B9B',
    orange: '#FF9427',

    textPrimary: '#FFFFFF',
    textSecondary: '#666666',
    backgroundPrimary: '#000000',
}


export const AppTheme = StyleSheet.create({
    background: {
        backgroundColor: colors.backgroundPrimary,
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '200',
    },
    subResult: {
        color: colors.textSecondary,
        fontSize: 30,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300',
    }
});
