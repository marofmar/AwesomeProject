import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ListIcon from '../assets/list.svg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  
  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log('user', user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleLogin = async () => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <View
      style={styles.container}
    >
      <ListIcon />    
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="이메일"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput 
          placeholder="비밀번호"
          value={password}
          onChangeText={text=> setPassword(text)} 
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonOutlineText}>회원가입</Text>
        </TouchableOpacity>
      </View>  
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF2D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 10,

  },
  input: {
    backgroundColor: '#FFF6F6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: '30%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  button: {
    backgroundColor: '#ECFFB1',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#3E6545',
    fontWeight: '500',
    fontSize: 16,
  }, 
  buttonOutline: {
    backgroundColor: '#3E6545',
    marginTop: 10,
    borderColor: '#ECFFB1',
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: '#ECFFB1',
    fontWeight: '500',
    fontSize: 16,
    
  
  },
  
})