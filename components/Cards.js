import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';

import SVGMenu from '../assets/images/menu.svg';
import SVGLeftArrow from '../assets/images/left-arrow.svg';

import colors from '../assets/colors/colors';

let currentCard = "Das ist die erste Frage";

export default function CardsScreen({ route, navigation }) {
    const [loaded] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    });

    NextCard();
    const { deckItem } = route.params;
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={deckItem.backColor} barStyle='dark-content' />
            <SafeAreaView>
                {/* Background */}
                <LinearGradient
                    colors={[deckItem.backColor, colors.background]}
                    style={styles.background}
                    start={{ x: 0, y: 0.3 }}
                    end={{ x: 0, y: 1 }}
                />

                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <TouchableOpacity style={styles.backbutton} onPress={() => navigation.navigate('Home')}>
                            <SVGLeftArrow width={20} height={20} style={{color: colors.textblack}}/>
                        </TouchableOpacity>
                        <Text style={[styles.title, {color: deckItem.frontColor}]}>{deckItem.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <SVGMenu width={24} height={24} style={{color: deckItem.frontColor, marginTop: 10}}/>
                    </TouchableOpacity>
                </View>

                {/* Cards */}
                <TouchableOpacity activeOpacity={0.5} style={styles.cardsWrapper} onPress={NextCard}>
                    <Text style={styles.cardText}>{currentCard}</Text>
                    <TouchableOpacity activeOpacity={0.5} style={styles.backButton} onPress={PreviousCard}>
                        <Text style={styles.backButtonText}>Letzte Karte</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
}

function NextCard() {
    {/* Hier die nächste Karte aussuchen und in currentCard schreiben, sodass die Frage geändert wird. */}
    console.log("Next Card");
}

function PreviousCard() {
    {/* Hier die nächste Karte aussuchen und in currentCard schreiben, sodass die Frage geändert wird. */}
    console.log("Previous Card");
}

const styles = StyleSheet.create({
    background: {
        height: Dimensions.get('window').height * 0.7,
        width: '100%',
        position: 'absolute',
        zIndex: -1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'top',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        color: colors.textblack,
        fontSize: 50,
        fontFamily: 'Montserrat-Bold',
        marginTop: 30,

        elevation: 10,
        shadowColor: '#000000',
    },
    backbutton: {
        backgroundColor: colors.background,
        borderRadius: 5,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',

        elevation: 10,
        shadowColor: colors.shadow,
    },
    cardsWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
        marginHorizontal: 20,
        height: Dimensions.get('window').height * 0.7,
        borderRadius: 25,
        borderColor: colors.shadow,
        borderWidth: 4,
        borderStyle: 'dashed',

        marginTop: 30,
        marginBottom: 20,
        elevation: 10,
        shadowColor: colors.textblack,

        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        color: colors.textblack,
        fontSize: 30,
        fontFamily: 'Montserrat-Light',
        textAlign: 'center',
        paddingBottom: 50,
    },
    backButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute',
        bottom: -30,

        borderColor: colors.shadow,
        borderWidth: 4,
        borderStyle: 'dashed',
    },
    backButtonText: {
        color: colors.textblack,
        fontSize: 22,
        fontFamily: 'Montserrat-Bold',
    },
});