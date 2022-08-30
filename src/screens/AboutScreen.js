import {Button, Text, View} from "react-native"
import styles from '../../styles'

const AboutScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>AboutScreen</Text>

    <Button title="Aller sur A propos... à nouveau !" onPress={() => navigation.push('About')} />
    <Button title="Revenir" onPress={() => navigation.goBack()} />
  </View>
)


export default AboutScreen;
