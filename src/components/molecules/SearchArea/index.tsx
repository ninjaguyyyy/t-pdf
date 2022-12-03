import { BiSearchAlt } from 'react-icons/bi';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

type Props = {
  className?: string;
};

export default function SearchArea({ className }: Props) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const showModal = () => {
    setIsOpenModal(true);
  };

  const hideModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={className}>
      <BiSearchAlt size={20} onClick={showModal} className="cursor-pointer xs:hidden" />
      <Button
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
        className="!bg-black xsup:!hidden"
        onClick={showModal}
      />

      <Modal title="Basic Modal" open={isOpenModal} onCancel={hideModal} footer={[]}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
