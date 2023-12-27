import * as React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Switch, Linking, findNodeHandle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import colors from '../assets/colors/colors';

import SVGRightArrow from '../assets/images/right-arrow.svg';
import SVGBuyMeACoffee from '../assets/images/buymeacoffee.svg';

/*import AsyncStorage from '@react-native-async-storage/async-storage';

async function getStoredSetting(mon) {
    const value = await AsyncStorage.getItem('settings');
    const jsonVal = JSON.parse(value);

    if (mon == 'alwaysNewCards') return jsonVal.alwaysNewCards == "true" ? true : false;
    else if (mon == 'showCategoryDecks') return jsonVal.showCategoryDecks == "true" ? true : false;
    else if (mon == 'showImportedDecks') return jsonVal.showImportedDecks == "true" ? true : false;
    else if (mon == 'showSearchBar') return jsonVal.showSearchBar == "true" ? true : false;
    else return false;
}*/

export default function MenuScreen({ navigation }) {

    const MenuSliderItem = () => {
        const [isEnabled, setIsEnabled] = useState(false);
        const toggleSwitch = () => setIsEnabled(previousState => {
            const newState = !previousState;
            return newState;
        });

        return (
            <Switch
                trackColor={{ false: '#717171', true: '#717171'}}
                thumbColor={isEnabled ? '#ffb300' : colors.textblack}
                value={isEnabled}
            />
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
            <SafeAreaView>
                {/* Header */}
                <View style={styles.header}>
                    <View/>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <SVGRightArrow width={24} height={24} style={{color: 'black', marginTop: 10}}/>
                    </TouchableOpacity>
                </View>

                {/* Menu */}
                <View style={styles.menu}>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Always show new cards</Text>
                        <MenuSliderItem/>
                    </View>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Show default decks</Text>
                        <MenuSliderItem/>
                    </View>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Show imported decks</Text>
                        <MenuSliderItem/>
                    </View>
                    <View style={styles.menuElement}>
                        <Text style={styles.menuTitle}>Show search bar</Text>
                        <MenuSliderItem/>
                    </View>
                </View>

                {/* Footer */}
                <TouchableOpacity activeOpacity={0.5} style={styles.footer} onPress={() => Linking.openURL('https://www.buymeacoffee.com/mirzapolat')}>
                    <SVGBuyMeACoffee width={40} height={40}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18, color: colors.textblack, marginBottom: 5}}>Like this app?</Text>
                        <Text style={{fontFamily: 'Montserrat-Light', fontSize: 14, color: colors.textblack}}>Support the developer with a small donation on buymeacoffee.com</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    menu: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    menuTitle: {
        fontFamily: 'Montserrat-Light',
        fontSize: 20,
        color: colors.textblack,
        width: '70%',
    },
    menuElement: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: colors.textgrey,
        borderBottomWidth: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 50,
        padding: 20,

        backgroundColor: '#ffdd00',
        borderRadius: 15,
        borderColor: colors.textgrey,
        borderWidth: 1,

        elevation: 10,
        shadowColor: '#aaaaaa',
    },
});