import RecruitContainer from "@/components/ui/recruit/RecruitContainer"

async function Page() {
  // const queryClient = GetQueryClient()
  //
  // await queryClient.prefetchQuery({
  //   queryKey: ["getBibleTitleList"],
  //   queryFn: () => {
  //     return getBibleTitleList()
  //   },
  // })
  //
  // await queryClient.prefetchQuery({
  //   queryKey: ["getBibleTitleList"],
  //   queryFn: () => {
  //     return getBibleTitleList()
  //   },
  // })
  // const dehydratedState = dehydrate(queryClient)

  return (
    // <HydrationBoundary state={dehydratedState}>
      <RecruitContainer />
    // </HydrationBoundary>
  )
}

export default Page;