import { View, StyleSheet } from "react-native";

import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faCircle, faDeleteLeft, faDivide, faEquals, faMinus, faPlus, faSuperscript, faXmark } from "@fortawesome/free-solid-svg-icons";

import IconButton from "./IconButton";

export default function Keyboard({ adicionarEquacao, apagarEquacao, calcularResultado }) {

    return(
        <View style={keyboard.container}>   
            <View style={keyboard.row}> 
                <IconButton value={faSuperscript} onPress={() => {adicionarEquacao('^')}} />
                <IconButton value={faXmark} onPress={() => {adicionarEquacao('*')}} />
                <IconButton value={faDivide} onPress={() => {adicionarEquacao('/')}} />
                <IconButton value={faDeleteLeft} onPress={() => {apagarEquacao()}} />
            </View>
            <View style={keyboard.row}> 
                <IconButton value={fa7} onPress={() => {adicionarEquacao('7')}} />
                <IconButton value={fa8} onPress={() => {adicionarEquacao('8')}} />
                <IconButton value={fa9} onPress={() => {adicionarEquacao('9')}} />
                <IconButton value={faPlus} onPress={() => {adicionarEquacao('+')}} />
            </View>
            <View style={keyboard.row}> 
                <IconButton value={fa4} onPress={() => {adicionarEquacao('4')}} />
                <IconButton value={fa5} onPress={() => {adicionarEquacao('5')}} />
                <IconButton value={fa6} onPress={() => {adicionarEquacao('6')}} />
                <IconButton value={faMinus} onPress={() => {adicionarEquacao('-')}} />
            </View>
            <View style={keyboard.row}> 
                <View style={keyboard.column3}> 
                    <View style={keyboard.row}> 
                        <IconButton value={fa1} onPress={() => {adicionarEquacao('1')}} />
                        <IconButton value={fa2} onPress={() => {adicionarEquacao('2')}} /> 
                        <IconButton value={fa3} onPress={() => {adicionarEquacao('3')}} />
                    </View>
                    <View style={keyboard.row}>
                        <View style={keyboard.column2}> 
                            <IconButton value={fa0} onPress={() => {adicionarEquacao('0')}} />
                        </View>
                        <View style={keyboard.column1}> 
                            <IconButton value={faCircle} size={6} onPress={() => {adicionarEquacao('.')}} />
                        </View>
                    </View>
                </View>
                <View style={keyboard.column1}>
                  <IconButton value={faEquals} onPress={() => {calcularResultado()}} />
                </View>
            </View>
        </View>
    )
}

const keyboard = StyleSheet.create({

    container: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
    },
    column3: {
        flex: 3,
        flexDirection: 'column',
    },
    column2: {
        flex: 2,
        flexDirection: 'column',
    },
    column1: {
        flex: 1,
    },
});