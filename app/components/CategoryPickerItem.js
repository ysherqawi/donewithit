import React from 'react';
import { StyleSheet, View } from 'react-native';

import Icon from './Icon';
import Text from './Text';

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: { marginTop: 5, textAlign: 'center' },
});

export default CategoryPickerItem;
