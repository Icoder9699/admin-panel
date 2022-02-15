import React, { useState } from 'react';

import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default function ImageUpload() {
   const [state, setState] = useState({
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: [
      //   {
      //     uid: '-2',
      //     name: 'image.png',
      //     status: 'done',
      //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      //   },
      ],
   });

   const handleCancel = () => setState({ previewVisible: false });

   const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

   setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
   });
  };

   const handleChange = ({ fileList }) => setState({ fileList });

   const { previewVisible, previewImage, fileList, previewTitle } = state;
   const uploadButton = (
     <div>
       <PlusOutlined />
       <div style={{ marginTop: 8 }}>Upload</div>
     </div>
   );
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
         <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
   )
}
