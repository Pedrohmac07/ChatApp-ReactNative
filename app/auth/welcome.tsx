import ScreenWrapper from '@/components/ScreenWrapper'
import { StyleSheet, Text, View } from 'react-native'
import Typo from '@/components/typo'
import { colors } from '@/constants/theme'

const Welcome = () => {
 return (
  <ScreenWrapper showPattern={true}>
   <Typo color={'white'} size={30} fontWeight={'bold'}>
    Welcome
   </Typo>
  </ScreenWrapper>
 )
}

export default Welcome

const styles = StyleSheet.create({
})
