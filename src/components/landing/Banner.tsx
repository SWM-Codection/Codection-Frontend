import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import { Card, CardContent } from "../ui/card"
import Autoplay from "embla-carousel-autoplay"
import { HTMLAttributes } from "react"

interface BannerProps extends HTMLAttributes<HTMLDivElement> {}

// TODO: Add custom [Previous / Next] carousel 
export const Banner = ({...props} : BannerProps) => {
  return (
    <Carousel {...props} plugins={[Autoplay({
      delay: 3000, 
      jump: false, 
      stopOnMouseEnter: true, 
      stopOnInteraction: false,
    })]}>
      <CarouselContent className="carousel-content-here">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} >
            <Card>
              <CardContent className="flex flex-center h-[400px]">
                <div className="text-5xl">
                  {index + 1}번째 배너
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}