import React from 'react';
import {  StyleSheet,  View, Image, TouchableOpacity, SafeAreaView} from 'react-native';

export default function ScreenA({ navigation }) {

    return (
     
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/menu-Icon.png')}
                    />
                    <TouchableOpacity>
                        <Image
                            style={styles.icon}
                            source={require('../assets/BuilderIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
         
          
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        
    },
    headerContainer: {
        width: '100%',
        height: 200,
        position:'absolute',
        zIndex: 1,
        top: 48
        
    },
    header: {
      
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'flex-end',
        
    },
    logo: {
        margin: 38
    },
    icon: {
        margin: 34
    },

});
