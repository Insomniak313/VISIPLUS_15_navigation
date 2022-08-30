import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from "./src/screens/HomeScreen"
import AboutScreen from "./src/screens/AboutScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import SettingsScreen from "./src/screens/SettingsScreen"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Home = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Accueil'}}/>
    <Tab.Screen name="About" component={AboutScreen} options={{title: 'A propos'}}/>
  </Tab.Navigator>
)

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
