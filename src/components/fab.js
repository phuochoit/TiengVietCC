import React, { Component } from 'react';
import { ShareDialog } from 'react-native-fbsdk';
import { Button, Icon, View, Fab} from 'native-base';
import { Share } from 'react-native'

class Fab_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this._OnClickFackbook = this._OnClickFackbook.bind(this);
    }

    _OnClickFackbook = () => {
        this.setState({ active: !this.state.active })
        Share.share({
            message: 'a message to share',
            title: 'title of the message'
        });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={this._OnClickFackbook}>
                    <Icon name="share" />
                </Fab>
            </View>
        );
    }
}

export default Fab_Component;

