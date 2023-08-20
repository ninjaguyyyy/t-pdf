import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { Fragment } from 'react';

const borderColor = '#EEE7DF';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 25
  },
  monday: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    height: '100%'
  },
  day: {
    width: '15%',
    height: '100%',
    borderRightColor: borderColor,
    borderRightWidth: 1
  },
  sunday: {
    width: '15%'
  },
  time: {
    position: 'absolute',
    backgroundColor: '#EEE7DF',
    borderRadius: 6,
    fontSize: 8,
    width: 30,
    height: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    left: -40
  }
});

type Props = {
  rowsCount: number;
};

const TimeTableBlankRow = ({ rowsCount }: Props) => {
  const blankRows = Array(rowsCount).fill(0);
  const rows = blankRows.map((x, i) => (
    <View style={styles.row} debug={false} key={i}>
      <View style={styles.time} debug={false}>
        <Text>6:00</Text>
      </View>
      <View style={styles.monday}></View>
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.day} />
      <View style={styles.sunday} />
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TimeTableBlankRow;
