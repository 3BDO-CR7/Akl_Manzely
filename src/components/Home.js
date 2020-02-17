import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {Container, Content, Header, Button, Left, Icon, Body, Right, Toast, Item, Input} from 'native-base'
import styles from '../../assets/style';
import i18n from "../../locale/i18n";
import {connect} from "react-redux";
import {chooseLang} from "../actions";
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            spinner                 : false,
            projects                : '',
            projects_string         : '',
            doners                  : '',
            totalCases              : '',
            ActiveCases             : '',
        }
    }

    // async componentDidMount(){
    //     Notifications.addListener(this.handleNotification);
    // }
    //
    // handleNotification = (notification) => {
    //     console.log('test notification', notification);
    //
    //     if (notification && notification.origin !== 'received') {
    //         this.props.navigation.navigate('Notification');
    //     }
    // };

    componentWillMount() {

        this.setState({spinner: true});

    }

    static navigationOptions = () => ({
        header          : null,
        drawerLabel     : (<Text style={[styles.textRegular, styles.textSize_16]}>{i18n.translate('home')}</Text>) ,
        // drawerIcon      : (<Image style={[styles.smImage]} source={require('../../assets/images/menu.png')} resizeMode={'contain'}/>)
    });

    render() {

        return (
            <Container>

                <Header style={styles.headerView}>
                    <Left style={styles.leftIcon}>
                        <Button style={styles.Button} transparent onPress={() => { this.props.navigation.openDrawer()} }>
                            <Image style={[styles.headImage]} source={require('../../assets/img/menu.png')} resizeMode={'contain'}/>
                        </Button>
                    </Left>
                    <Body style={styles.bodyText}>

                        <View style={[styles.position_R, styles.SelfRight]}>
                            <Item floatingLabel style={styles.item}>
                                <Input
                                    placeholder={i18n.translate('searchCat')}
                                    style={[styles.input, styles.height_40, styles.BorderNone, styles.paddingRight_5, styles.paddingLeft_5 ,styles.textSize_14,styles.text_red, {backgroundColor : "#dcd8d8"}]}
                                    autoCapitalize='none'
                                    onChangeText={(categorySearch) => this.setState({categorySearch})}
                                />
                            </Item>
                            <TouchableOpacity
                                style={[styles.position_A, styles.right_0, styles.width_50, styles.height_40, styles.flexCenter]}
                                // onPress={() => this.onSearch()}
                            >
                                {/*<Icon*/}
                                {/*    style={[styles.text_red, styles.textSize_16]}*/}
                                {/*    type="AntDesign"*/}
                                {/*    name='search1'*/}
                                {/*/>*/}

                                <Image style={[styles.headImage]} source={require('../../assets/img/search.png')} resizeMode={'contain'}/>
                            </TouchableOpacity>
                        </View>

                    </Body>
                    <Right style={styles.rightIcon}>
                        <Button style={styles.Button} transparent onPress={() => this.chickUser('Notification')}>
                            <Image style={[styles.headImage]} source={require('../../assets/img/controls.png')} resizeMode={'contain'}/>
                        </Button>
                        <Button style={styles.Button} transparent onPress={() => this.chickUser('Notification')}>
                            <Image style={[styles.headImage]} source={require('../../assets/img/alarm.png')} resizeMode={'contain'}/>
                        </Button>
                        <Button style={styles.Button} transparent onPress={() => this.chickUser('Notification')}>
                            <Image style={[styles.headImage]} source={require('../../assets/img/shopping.png')} resizeMode={'contain'}/>
                        </Button>
                    </Right>
                </Header>

                <Content contentContainerStyle={styles.bgFullWidth} style={styles.contentView}>

                    <View style={styles.viewBlock}>

                        <Swiper
                            containerStyle      = {[styles.Width_95, styles.marginVertical_15, styles.swiper, styles.viewBlock]}
                            autoplay            = {true}
                            paginationStyle     = {[styles.paginationStyle]}
                            dotStyle            = {[styles.bg_lightWhite]}
                            activeDotStyle      = {{ backgroundColor: '#F00', width: 20,}}
                            animated            = {true}
                            loop                = {true}
                            autoplayTimeout     = { 2 }
                        >

                            <View style={[styles.viewBlock]}>
                                <Image style={[styles.Width_90, styles.height_70]} source={require('../../assets/img/1.png')} resizeMode={'contain'}/>
                                <Animatable.View animation="fadeInRight" easing="ease-out" delay={500} style={[styles.blockContent, styles.Width_50]}>
                                    <View style={[styles.paddingVertical_10, styles.paddingHorizontal_10]}>
                                        <Text style={[styles.textRegular, styles.text_White, styles.Width_100 ,styles.textSize_12, styles.textLeft]} numberOfLines = { 1 } prop with ellipsizeMode = "tail">
                                            home
                                        </Text>
                                        <Text style={[styles.textRegular, styles.text_White, styles.Width_100 ,styles.textSize_12, styles.textLeft]} numberOfLines = { 1 } prop with ellipsizeMode = "tail">
                                            description
                                        </Text>
                                        <View>
                                            <Text style={[styles.textRegular, styles.text_orange, styles.Width_100 ,styles.textSize_12, styles.textLeft]} numberOfLines = { 1 } prop with ellipsizeMode = "tail">
                                                { i18n.t('here') }
                                            </Text>
                                        </View>
                                    </View>
                                </Animatable.View>
                            </View>

                        </Swiper>

                    </View>

                </Content>

            </Container>

        );
    }
}

export default Home;

// const mapStateToProps = ({ auth, profile, lang }) => {
//     return {
//         auth: auth.user,
//         user: profile.user,
//         lang: lang.lang
//     };
// };
// export default connect(mapStateToProps, {})(Home);
