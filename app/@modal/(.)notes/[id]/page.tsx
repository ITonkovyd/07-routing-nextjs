import Modal from '@/components/Modal/Modal';
import NoteDetailsClient from '@/app/(public routes)/notes/[id]/NoteDetails.client';

const NotePreview = async () => {

  return (
    <Modal>
        <NoteDetailsClient />
    </Modal>
  );
};

export default NotePreview;