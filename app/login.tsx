// LoginScreen.tsx
import { AuthContext } from '@/helpers/authContext';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { useContext } from "react";
import { Image, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Button, Divider, Text, TextInput, useTheme } from 'react-native-paper';

export default function LoginScreen() {
  const router = useRouter();
    
  const [email, setEmail] = React.useState('cesar.laraperalta@gmail.com');
  const [password, setPassword] = React.useState('Jayce123');
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const authContext = useContext(AuthContext);

  const isWeb = Platform.OS === 'web';
  const isWideScreen = width >= 768;
  const submitForm = async () => {
    try {
      authContext.logIn(email, password);
      } catch (error) {
        console.log("Login error", error);
    }

  }
      // const getUser = async () => {
      //     try {
      //         let session = await storeGet('userSession');
      //         if (session) return router.navigate('/(protected)/(tabs)/index');
      //     } catch (err) {
      //         // Not logged in
      //         console.log(err);
      //     }
      // }
  
      React.useEffect(() => {
          // getUser();
      },[])
  return (
    <View style={[styles.container, isWeb && isWideScreen && styles.webContainer]}>
      {isWeb && isWideScreen && (
        <View style={[styles.leftPane, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.leftText}>Bienvenido a la App</Text>
        </View>
      )}

      <View style={[styles.rightPane, isWeb && isWideScreen && styles.rightPaneWeb]}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          autoCapitalize="none"
        />

        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />

        <Button mode="contained" onPress={submitForm} style={styles.loginButton}>
          Ingresar
        </Button>
        <Button mode="outlined" style={styles.loginButton} onPress={() => {router.navigate('/register')}}>
          Registrarme
        </Button>
        <Divider style={styles.divider} />
        <Text style={styles.orText}>O ingresa con</Text>

        <Button
          mode="outlined"
          icon={() => (
            <Image
              source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }}
              style={styles.icon}
            />
          )}
          style={styles.socialButton}
          labelStyle={styles.socialText}
        >
          Google
        </Button>

        <Button
          mode="outlined"
          icon={() => (
            <Image
              source={{ uri: 'https://img.icons8.com/fluency/48/000000/facebook-new.png' }}
              style={styles.icon}
            />
          )}
          style={styles.socialButton}
          labelStyle={styles.socialText}
        >
          Facebook
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webContainer: {
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  leftText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightPane: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  rightPaneWeb: {
    flex: 1,
    maxWidth: 500,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
  },
  loginButton: {
    marginVertical: 16,
  },
  divider: {
    marginVertical: 20,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 12,
    color: '#777',
  },
  socialButton: {
    marginBottom: 12,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialText: {
    fontSize: 16,
  },
});
