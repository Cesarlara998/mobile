// RegisterScreen.tsx
import { account } from '@/helpers/appwrite';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import { ID } from 'react-native-appwrite';
import { Button, Divider, Text, TextInput, useTheme } from 'react-native-paper';

export default function RegisterScreen() {
    const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const isWeb = Platform.OS === 'web';
  const isWideScreen = width >= 768;
  const submitForm = async () => {
    try {
        await account.create(ID.unique(), email, password, name);
        await account.createEmailPasswordSession(email, password);
    } catch (error) {
        
    }

  }
  return (
    <View style={[styles.container, isWeb && isWideScreen && styles.webContainer]}>
      {isWeb && isWideScreen && (
        <View style={[styles.leftPane, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.leftText}>Crea tu cuenta</Text>
        </View>
      )}

      <View style={[styles.rightPane, isWeb && isWideScreen && styles.rightPaneWeb]}>
        <Text style={styles.title}>Registrarse</Text>
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          autoCapitalize="none"
        />

        <TextInput
          label="Nombre completo"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          mode="outlined"
        />

        <Button mode="contained" style={styles.loginButton} onPress={submitForm}>
          Registrarse
        </Button>
        <Button
          onPress={() => {router.navigate('/login')}}
          mode="outlined"
          style={styles.socialButton}
          labelStyle={styles.socialText}
        >
          ingresar con mi cuenta
        </Button>
        <Divider style={styles.divider} />
        <Text style={styles.orText}>O regístrate con</Text>

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
