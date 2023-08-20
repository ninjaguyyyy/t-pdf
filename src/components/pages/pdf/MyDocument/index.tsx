import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import TimeTable from 'components/organisms/TimeTable';
import { invoice } from 'constants/invoice';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row'
  }
});

const days = Array(7).fill(1);

// Create Document Component
export const MyDocument = () => {
  console.log(days);

  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <TimeTable invoice={invoice} />
      </Page>
    </Document>
  );
};
