import { StyleSheet, View } from '@react-pdf/renderer';

import TimeTableBlankRow from './TimeTableBlankRow';
import TimeTableHeader from './TimeTableHeader';

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
    marginRight: 20,
    marginLeft: 50,
    borderWidth: 1,
    borderColor: '#EEE7DF'
  }
});

type Props = {
  invoice: any;
};

const TimeTable = ({ invoice }: Props) => (
  <View style={styles.tableContainer}>
    <TimeTableHeader />
    <TimeTableBlankRow rowsCount={18} />
  </View>
);

export default TimeTable;
