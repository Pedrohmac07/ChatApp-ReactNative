import { colors } from '@/constants/theme'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import Animated, { FadeInDown } from 'react-native-reanimated'

const SplashScreen = () => {
 return (
  <View style={styles.container}>
   <StatusBar barStyle={'light-content'} backgroundColor={colors.secondaryHighlight} />
   <Animated.Image
    source={require('../assets/images/splashImage.png')}
    entering={FadeInDown.duration(700).springify()}
    style={styles.logo}
    resizeMode={"contain"}
   />
  </View>
 )
}

export default SplashScreen

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.background,
 },
 logo: {
  height: '23%',
  aspectRatio: 1,
 }
})
