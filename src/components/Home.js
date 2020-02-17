import React, { Component } from "react";
import {View, Text} from "react-native";
import {Container, Content, Header, Button, Left, Icon, Title, Body, Right, Toast} from 'native-base'
import styles from '../../assets/style';

import i18n from "../../locale/i18n";
import {connect} from "react-redux";
import {chooseLang} from "../actions";
import Language from "./Language";

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
        drawerIcon      : null
    });

    render() {

        return (
            <Container>

                <Header style={styles.headerView}>
                    <Left style={styles.leftIcon}>
                        <Button style={styles.Button} transparent onPress={() => { this.props.navigation.openDrawer()} }>
                            <Icon style={[styles.text_darkGreen, styles.textSize_22]} type="Entypo" name='grid' />
                        </Button>
                    </Left>
                    <Body style={styles.bodyText}>
                        <Title style={[styles.textRegular , styles.text_darkGreen, styles.textSize_20]}>{i18n.translate('home')}</Title>
                    </Body>
                    <Right style={styles.rightIcon}>
                        <Button style={styles.Button} transparent onPress={() => this.chickUser('Notification')}>
                            <Icon style={[styles.text_darkGreen, styles.textSize_22]} type="MaterialIcons" name='notifications' />
                        </Button>
                    </Right>
                </Header>

                <Content contentContainerStyle={styles.bgFullWidth} style={styles.contentView}>

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
