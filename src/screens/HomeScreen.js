import {Button, Text, View} from "react-native"
import styles from '../../styles'

const HomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>HomeScreen</Text>
    <View>
    <Button title="Aller sur A propos" onPress={() => navigation.navigate('About')} />
    <Button title="Aller sur le profil" onPress={() => navigation.navigate('Profile')} />
    <Button title="Aller sur les paramètres" onPress={() => navigation.navigate('Settings')} />
    </View>
  </View>
)

export default HomeScreen;
