import React from "react";
import { View } from "react-native";

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob';

const BANNER_HEADER = 'ca-app-pub-1070789846238739/6598216145';
const BANNER_FOOTER = 'ca-app-pub-1070789846238739/6699779188'


export class AdMobBannerHeader extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_HEADER}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }
}

export class AdMobBannerFooter extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5, justifyContent:'flex-end' }}>
                <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_FOOTER}
                    didFailToReceiveAdWithError={this.bannerError}
                    testDevices={[AdMobBanner.simulatorId]}
                />
            </View>
        )
    }
}
