import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

class FormTextInput extends React.Component{
    render(){
        const {style, ...otherProps } = this.props
        return(
            <TextInput 
                selectionColor='#15324A'
                style={[styles.textInput], style}
                {...otherProps}
            />
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
    }
})

export default FormTextInput