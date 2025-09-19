import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NoteDetailsClient from "@/app/notes/[id]/NotePreview.client";
import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <Modal>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </Modal>
  );
};

export default NotePreview;
