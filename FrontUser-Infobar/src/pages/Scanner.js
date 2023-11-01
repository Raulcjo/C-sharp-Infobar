import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Estilo from "../components/Estilo";
import {  } from "react-native";

export default props => {
    return (
        <View style={Estilo.containerCentralized}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="barcode-scan" size={130} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>{/*Caso o usuario não consiga escanear*/}
                <Text>Digitar código de barras</Text>
            </TouchableOpacity>
        </View>
    )
}