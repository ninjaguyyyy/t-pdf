import { Font, StyleSheet, Text, View } from '@react-pdf/renderer';

const borderColor = '#EEE7DF';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#EEE7DF',
    backgroundColor: '#907B62',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    color: '#ffffff'
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
  }
});

const TimeTableHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.monday}>Monday</Text>
      <Text style={styles.day}>Tuesday</Text>
      <Text style={styles.day}>Wednesday</Text>
      <Text style={styles.day}>Thursday</Text>
      <Text style={styles.day}>Friday</Text>
      <Text style={styles.day}>Saturday</Text>
      <Text style={styles.sunday}>Sunday</Text>
    </View>
  );
};

export default TimeTableHeader;
