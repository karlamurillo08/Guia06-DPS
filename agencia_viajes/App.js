import React from 'react';
import {View, StyleSheet,Image, ScrollView, Text} from
'react-native';
const App = () =>{
return(
<>
<ScrollView >
<View style={{flexDirection:'row'}} >
<Image
style={styles.banner}
source={require('./src/img/bg.jpg')} />
</View>
</ScrollView>

<Text style={styles.titulo}>Platillos Salvadoreños</Text>
<View>
  <View>
    <Image
    style={styles.mejores}
    source={require('./src/img/mejores1.jpg')} />
  </View>

  <View>
    <Image
    style={styles.mejores}
    source={require('./src/img/mejores2.jpg')} />
  </View>

  <View>
    <Image
    style={styles.mejores}
    source={require('./src/img/mejores3.jpg')} />
  </View>
</View>

<Text style={styles.titulo}>Rutas Turisticas</Text>
<View style={styles.listado}>

  <View style={styles.listItem}>
    <Image
    style={styles.mejores}
    source={require('./src/img/ruta1.jpg')} />
  </View>

  <View style={styles.listItem}>
    <Image
    style={styles.mejores}
    source={require('./src/img/ruta2.jpg')} />
  </View>

  <View style={styles.listItem}>
    <Image
    style={styles.mejores}
    source={require('./src/img/ruta3.jpg')} />
  </View>

  <View style={styles.listItem}>
    <Image
    style={styles.mejores}
    source={require('./src/img/ruta4.jpg')} />
  </View>
</View>
</>
);
};


const styles = StyleSheet.create({
banner:{
height:250,
flex:1
},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
},
mejores:{
  width:'100%',
  height:200,
  marginVertical:5
},
listItem:{
  flexBasis:'49%'
},
listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent: 'space-between'
},
vistaModal:{
  backgroundColor:'#000000aa',
  flex:1,
},
Modal:{
  backgroundColor: '#fff',
  margin: 50,
  padding: 40,
  borderRadius: 10,
  flex: 1,
},
subtitulo:{
  fontWeight: 'bold',
  fontSize: 14,
  justifyContent: 'center',
}
});
export default App;


















































