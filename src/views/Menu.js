import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import UserList from './views/UserList';
import ProductsList from './views/ProductsList';
import UserForm from './views/UserForm';
import ProductsForm from './views/ProductsForm';
import PedidosList from './views/PedidosList';
import CodBarras from './views/CodBarras';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UserStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="UserList"
      component={UserList}
      options={{ title: 'Lista de Colaboradores' }}
    />
    <Stack.Screen
      name="UserForm"
      component={UserForm}
      options={{ title: 'Adicionar Colaborador' }}
    />
  </Stack.Navigator>
);

const ProdutoStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductsList"
      component={ProductsList}
      options={{ title: 'Lista de Produtos' }}
    />
    <Stack.Screen
      name="ProductsForm"
      component={ProductsForm}
      options={{ title: 'Form de Porduto' }}
    />
  </Stack.Navigator>
);

const CodBarrasStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Scanner"
      component={CodBarras}
      options={{ title: 'Realizar Compra' }}
    />
  </Stack.Navigator>
);

const PedidosStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="PedidosList"
      component={PedidosList}
      options={{ title: 'Conferir Pedidos' }}
    />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator>
    {/* Define your Tab.Navigator screens */}
    {/* For example: */}
    <Tab.Screen name="Users" component={UserStackNavigator} />
    <Tab.Screen name="Products" component={ProdutoStackNavigator} />
    <Tab.Screen name="Scanner" component={CodBarrasStackNavigator} />
    <Tab.Screen name="Pedidos" component={PedidosStackNavigator} />
  </Tab.Navigator>
);

const AuthStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FormLogin"
      component={FormLogin}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = () => {
  const { user } = useAuth(); // Assume you have some authentication logic here

  return (
    <NavigationContainer>
      {user ? (
        // If authenticated, show the main TabNavigator
        <MainTabNavigator />
      ) : (
        // If not authenticated, show the AuthStackNavigator
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;
