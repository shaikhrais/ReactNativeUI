import React, {Fragment, useState} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';
import {ml10} from '../common/commonStyles';
import {colors} from '../utils/colors';
import {FormErrorMessage} from './commonText';
import {CardSurface, RowView} from './commonViews';

interface InputFieldsProps {
  value: string;
  placeholder?: string;
  onChangeText: CallableFunction;
  image: JSX.Element;
  errorMessage?: string;
}

export const InputFields: React.FC<InputFieldsProps> = ({
  value,
  placeholder,
  onChangeText,
  image,
  errorMessage,
}) => {
  const [selection, setSelection] = useState<any>(
    Platform.OS === 'android' ? {start: 0} : null,
  );

  const onFocus = () => {
    if (Platform.OS === 'android') {
      setSelection(null);
      // this.setState({ selection:null });
    }
  };

  const onBlur = () => {
    if (Platform.OS === 'android') {
      setSelection({start: 0, end: 0});
    }
  };

  return (
    <>
      <RowView style={styles.testBoxRowStyle}>
        <TextInput
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          selection={selection}
          style={{flex: 1}}
          placeholder={placeholder}
          value={value}
          placeholderTextColor={'#adb5bd'}
          onChangeText={val => onChangeText(val)}
        />
        <View>
          <CardSurface style={styles.cardSurface}>{image}</CardSurface>
        </View>
      </RowView>
      {errorMessage ? (
        <FormErrorMessage style={ml10}>{errorMessage}</FormErrorMessage>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  testBoxRowStyle: {
    // paddingVertical: 5,
    borderRadius: 35,
    borderColor: colors.borderTextColor,
    borderWidth: 0.5,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginTop: 12,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0 , height: 2},
    // shadowOpacity: 0.5,
    // shadowRadius: 2,
    elevation: 0.4
  },
  cardSurface: {
    left: 8,
    height: 42,
    width: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
