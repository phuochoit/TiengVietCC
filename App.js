/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root } from "native-base";
import Home_Component from "./src/components/home";

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Root>
                <Home_Component />
            </Root>
        );
    }
}