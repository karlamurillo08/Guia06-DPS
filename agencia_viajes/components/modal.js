import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';

const App = () =>{
    const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
    return(
        <>
        <ScrollView>
            <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {
                alert('Modal has been closed');
            }} >
                <View style={styles.vistaModal}>
                    <View style={styles.Modal}>
                        <Text style={styles.subtitulo}>Ir a la playa</Text>
                        <Text>El Salvador cuenta con hermosas playas a nivel Centroamerica</Text>
                        <Button title="Cerrar" onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}} ></Button>                      
                    </View>
                </View> 
            </Modal>
        </ScrollView>
        </>
    )
}