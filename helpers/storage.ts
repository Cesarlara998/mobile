import AsyncStorage from '@react-native-async-storage/async-storage';

import * as SecureStore from 'expo-secure-store';

export async function storeSave(key:string, value:any) {
      return AsyncStorage.setItem(key, value);
}

export async function storeGet(key:string) {
      return SecureStore.getItemAsync(key);
}