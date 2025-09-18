import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";



import { fetchNotes } from "@/lib/api";



import NotesClient from "./filter/[...slug]/Notes.client";





const Notes = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
};

export default Notes;