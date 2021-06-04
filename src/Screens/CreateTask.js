import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity, Button, } from 'react-native';

export default function ScreenA({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Screen_B')
    }
    const Meny = () => (
        setShowMeny(true)

    )
    const Back = () => (
        setShowMeny(false)

    )
    let [showMeny, setShowMeny] = useState(false)


    const AppButton = ({ title }) => (
        <TouchableOpacity onPress={onPressHandler}
            style={styles.appButtonContainer}>
            <Image
                source={require('../assets/addTask.png')}
            />
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );


    const ProfileButton = ({ title }) => (
        <TouchableOpacity onPress={onPressHandler}
            style={styles.ProfileButtonContainer}>
            <Image
                source={require('../assets/BuilderIcon.png')}
                style={styles.menybuttonLogo}
            />
            <Text style={styles.menybuttonText}>{title}</Text>
        </TouchableOpacity>

    )

    const LogoutButton = ({ title }) => (
        <TouchableOpacity onPress={onPressHandler}
            style={styles.LogoutButtonContainer}>
            <Image
                source={require('../assets/logout.png')}
                style={styles.menybuttonLogo}
            />
            <Text style={styles.menybuttonText}>{title}</Text>
        </TouchableOpacity>

    )

    
    return (

        <View style={styles.body}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.png')}
                    />
                    <TouchableOpacity onPress={Meny}>
                        <Image
                            style={styles.icon}
                            source={require('../assets/BuilderIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View>

                <AppButton title="Skapa ett ärende" size="sm" backgroundColor="" />
            </View>

            <Text style={styles.user}>
                Dabstra
            </Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Philip ska bjuda Dabstra på öl 🍺
            </Text>
            </View>
            <View style={styles.textContainer}>

            </View>
            <View style={styles.textContainer}>

            </View>
            <View style={styles.textContainer}>

            </View>
            {showMeny && <View style={styles.meny}>
                <View style={styles.triangle}>
                </View>
                    <TouchableOpacity style={styles.exitMeny} onPress={Back}>
                        <Text style={styles.exitMenyText}>X</Text>
                    </TouchableOpacity>
                <View>
                    <ProfileButton title="Min profil" size="sm" backgroundColor="" />
                    <LogoutButton title="Logga ut" size="sm" backgroundColor="" />
                </View>
            </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: 400,
        height: 90,
    },
    appButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#FDDF75",
        width: 280,
        height: 50,
        borderRadius: 50,
        margin: 30,
        padding: 20,
    },
    appButtonText: {
        fontSize: 24,
        color: "#000000",
    },
    textContainer: {
        width: 340,
        height: 70,
        backgroundColor: "#FFF",
        margin: 15,
        borderRadius: 20
    },
    logo: {
        margin: 24
    },
    icon: {
        margin: 34
    },
    text: {
        padding: 8
    },
    user: {
        alignSelf: 'flex-start',
        marginLeft: 30

    },
    meny: {
        position: 'absolute',
        top: 84,
        left: 180,
        width: 200,
        height: 120,
        backgroundColor: '#D7D7D7',
        borderRadius: 10,


    },
    ProfileButtonContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#FDDF75",
        top: 20,
        borderRadius: 50,
        height: 30,
        paddingLeft: 25,
        paddingRight: 25,
        marginLeft: 20,
        marginRight: 20,
    },
    LogoutButtonContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#FDDF75",
        top: 40,
        borderRadius: 50,
        height: 30,
        paddingLeft: 25,
        paddingRight: 25,
        marginLeft: 20,
        marginRight: 20,
    },
    menybuttonText: {
        fontSize: 15,
        color: "#000000",
    },
    menybuttonLogo: {
        width: 15,
        height: 20,
    },
    triangle: {
        position: 'absolute',
        top: -18,
        left: 160,
        width: 20,
        height: 20,
        backgroundColor: "transparent",
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#D7D7D7",

    },
    exitMeny: {
        position: 'absolute',
        left: 180,
    },
    exitMenyText:{
        fontSize:18
    }


});
