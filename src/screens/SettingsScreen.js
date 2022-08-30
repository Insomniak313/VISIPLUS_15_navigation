import {Button, Text, View} from "react-native"
import styles from '../../styles'
import {useNavigation} from "@react-navigation/native"

const SettingsScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingsScreen</Text>

      <Button title="Revenir" onPress={() => navigation.goBack()} />
    </View>
  )
}


export default SettingsScreen;
