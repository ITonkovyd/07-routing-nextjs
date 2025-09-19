import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "@/app/(public routes)/notes/[id]/NotePreview.client";
import Modal from "@/components/Modal/Modal";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery({
      queryKey: ["note", id],
      queryFn: () => fetchNoteById(id),
    });
  } catch (error) {
    // Якщо нотатка не знайдена, показуємо 404 сторінку
    notFound();
  }

  return (
    <Modal>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </Modal>
  );
};

export default NotePreview;