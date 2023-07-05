import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AxiosData from './src/components/AxiosData';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AxiosData />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App;
