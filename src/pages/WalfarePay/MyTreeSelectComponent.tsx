import React, { useState } from 'react';
import { TreeSelect } from 'primereact/treeselect';

const MyTreeSelectComponent = () => {
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);

  const treeData = [
    {
      key: '0',
      label: '카카오페이',
      
    },
    {
      key: '1',
      label: '삼성페이',
    },
    {
      key: '2',
      label: '네이버페이',
    },
  ];

  const onNodeSelect = (e:any) => {
    setSelectedNodeKey(e.value);
  };

  return (
    <div>
      <TreeSelect
        value={selectedNodeKey}
        options={treeData}
        onChange={onNodeSelect}
        placeholder="결제수단을 선택하세요"
        style={{ width: '15rem' }}
      />
    </div>
  );
};

export default MyTreeSelectComponent;