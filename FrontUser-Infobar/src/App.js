import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MeusDados from './pages/MeusDados';
import Scanner from './pages/Scanner';
import ListaPedidos from './pages/ListaPedidos';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default props => {

    return (
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Meus Dados" component={MeusDados}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (
                    <FontAwesome name="home" color={color} size={size}/>
                )
                }}
            />
            <Tab.Screen name="Scanner" component={Scanner}
            options={{
                tabBarLabel: 'Scanner',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen name="ListaPedidos" component={ListaPedidos}
                options={{
                    tabBarLabel: 'Scanner',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="shopping-cart" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
    )
}



const minhaScreenOptions = {

}