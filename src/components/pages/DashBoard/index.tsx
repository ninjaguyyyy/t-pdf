import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import { MyDocument } from 'components/pages/pdf/MyDocument';

export default function DashBoard() {
  return (
    // <div>
    //   <PDFDownloadLink document={<MyDocument />} fileName="FORM">
    //     {({ loading }) =>
    //       loading ? <button>Loading Document...</button> : <button>Download</button>
    //     }
    //   </PDFDownloadLink>
    // </div>
    <PDFViewer className="w-full h-full">
      <MyDocument />
    </PDFViewer>
  );
}
