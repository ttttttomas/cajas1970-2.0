'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import Image from "next/image";

export default function CarouselComponent() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
  <CarouselContent>
    <CarouselItem>
      <Image alt="image 1" src="/carousel/1.png" width={400} height={400} />
    </CarouselItem>
    <CarouselItem>
    <Image alt="image 2" src="/carousel/2.png" width={400} height={400} />
    </CarouselItem>
    <CarouselItem>
    <Image alt="image 3" src="/carousel/3.png" width={400} height={400} />
    </CarouselItem>
    <CarouselItem>
      <Image alt="image 4" src="/carousel/4.png" width={400} height={400} />
    </CarouselItem>
  </CarouselContent>
</Carousel>

  );
}
;