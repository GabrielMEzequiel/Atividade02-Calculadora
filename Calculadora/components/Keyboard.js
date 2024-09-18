import { View, StyleSheet } from "react-native";

import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faDeleteLeft, faDivide, faEquals, faMinus, faPlus, faSuperscript, faXmark } from "@fortawesome/free-solid-svg-icons";

import SimpleButton from "./SimpleButton";

export default function Keyboard({ adicionarEquacao, apagarEquacao, calcularResultado }) {

    return(
        <View style={keyboard.container}>   
            <View style={keyboard.row}> 
                <SimpleButton value={faSuperscript} onPress={() => {adicionarEquacao('^')}} />
                <SimpleButton value={faXmark} onPress={() => {adicionarEquacao('*')}} />
                <SimpleButton value={faDivide} onPress={() => {adicionarEquacao('/')}} />
                <SimpleButton value={faDeleteLeft} onPress={() => {apagarEquacao()}} />
            </View>
            <View style={keyboard.row}> 
                <SimpleButton value={fa7} onPress={() => {adicionarEquacao('7')}} />
                <SimpleButton value={fa8} onPress={() => {adicionarEquacao('8')}} />
                <SimpleButton value={fa9} onPress={() => {adicionarEquacao('9')}} />
                <SimpleButton value={faPlus} onPress={() => {adicionarEquacao('+')}} />
            </View>
            <View style={keyboard.row}> 
                <SimpleButton value={fa4} onPress={() => {adicionarEquacao('4')}} />
                <SimpleButton value={fa5} onPress={() => {adicionarEquacao('5')}} />
                <SimpleButton value={fa6} onPress={() => {adicionarEquacao('6')}} />
                <SimpleButton value={faMinus} onPress={() => {adicionarEquacao('-')}} />
            </View>
            <View style={keyboard.row}> 
                <View style={keyboard.column3}> 
                    <View style={keyboard.row}> 
                        <SimpleButton value={fa1} onPress={() => {adicionarEquacao('1')}} />
                        <SimpleButton value={fa2} onPress={() => {adicionarEquacao('2')}} /> 
                        <SimpleButton value={fa3} onPress={() => {adicionarEquacao('3')}} />
                    </View>
                    <SimpleButton value={fa0} onPress={() => {adicionarEquacao('0')}} />
                </View>
                <View style={keyboard.column1}>
                  <SimpleButton value={faEquals} onPress={() => {calcularResultado()}} />
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
    column1: {
        flex: 1,
    },
});