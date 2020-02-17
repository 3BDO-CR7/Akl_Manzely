import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, AsyncStorage, KeyboardAvoidingView} from "react-native";
import {Container, Content, Form, Input, Item, Toast,} from 'native-base'
import styles from '../../assets/style';
import i18n from "../../locale/i18n";
import * as Animatable from 'react-native-animatable';
import {NavigationEvents} from "react-navigation";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password: '',
            deviceId: '',
            userId: null,
            type: 0,
            phoneStatus: 0,
            passwordStatus: 0,
            spinner: false,
        }
    }

    activeInput(type) {

        if (type === 'phone' || this.state.phone !== '') {
            this.setState({phoneStatus: 1})
        }

        if (type === 'password' || this.state.password !== '') {
            this.setState({passwordStatus: 1})
        }

    }

    unActiveInput(type) {

        if (type === 'phone' && this.state.phone === '') {
            this.setState({phoneStatus: 0})
        }

        if (type === 'password' && this.state.password === '') {
            this.setState({passwordStatus: 0})
        }

    }

    validate = () => {
        let isError = false;
        let msg = '';

        if (this.state.phone.length <= 0) {
            isError = true;
            msg = i18n.t('namereq');
        } else if (this.state.password.length <= 0) {
            isError = true;
            msg = i18n.t('pass');
        }
        if (msg !== '') {
            Toast.show({
                text: msg,
                type: "danger",
                duration: 3000,
                textStyle: {
                    color: "white",
                    fontFamily: 'cairo',
                    textAlign: 'center',
                }
            });
        }
        return isError;
    };

    onLoginPressed() {

        this.setState({spinner: true});

        const err = this.validate();

        if (!err){
            const {phone, password, deviceId , type} = this.state;
            this.props.userLogin({ phone, password, deviceId, type }, this.props.lang);
        }

    }

    async componentWillMount() {


    }

    componentWillReceiveProps(newProps){


    }

    onFocus(){
        this.componentWillMount();
    }

    render() {

        return (

            <Container>

                <NavigationEvents onWillFocus={() => this.onFocus()} />

                <Content contentContainerStyle={styles.bgFullWidth}>
                    <Image style={[styles.shape_logo, styles.position_A, styles.fixItem]} source={require('../../assets/img/shape.png')}/>
                    <View
                        style={[styles.position_R, styles.bgFullWidth, styles.marginVertical_15, styles.flexCenter, styles.Width_100]}>
                        <Animatable.View animation="fadeInDown" easing="ease-out" delay={500}
                                         style={[styles.flexCenter]}>
                            <View style={[styles.overHidden, styles.marginVertical_15]}>
                                <Image style={[styles.icoImage]} source={require('../../assets/img/icon.png')}/>
                            </View>
                        </Animatable.View>
                        <KeyboardAvoidingView behavior={'padding'}>
                            <Form
                                style={[styles.Width_100, styles.flexCenter, styles.marginVertical_10, styles.Width_90]}>

                                <View
                                    style={[styles.position_R, styles.overHidden, styles.height_70, styles.flexCenter]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R, styles.overHidden]}>
                                        <Input
                                            placeholder={i18n.translate('phone')}
                                            style={[styles.input, styles.height_50, (this.state.phoneStatus === 1 ? styles.Active : styles.noActive)]}
                                            onChangeText={(phone) => this.setState({phone})}
                                            onBlur={() => this.unActiveInput('phone')}
                                            onFocus={() => this.activeInput('phone')}
                                            keyboardType={'number-pad'}
                                        />
                                    </Item>
                                </View>

                                <View
                                    style={[styles.position_R, styles.overHidden, styles.height_70, styles.flexCenter]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R, styles.overHidden]}>
                                        <Input
                                            placeholder={i18n.translate('password')}
                                            style={[styles.input, styles.height_50, (this.state.passwordStatus === 1 ? styles.Active : styles.noActive)]}
                                            onChangeText={(password) => this.setState({password})}
                                            onBlur={() => this.unActiveInput('password')}
                                            onFocus={() => this.activeInput('password')}
                                            secureTextEntry
                                        />
                                    </Item>
                                </View>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')} style={[styles.marginVertical_5, styles.SelfRight]}>
                                    <Text style={[styles.textRegular, styles.textSize_14, styles.marginVertical_5, styles.light_gray]}>
                                        {i18n.translate('forgetPassword')}
                                    </Text>
                                </TouchableOpacity>

                            </Form>
                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            onPress         = {() => this.props.navigation.navigate('Register')}
                            style           = {[styles.marginVertical_10, styles.flexCenter]}
                        >
                            <Text style     = {[styles.textRegular, styles.textSize_14, styles.text_red]}>
                                {i18n.translate('doHaveAcc')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Content>

            </Container>

        );
    }
}

export default Login;

// const mapStateToProps = ({ auth, profile, lang }) => {
//     return {
//         loading     : auth.loading,
//         auth        : auth.user,
//         user        : profile.user,
//         lang        : lang.lang
//     };
// };
// export default connect(mapStateToProps, {  })(Login);
