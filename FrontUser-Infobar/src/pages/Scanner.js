import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Estilo from "../components/Estilo";
import {  } from "react-native";

export default props => {
    return (
        <View style={Estilo.containerCentralized}>
            <TouchableOpacity style={Estilo.ButtonScanner}>
                <MaterialCommunityIcons name="barcode-scan" size={130} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.ButtonScannerDigitar}>{/*Caso o usuario não consiga escanear*/}
                <Text style={Estilo.TextoButtonScanner}>Digitar código de barras</Text>
            </TouchableOpacity>
        </View>
    )
}