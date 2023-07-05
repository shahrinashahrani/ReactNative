import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';

function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button
          title="Enter"
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
      </View>
    </SafeAreaView>
  );
}
export default MainScreen;
