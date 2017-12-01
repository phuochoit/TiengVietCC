import React, { Component } from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Form,
    Input,
    Content,
    Item,
    Text,
    Toast
} from 'native-base';

import { isEmpty } from 'lodash';
import { Clipboard, View, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { tieqViet } from "../api/service";

import Fab_Component from "./fab";
import { AdMobBannerHeader, AdMobBannerFooter } from "./admob";
import { DismissKeyboard } from "./dismissKeyboar";
class Home_Component extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            dataString: "",
            showToast: false
        });
        this._OnClickCopy = this._OnClickCopy.bind(this);
    }
    _OnClickCopy = () => {
        Clipboard.setString(tieqViet(this.state.dataString));
        this.setState({
            showToast: true
        });
        Toast.show({
            text: 'Đã sao thành công!',
            position: 'bottom',
            duration: 2000
        });
    }


    render() {
        const newstring = tieqViet(this.state.dataString);
        string = <View style={{ flex: 40 }} />;
        button = <View style={{ flex: 1 }} />;
        const DismissKeyboardView = DismissKeyboard(View)

        if (!isEmpty(newstring)) {
            button = (
                <Button iconLeft full
                    onPress={this._OnClickCopy}
                    style={{
                        paddingHorizontal: 20,
                        borderRadius: 6,
                        backgroundColor: '#F55020',
                        marginBottom:10
                    }}
                >
                    <FontAwesome name='copy' color="#fff" />
                    <Text>COPY</Text>
                </Button>
            );
            string = (
                <View style={{
                    flex: 1,
                    marginVertical: 10,
                    height: 100,
                    borderRadius: 6,
                    backgroundColor: '#FAFAFA',
                }}
                >
                    <Text>{newstring}</Text>
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>

                <Header style={{ backgroundColor: "#f55020" }}>
                    <Body style={{ alignItems: 'center' }}>
                        <Title>Bộ chuyển đổi Tiếq Việt</Title>
                    </Body>
                </Header>

                <View style={{
                    flex: 1,
                    backgroundColor: '#FFFFFF',
                    paddingHorizontal: 10,

                }}>
                    <View style={{ flex: 40 }}>
                        <AdMobBannerHeader bannerSize="banner" />
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
                                height: 100,
                                backgroundColor: '#F5F5F5',
                                padding: 10,
                                borderRadius: 6
                            }}
                        />
                    </View>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flex: 60, marginTop: 15 }}>
                            {string}
                            <AdMobBannerFooter bannerSize="banner" />

                            {button}
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        );
    }
}

export default Home_Component;