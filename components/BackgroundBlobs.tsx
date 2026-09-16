import Image from "next/image";
import {
  imgEllipseBlurA,
  imgEllipseBlurB,
  imgEllipseBlurC,
  imgEllipseBlurD,
} from "@/lib/assets";

/**
 * Purely decorative blurred gradient blobs scattered down the page,
 * matching the Figma background layer. Positioned absolutely relative
 * to the <Main> wrapper; pointer-events disabled so they never block
 * interaction.
 */
export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-55px] top-[332px] h-[459px] w-[451px]">
        <Image src={imgEllipseBlurA} alt="" fill className="object-contain" />
      </div>
      <div className="absolute left-[957px] top-[782px] h-[459px] w-[451px]">
        <Image src={imgEllipseBlurA} alt="" fill className="object-contain" />
      </div>
      <div className="absolute left-[351px] top-[990px] h-[255px] w-[251px]">
        <Image src={imgEllipseBlurB} alt="" fill className="object-contain" />
      </div>
      <div className="absolute left-[-107px] top-[1559px] h-[453px] w-[458px]">
        <Image src={imgEllipseBlurC} alt="" fill className="object-contain" />
      </div>
      <div className="absolute left-[996px] top-[1511px] h-[315px] w-[339px]">
        <Image src={imgEllipseBlurD} alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
