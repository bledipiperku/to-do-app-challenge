import {IRouteProps} from '../navigation/RouteProp'
import { AddTaskScreen, HomeScreen } from '../screens'

const routes: IRouteProps[] = [
    {
        name: 'Home',
        component: HomeScreen
    },
    {
        name: "AddTask",
        component: AddTaskScreen
    }
]

export default routes;