import React, { Component } from "react";
import { AsyncStorage } from 'react-native';
import {connect} from "react-redux";
import {chooseLang} from "../actions";

class InitScreen extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {

        // console.log('auth..', this.props.auth , 'user profile ..', this.props.user);
        //
        // if (this.props.auth == null || this.props.user == null)
        // // if (this.props.auth == null)
        //     this.props.navigation.navigate('login');
        // else
        //     this.props.navigation.navigate('drawerNavigator');

        this.props.navigation.navigate('Login');

        AsyncStorage.getItem('init').then(init => {
            if (init != 'true'){
                AsyncStorage.setItem('init', 'true');
                this.props.chooseLang('ar');
            }

        });
    }

    render() {
        return false;
    }
}

// export default InitScreen;

const mapStateToProps = ({ auth, profile, lang }) => {
    return {
        // auth: auth.user,
        // user: profile.user,
        lang: lang.lang
    };
};
export default connect(mapStateToProps, {chooseLang})(InitScreen);

