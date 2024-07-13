import React, { useState } from 'react';
import axios from 'axios';

const BinaryViewer = () => {
  const [documentId, setDocumentId] = useState('');

  const handleInputChange = (e) => {
    setDocumentId(e.target.value);
  };

  const handleFetchDocument = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/document/${documentId}`, {
        responseType: 'blob'
      });

      const url = URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' })); // Adjust MIME type as needed
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={documentId}
        onChange={handleInputChange}
        placeholder="Enter Document ID"
      />
      <button onClick={handleFetchDocument}>Fetch Document</button>
    </div>
  );
};

export default BinaryViewer;
