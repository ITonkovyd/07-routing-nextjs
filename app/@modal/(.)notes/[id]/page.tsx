import NoteDetailsClient from "@/app/notes/[id]/NotePreview.client";
import Modal from "@/components/Modal/Modal";

const NotePreview = async () => {
  return (
    <Modal>
      <NoteDetailsClient />
    </Modal>
  );
};

export default NotePreview;
