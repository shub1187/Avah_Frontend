import React, { useState } from 'react';
import base64js from 'base64-js';

const BinaryViewer = () => {
  const [binaryData, setBinaryData] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleInputChange = (e) => {
    setBinaryData(e.target.value);
  };

  const handleViewFile = () => {
    // Convert the binary data (Base64 string) to a byte array
    const byteArray = base64js.toByteArray(binaryData);

    // Create a Blob from the byte array
    const blob = new Blob([byteArray], { type: 'application/pdf' }); // Change type if necessary

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Set the file URL
    setFileUrl(url);
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={binaryData}
        onChange={handleInputChange}
        placeholder="Paste your binary data here"
      ></textarea>
      <br />
      <button onClick={handleViewFile}>View File</button>
      <br />
      {fileUrl && (
        <iframe
          src={fileUrl}
          width="600"
          height="800"
          title="File Viewer"
          style={{ border: '1px solid black' }}
        ></iframe>
      )}
    </div>
  );
};

export default BinaryViewer;
