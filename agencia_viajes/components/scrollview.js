import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView, TouchableHighlight} from 'react-native';
const ScrollView = () =>{
    return(
    <>
<View style={{flexDirection: 'row'}}>
    <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
</View>

<View style={styles.contenedor}>
    <Text style={styles.titulo}>Que hacer en El Salvador</Text>
    <ScrollView horizontal>
        <View>
            <TouchableHighlight
            onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}
            >
            <Image
            style={styles.ciudad}

            source={require('./src/img/actividad1.jpg')}
            />
            </TouchableHighlight>
        </View>

        <View>
            <Image
            style={styles.ciudad}
            source={require('./src/img/actividad2.jpg')}
            />
        </View>

        <View>
            <Image
            style={styles.ciudad}
            source={require('./src/img/actividad3.jpg')}
            />
        </View>

        <View>
            <Image
            style={styles.ciudad}
            source={require('./src/img/actividad4.jpg')}
            />
        </View>

        <View>
            <Image
            style={styles.ciudad}
            source={require('./src/img/actividad5.jpg')}
            />
        </View>
    </ScrollView>
</View>
</>
    );
}
export default ScrollView;
