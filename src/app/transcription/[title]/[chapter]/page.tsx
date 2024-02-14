import TranscriptionDetailContainer from "@/components/ui/TranscriptionDetailContainer";
import GetQueryClient from "@/app/GetQueryClient";
import {countChapters, getVerseList} from "@/apis/bible";
import {dehydrate} from "@tanstack/query-core";
import {HydrationBoundary} from "@tanstack/react-query";

interface Props {
  params: {title, chapter}
}

async function Page(props: Props) {
  const queryClient = GetQueryClient()

  const {title, chapter} = props.params;

  await queryClient.prefetchQuery({
    queryKey: ["countChapters", props.params.title],
    queryFn: () => {
      return countChapters(title)
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ["getVerseList", props.params.title],
    queryFn: () => {
      return getVerseList(title, chapter)
    },
  })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <TranscriptionDetailContainer />
    </HydrationBoundary>
  )
}

export default Page;