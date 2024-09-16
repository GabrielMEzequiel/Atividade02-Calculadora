import { View, StyleSheet } from "react-native";

import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faDeleteLeft, faDivide, faEquals, faMinus, faPlus, faSuperscript, faXmark } from "@fortawesome/free-solid-svg-icons";

import SimpleButton from "./SimpleButton";

export default function Keyboard() {

    return(
        <View style={keyboard.container}>   
            <View style={keyboard.row}> 
                <SimpleButton value={faSuperscript} />
                <SimpleButton value={faXmark} />
                <SimpleButton value={faDivide} />
                <SimpleButton value={faDeleteLeft} />
            </View>
            <View style={keyboard.row}> 
                <SimpleButton value={fa7} />
                <SimpleButton value={fa8} />
                <SimpleButton value={fa9} />
                <SimpleButton value={faPlus} />
            </View>
            <View style={keyboard.row}> 
                <SimpleButton value={fa4} />
                <SimpleButton value={fa5} />
                <SimpleButton value={fa6} />
                <SimpleButton value={faMinus} />
            </View>
            <View style={keyboard.row}> 
                <View style={keyboard.column}> 
                    <View style={keyboard.row}> 
                        <SimpleButton value={fa1} />
                        <SimpleButton value={fa2} /> 
                        <SimpleButton value={fa3} />
                    </View>
                    <SimpleButton value={fa0} />
                </View>
                <SimpleButton value={faEquals} />
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
    column: {
        flex: 12,
        flexDirection: 'column',
    },
});