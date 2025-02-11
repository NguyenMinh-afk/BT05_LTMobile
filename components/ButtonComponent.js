// ButtonComponent.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, color, onPress, textColor }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300, // Đặt chiều rộng cho các nút
    height: 60, // Đặt chiều cao cho các nút
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center', // Canh giữa văn bản theo chiều dọc
  },
  buttonText: {
    color: 'white', // Màu chữ mặc định là màu trắng
    fontSize: 16,
  },
});

export default ButtonComponent;
