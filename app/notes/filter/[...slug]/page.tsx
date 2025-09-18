import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";

import NotesClient from "../../Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function FilterPage({ params }: Props) {
  const queryClient = new QueryClient();
  const { slug } = await params;
  const selectedTag = slug?.at(0) === "all" ? "" : slug?.at(0);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={selectedTag} />
    </HydrationBoundary>
  );
}
