import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text>Detalhes do orfanato</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
