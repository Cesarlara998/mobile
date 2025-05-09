import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CoachHomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hola, Coach Carlos 👋</Text>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      {/* Card: Clases del día */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Clases de hoy</Text>
        <Text style={styles.cardText}>3 sesiones programadas</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Agenda</Text>
        </TouchableOpacity>
      </View>

      {/* Opciones rápidas */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="people-outline" size={32} color="#fff" />
          <Text style={styles.actionText}>Alumnos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="barbell-outline" size={32} color="#fff" />
          <Text style={styles.actionText}>Planes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubbles-outline" size={32} color="#fff" />
          <Text style={styles.actionText}>Mensajes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="settings-outline" size={32} color="#fff" />
          <Text style={styles.actionText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f6fa',
    flex: 1,
    padding: 16,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#1abc9c',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#3498db',
    width: '47%',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  actionText: {
    marginTop: 8,
    color: '#fff',
    fontWeight: '600',
  },
});
