import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export async function storeSave(key:string, value:any) {
    if (Platform.OS === 'web') {
      return AsyncStorage.setItem(key, value);
    } else { // mobile
      return SecureStore.setItemAsync(key, value.toString());
    }
}

export async function storeGet(key:string) {
    if (Platform.OS === 'web') {
      return AsyncStorage.getItem(key);
    } else {
      return SecureStore.getItemAsync(key);
    }
  
}