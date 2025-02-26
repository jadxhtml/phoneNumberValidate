import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const PhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    setPhoneNumber(phone);
    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style = {{
        marginTop: 40,
        marginBottom: 30,
        fontSize: 30,
        borderBottomWidth: 1,
        paddingBottom: 15,
        
      }}>Đăng nhập</Text>
      <Text style = {{
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20
      }}>Nhập số điện thoại:</Text>
      <Text style = {{marginBottom: 10}}>Sử dụng số điện thoại để đăng nhập hoặc đăng kí tại One Housing Pro</Text>
      <TextInput
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phoneNumber}
        onChangeText={validatePhoneNumber}
        style={{
          height: 40,
          borderBottomColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,

        }}
      />
      <Button
        title="Kiểm tra"
        style = {{
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default PhoneNumberValidation