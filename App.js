import React from 'react';
import { AppLoading, Font } from 'expo';
import { Root } from "native-base";
import Home_Component from "./src/components/home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            fontLoaded: false,
        });
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true });
    }


    render() {
        if (!this.state.fontLoaded) {
            return (<Expo.AppLoading />);
        }

        return (
            <Root>
                <Home_Component />
            </Root>
        );
    }
}
export default App; 