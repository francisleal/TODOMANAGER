import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Login, Register } from '../screens/Screens';
export default Routes = createAppContainer(createStackNavigator(
    {
        pageLogin: { screen: Login },
        pageRegister: { screen: Register },
        // pageTaskList: {
        //     screen : taskListTabNavigator,
        //     navigationOption: {
        //         title:'Tast List'
        //     }
        // }
    }, {
        headerMode: 'screen'
    }
));