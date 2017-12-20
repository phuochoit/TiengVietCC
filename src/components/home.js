import React, { Component } from 'react';
import { Container, Header, Body, Button, Icon, Title, Input, Text, Toast } from 'native-base';
import { Clipboard, View, TouchableWithoutFeedback, Keyboard, ScrollView , Dimensions} from 'react-native';
import { isEmpty } from "lodash";
import { DismissKeyboard } from "./dismissKeyboar";
import { tieqViet } from "../api/service";
import { AdMobBannerHeader,AdMobBannerFooter } from "./admob";
import Fab_Component from "./fab";
import SplashScreen from 'react-native-splash-screen';
import {  AdMobInterstitial } from 'react-native-admob';
const { width, height } = Dimensions.get("window");

class Home_Component extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            dataString: "",
            showToast: false
        });
        this._OnClickCopy = this._OnClickCopy.bind(this);
        this._OnClickClear = this._OnClickClear.bind(this);
    }
    componentDidMount() {
        SplashScreen.hide();
    }
    _OnClickClear = () => {
        this.setState({
            dataString: ""
        });
    }
    _OnClickCopy = () => {
        // Display an interstitial
        AdMobInterstitial.setAdUnitID('ca-app-pub-1070789846238739/9944687330');
        AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

        Clipboard.setString(tieqViet(this.state.dataString));
        this.setState({
            showToast: true
        });
        Toast.show({
            text: 'Đã sao chép thành công!',
            position: 'bottom',
            duration: 2000
        });
    }


    render() {
        const newstring = tieqViet(this.state.dataString);
        string = <View style={{ flex: 1 }} />;
        button = null;
        const DismissKeyboardView = DismissKeyboard(View);
        if (!isEmpty(newstring)) {
            button = (
                <Button iconLeft full
                    onPress={this._OnClickCopy}
                    style={{
                        paddingHorizontal: 20,
                        borderRadius: 6,
                        backgroundColor: '#F55020',
                        marginBottom: 5,
                        marginTop: 5
                    }}
                >
                    <Icon name='ios-copy-outline' color="#fff" />
                    <Text>SAO CHÉP</Text>
                </Button>
            );
            string = (
                <ScrollView style={{
                    flex: 1,
                    marginVertical: 10,
                    backgroundColor: '#FAFAFA',
                    padding: 10
                }}
                >
                    <Text>{newstring}</Text>
                </ScrollView>
            );
        }
        return (
            <View style={{ height: height-25}}>
                <Header androidStatusBarColor="#C21D00" style={{ backgroundColor: "#f55020" }}>
                    <Body style={{ alignItems: 'center' }}>
                        <Title>Bộ chuyển đổi Tiếq Việt</Title>
                    </Body>
                </Header>
                <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#fff"}}>
                    <View style={{ flex: 50 }}>
                        <AdMobBannerHeader bannerSize="banner" />
                        <View style={{ flex: 75, marginTop: 5 }}>
                            <Input
                                placeholder='Gõ tiếng Việt vào đây nào các bạn'
                                value={this.state.dataString}
                                onChangeText={
                                    text => this.setState({
                                        dataString: text
                                    })
                                }
                                textAlignVertical="top"
                                multiline={true}
                                style={{
                                    backgroundColor: '#F5F5F5',
                                    padding: 10,
                                    borderRadius: 6,
                                    flex: 1
                                }}
                            />
                        </View>
                        <DismissKeyboardView style={{ flex: 25, justifyContent: "center", marginTop: 5}}>
                            <Button iconLeft
                                onPress={this._OnClickClear}
                                style={{
                                    borderRadius: 6,
                                    backgroundColor: '#F55020',
                                    alignSelf: "flex-end",
                                    paddingHorizontal: 20,
                                    marginTop: 5
                                }}
                            >
                                <Icon name='ios-trash-outline' color="#fff" />
                                <Text>XÓA TẤT CẢ</Text>
                            </Button>
                        </DismissKeyboardView>
                    </View>
                    <DismissKeyboardView style={{ flex: 50 , marginTop:5}}>
                        <View style={{ flex: 60 }}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                {string}
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flex: 35, justifyContent: "flex-end" }}>
                            <Fab_Component/>
                            <AdMobBannerFooter bannerSize="banner" />
                            {button}
                        </View>
                    </DismissKeyboardView>
                </View>
            </View>
        );
    }
}

export default Home_Component;