import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ScreenA({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Screen_A')
    }
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
                style={styles.menybuttonContainer}>
            <Image
                source={require('../assets/BuilderIcon.png')}
                style={styles.menybuttonLogo}
            />
            <Text style={styles.menybuttonText}>{title}</Text>
        </TouchableOpacity>
        
        )
        const LogoutButton = ({ title }) => (
            <TouchableOpacity onPress={onPressHandler}
                style={styles.menybuttonContainer}>
            <Image
                source={require('../assets/logout.png')}
                style={styles.menybuttonLogo}
            />
            <Text style={styles.menybuttonText}>{title}</Text>
        </TouchableOpacity>
        
        )
    const Meny = () =>(
        <View style={styles.meny}>
            <View>
            <ProfileButton title="Min profil" size="sm" backgroundColor="" />
            <LogoutButton title="Logga ut" size="sm" backgroundColor="" />
            </View>
        </View>
    )
        const showMeny = true
    return (
        <View style={styles.body}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                  {showMeny && <Meny ></Meny>}
                  
                    <Image
                        style={styles.logo}
                        source={require('../assets/logo.png')}
                    />
                      <TouchableOpacity >
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
        elevation: 8,
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
    text:{
        padding: 8
    },
    user:{
        alignSelf: 'flex-start',
        marginLeft: 30

    },
    meny:{
        position: 'absolute',
        top: 650,
        left: 150,
        width: 180,
        height: 100,
        backgroundColor: '#D7D7D7',
        borderRadius: 10,
        
    },
    menybuttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#FDDF75",
        borderRadius: 50,
        height: 30,
        margin: 10,
        paddingLeft: 25,
        paddingRight: 25,
    },
    menybuttonText: {
        fontSize: 15,
        color: "#000000",
    },
    menybuttonLogo:{
       width: 15,
       height: 20, 
    }

});
