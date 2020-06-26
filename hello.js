import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useTranslation} from './src/context/LanguageContext';

function Hello() {
  const {t, language, switchLanguage} = useTranslation();
  return (
    <View style={styles.container}>
      <Text>{t('hello')}</Text>
      <Text>{t('Good morning')}</Text>
      <Picker
        selectedValue={language}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) => switchLanguage(itemValue)}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Vietnam" value="vi" />
      </Picker>
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

export default Hello;
