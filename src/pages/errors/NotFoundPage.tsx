import { FlexContainer } from "@/components/base/FlexContainer"

export const NotFoundPage = () => {
  return (
    <FlexContainer className="flex-col flex-center"> 
      <h1 className="text-5xl font-bold m-5">404</h1>
      <p>요청하신 페이지를 찾을 수 없습니다</p>
    </FlexContainer>
  )
}