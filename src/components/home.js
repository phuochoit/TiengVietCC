import React, { Component } from 'react';
import { Container, Header, Body, Button, Icon, Title, Input, Text, Toast } from 'native-base';
import { Clipboard, View, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { isEmpty } from "lodash";

import { tieqViet } from "../api/service";
import { AdMobBannerHeader, AdMobBannerFooter } from "./admob";

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

    _OnClickClear = () => {
        this.setState({
            dataString: ""
        });
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
        string = <View style={{ flex: 1 }} />;
        button = <View style={{ flex: 1 }} />;

        if (!isEmpty(newstring)) {
            button = (
                <Button iconLeft full
                    onPress={this._OnClickCopy}
                    style={{
                        paddingHorizontal: 20,
                        borderRadius: 6,
                        backgroundColor: '#F55020',
                        marginBottom: 10
                    }}
                >
                    <FontAwesome name='copy' color="#fff" />
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
            <Container>
                <Header style={{ backgroundColor: "#f55020" }}>
                    <Body style={{ alignItems: 'center' }}>
                        <Title>Bộ chuyển đổi Tiếq Việt</Title>
                    </Body>
                </Header>
                <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "#fff" }}>
                    <View style={{ flex: 50 }}>
                        <View style={{ flex: 80 }}>
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
                                    backgroundColor: '#F5F5F5',
                                    padding: 10,
                                    borderRadius: 6,
                                    flex: 1
                                }}
                            />
                        </View>
                        <View style={{ flex: 20, justifyContent: "center", }}>
                            <Button iconLeft
                                onPress={this._OnClickClear}
                                style={{
                                    borderRadius: 6,
                                    backgroundColor: '#F55020',
                                    alignSelf: "flex-end",
                                    paddingHorizontal: 20
                                }}
                            >
                                <MaterialIcons name='clear' color="#fff" />
                                <Text>XÓA TẤT CẢ</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{ flex: 50 }}>
                        <View style={{ flex: 65 }}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                {string}
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ flex: 35, justifyContent: "flex-end" }}>
                            <AdMobBannerFooter bannerSize="banner" />
                            {button}
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

export default Home_Component;