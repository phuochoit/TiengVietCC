import React, { Component } from 'react';
import { Button, Icon, View, Fab, Text} from 'native-base';
import { Linking } from 'react-native';
import { developer_google, google_app, facebook_share, google_plus} from "../api/string";
class Fab_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            style: false
        };
        this._OnClickShare = this._OnClickShare.bind(this);
        this._OnClickFackbook = this._OnClickFackbook.bind(this);
        this._OnClickAddApp = this._OnClickAddApp.bind(this);
        this._OnClickRate = this._OnClickRate.bind(this);
        this._onSetFabClick = this._onSetFabClick.bind(this);
        
    }

    _OnClickShare = () => {
        this.setState({
            active: !this.state.active,
            style: !this.state.style
        });
    }
    _onSetFabClick = () => {
        this.setState({
            active: false,
            style: false
        });
    }
    _OnClickFackbook = () => {
        this._onSetFabClick;
        Linking.openURL(facebook_share).catch(err => console.error('An error occurred', err));
    }
    _OnClickAddApp = () => {
        this._onSetFabClick;
        Linking.openURL(developer_google).catch(err => console.error('An error occurred', err));
    }
    _OnClickRate = () => {
        this._onSetFabClick;
        Linking.openURL(google_app).catch(err => console.error('An error occurred', err));
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF'}}
                    position="bottomRight"
                    onPress={this._OnClickShare}>
                    <Icon name="share" />
                    <Button
                        style={{ backgroundColor: '#F55020', top: !this.state.style ? 0 : null }}
                        onPress={this._OnClickaddapp}
                    >
                        <Icon name="ios-add-outline" />
                    </Button>
                    <Button
                        style={{ backgroundColor: '#FFCA28', top: !this.state.style ? 0 : null }}
                        onPress={this._OnClickRate}
                    >
                        <Icon name="ios-star-outline" />
                    </Button>
                    <Button
                        style={{ backgroundColor: '#3B5998', top: !this.state.style ? 0 : null }}
                        onPress={this._OnClickFackbook}
                    >
                        
                        <Icon name="logo-facebook" />
                    </Button>
                </Fab>
            </View>
        );
    }
}

export default Fab_Component;

