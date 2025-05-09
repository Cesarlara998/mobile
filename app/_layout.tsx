import { AuthProvider } from "@/helpers/authContext";
import { Slot, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
const avoidLayout = ['/login', '/register']

export default function RootLayout() {
    const pathname = usePathname();
  return (
    <AuthProvider>
      <StatusBar style="auto" />
        {avoidLayout.includes(pathname) ? <Slot /> : <Stack>
        <Stack.Screen
          name="(protected)"
          
          options={{
            title: 'title',
            
            headerShown: false,
            animation: "none",
          }}
        />
      </Stack>}
    </AuthProvider>
  );
}