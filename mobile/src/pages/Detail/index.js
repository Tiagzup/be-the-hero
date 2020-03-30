import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png'; 

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} />

            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size="28" color="#E82041" />
            </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, {margin: 0 }]}>ONG: </Text>
                    <Text style={styles.incidentValue}>APAD: </Text>

                    <Text style={styles.incidentProperty}>casos: </Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.incidentProperty}>VALOR: </Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>    
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o héroi desse caso!</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.acitons}>
                    <TouchableOpacity style={styles.aciton} onPress={() => {}}>
                        <Text style={styles.acitonText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.aciton} onPress={() => {}}>
                        <Text style={styles.acitonText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}