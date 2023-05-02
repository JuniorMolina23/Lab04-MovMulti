import { StatusBar } from "expo-status-bar";
import { View, Text, Switch, TouchableOpacity, StyleSheet} from "react-native";

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Configuración</Text>
            <View style={styles.opcion}>
                <Switch />
                <Text style={styles.textoOpcion}>Notificaciones</Text>
            </View>
            <View style={styles.opcion}>
                <Switch />
                <Text style={styles.textoOpcion}>Modo oscuro</Text>
            </View>
            <TouchableOpacity style={styles.boton}>
                <Text style={styles.textoBoton}>Guardar</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 24,
      marginBottom: 20,
    },
    opcion: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    textoOpcion: {
      marginLeft: 10,
    },
    boton: {
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 5,
    },
    textoBoton: {
      color: 'white',
    },
  });