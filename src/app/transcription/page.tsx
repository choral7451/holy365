import GetQueryClient from "@/app/GetQueryClient";
import {getBibleTitleList} from "@/apis/bible";
import {dehydrate} from "@tanstack/query-core";
import {HydrationBoundary} from "@tanstack/react-query";
import TranscriptionContainer from "@/components/ui/TranscriptionContainer";

async function Page() {
  const queryClient = GetQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["getBibleTitleList"],
    queryFn: () => {
      return getBibleTitleList()
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ["getBibleTitleList"],
    queryFn: () => {
      return getBibleTitleList()
    },
  })
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <TranscriptionContainer />
    </HydrationBoundary>
  )
}

export default Page;