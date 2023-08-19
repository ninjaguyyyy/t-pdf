import { PDFViewer } from '@react-pdf/renderer';

import { MyDocument } from 'components/pages/pdf/MyDocument';

export default function DashBoard() {
  return (
    <PDFViewer className="w-full h-full">
      <MyDocument />
    </PDFViewer>
  );
}
