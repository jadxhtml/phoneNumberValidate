import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "./views/homeScreen";
import loginScreen from "./views/loginScreen";
import { NavigationContainer } from "@react-navigation/native";


export default function App(){
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='loginScreen' component={loginScreen} />
        <stack.Screen name='homeScreen' component={homeScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}
