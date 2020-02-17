import React from "react";
import { createAppContainer , createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {Dimensions, I18nManager} from "react-native";

import Home                     from "../components/Home";
import Language                 from "../components/Language";
import Login                    from "../components/Login";
import ChooseUser               from "../components/ChooseUser";
import Register                 from "../components/Register";
import ForgetPassword           from "../components/ForgetPassword";
import NewPassword              from "../components/NewPassword";
import ActivtionAccount         from "../components/ActivtionAccount";
import InitScreen               from "../components/InitScreen";
import DrawerCustomization      from "./DrawerCustomization";

const width = Dimensions.get('window').width;
const drawerCust = (props) => (<DrawerCustomization {...props} />);

const drawerNavigator = createDrawerNavigator({
    Home                : Home,
},
    {
    initialRouteName    : 'Home',
    drawerPosition      : I18nManager.isRTL ?'right' : 'left',
    drawerOpenRoute     : 'DrawerOpen',
    drawerCloseRoute    : 'DrawerClose',
    gesturesEnabled     : false,
    drawerToggleRoute   : 'DrawerToggle',
    drawerWidth         : '100%',
    contentComponent    : drawerCust
});

const AppNavigator = createStackNavigator({
    drawerNavigator: {
        screen: drawerNavigator,
        navigationOptions: {
            header: null
        }
    },
    Register : {
        screen : Register,
        navigationOptions: {
            header: null
        }
    },
    ActivtionAccount : {
        screen : ActivtionAccount,
        navigationOptions: {
            header: null
        }
    },
    NewPassword : {
        screen : NewPassword,
        navigationOptions: {
            header: null
        }
    },
    InitScreen : {
        screen : InitScreen,
        navigationOptions: {
            header: null
        }
    },
    ForgetPassword : {
        screen : ForgetPassword,
        navigationOptions: {
            header: null
        }
    },
    Login : {
        screen : Login,
        navigationOptions: {
            header: null
        }
    },
    Language : {
        screen : Language,
        navigationOptions: {
            header: null
        }
    },
    ChooseUser : {
        screen : ChooseUser,
        navigationOptions: {
            header: null
        }
    },

});

export default createAppContainer(AppNavigator);
