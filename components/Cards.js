import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import SVGMenu from '../assets/images/menu.svg';
import SVGLeftArrow from '../assets/images/left-arrow.svg';
import colors from '../assets/colors/colors';

import { heuteCards, gesternCards, morgenCards, sparkCards } from '../assets/data/cards.js';
var previousCardLog;

export default function CardsScreen({ route, navigation }) {

    var theDeck;
    if (route.params.deckItem.title === 'Heute') {
        theDeck = heuteCards;
    } else if (route.params.deckItem.title === 'Gestern') {
        theDeck = gesternCards;
    } else if (route.params.deckItem.title === 'Morgen') {
        theDeck = morgenCards;
    } else if (route.params.deckItem.title === 'Spark Cards') {
        theDeck = sparkCards;
    } else {
        theDeck = ['Error loading Deck'];
    }

    const [randomNumber, setRandomNumber] = useState(() => {
        previousCardLog = [];
        r = Math.floor(Math.random() * theDeck.length);
        previousCardLog.push(r);
        console.log(previousCardLog);
        return r;
    });

    nextRandomCard = () => {
        if (theDeck.length >= 2) {
            do {
                rand = Math.floor(Math.random() * theDeck.length);
            } while (rand == randomNumber);

            setRandomNumber(rand);
            previousCardLog.push(rand);
            console.log(previousCardLog);
        }
    }

    previousCard = () => {
        if (previousCardLog.length >= 1) {
            setRandomNumber(previousCardLog.pop());
            console.log(previousCardLog);
        }
    }

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
                <TouchableOpacity activeOpacity={0.5} style={styles.cardsWrapper} onPress={() => nextRandomCard()}>
                    <Text style={styles.cardText}>{theDeck[randomNumber]}</Text>
                    <TouchableOpacity activeOpacity={0.5} style={styles.backButton} onPress={() => previousCard()}>
                        <Text style={styles.backButtonText}>Letzte Karte</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
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
        paddingHorizontal: 50,
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