import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebase } from './firebase';
import { Button, InputItem } from '@ant-design/react-native';
import 'react-native-gesture-handler';
import Input from '@ant-design/react-native/lib/input-item/Input';

export default function App() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<firebase.User | null>(null);

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        setUser(userCredential.user);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  console.log('user', user);
  return (
    <View style={styles.container}>
      <Text>Firebase Authentication with Expo and TypeScript</Text>
      <InputItem
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        clearButtonMode='while-editing'

      />
      <Input
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={handleSignUp} >Sign Up</Button>
      <Button onPress={handleSignIn} >Sign In</Button>
      {user && <Text>Welcome, {user.email}</Text>}
      {user && <Text>token, {user.refreshToken}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
