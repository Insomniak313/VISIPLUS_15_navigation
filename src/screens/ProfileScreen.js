import {Button, Text, View} from "react-native"
import styles from '../../styles'

const ProfileScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>ProfileScreen</Text>

    <Button title="Revenir" onPress={() => navigation.goBack()} />
  </View>
)


export default ProfileScreen;
