import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

export function Routes() {
  const { COLORS } = useTheme(); // para evitar o glitch (piscada branca ao trocar de tela)
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}