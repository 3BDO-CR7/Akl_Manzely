import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Content} from 'native-base'
import styles from '../../assets/style';
import i18n from '../../locale/i18n'
import * as Animatable from 'react-native-animatable';

class ChooseUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            spinner             : false,
        }
    }

    async componentWillMount() {


    }

    render() {

        return (

            <Container>

                <Content contentContainerStyle={styles.bgFullWidth}>
                    <View style={[styles.position_R, styles.bgFullWidth, styles.flexCenter, styles.Width_100]}>

                        <View style={[styles.overHidden, styles.marginVertical_25, styles.icoImage]}>
                            <Animatable.View animation="bounceIn" easing="ease-out" delay={500} style={[styles.flexCenter]}>
                                <Image style={[styles.icoImage]} source={require('../../assets/img/icon.png')}/>
                            </Animatable.View>
                        </View>

                        <View style={[styles.marginVertical_25]}>

                            <View style={[styles.overHidden]}>
                                <Animatable.View animation="bounceInRight" easing="ease-out" delay={500} style={[styles.flexCenter]}>

                                    <TouchableOpacity
                                        style           = {[styles.bg_red, styles.width_150, styles.flexCenter, styles.marginVertical_10, styles.height_40]}
                                        onPress         = {() => this.props.navigation.navigate('Register')}>
                                        <Text style     = {[styles.textRegular, styles.textSize_14, styles.text_White]}>
                                            {i18n.translate('loginUser')}
                                        </Text>
                                    </TouchableOpacity>

                                </Animatable.View>
                            </View>

                            <View style={[styles.overHidden]}>
                                <Animatable.View animation="bounceInLeft" easing="ease-out" delay={700} style={[styles.flexCenter]}>

                                    <TouchableOpacity
                                        style           = {[styles.bg_black, styles.width_150, styles.flexCenter, styles.marginVertical_10, styles.height_40]}
                                        onPress         = {() => this.props.navigation.navigate('Register')}>
                                        <Text style     = {[styles.textRegular, styles.textSize_14, styles.text_White]}>
                                            {i18n.translate('loginchef')}
                                        </Text>
                                    </TouchableOpacity>

                                </Animatable.View>
                            </View>

                        </View>

                    </View>
                    <View style={[styles.shape_logo, styles.position_A, styles.fixItem]}>
                        <Animatable.View animation="fadeIn" easing="ease-out" delay={500}>
                            <Image style={[styles.shape_logo]} source={require('../../assets/img/shape.png')}/>
                        </Animatable.View>
                    </View>
                </Content>

            </Container>

        );
    }
}

export default ChooseUser;
