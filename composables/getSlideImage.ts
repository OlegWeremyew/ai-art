import img1 from "assets/images/reviews/Frame1.webp";
import img2 from "assets/images/reviews/Frame2.webp";
import img3 from "assets/images/reviews/Frame3.webp";
import img4 from "assets/images/reviews/Frame4.webp";
import img5 from "assets/images/reviews/Frame5.webp";
import img6 from "assets/images/reviews/Frame6.webp";
import img7 from "assets/images/reviews/Frame7.webp";
import img8 from "assets/images/reviews/Frame8.webp";
import img9 from "assets/images/reviews/Frame9.webp";
import img10 from "assets/images/reviews/Frame10.webp";
import img11 from "assets/images/reviews/Frame11.webp";
import img12 from "assets/images/reviews/Frame12.webp";
import img13 from "assets/images/reviews/Frame13.webp";
import img14 from "assets/images/reviews/Frame14.webp";
import img15 from "assets/images/reviews/Frame15.webp";
import img16 from "assets/images/reviews/Frame16.webp";
import img17 from "assets/images/reviews/Frame17.webp";
import img18 from "assets/images/reviews/Frame18.webp";
import img19 from "assets/images/reviews/Frame19.webp";
import img20 from "assets/images/reviews/Frame20.webp";
import img21 from "assets/images/reviews/Frame21.webp";

export const getSlideImage = (avatar: string): string => {
  switch (avatar) {
    case "1" :
      return img1
    case "2" :
      return img2
    case "3" :
      return img9
    case "4" :
      return img6
    case "5" :
      return img5
    case "6" :
      return img4
    case "7" :
      return img7
    case "8" :
      return img8
    case "9" :
      return img3
    case "10" :
      return img10
    case "11" :
      return img11
    case "12" :
      return img21
    case "13" :
      return img13
    case "14" :
      return img14
    case "15" :
      return img15
    case "16" :
      return img17
    case "17" :
      return img16
    case "18" :
      return img20
    case "19" :
      return img19
    case "20" :
      return img18
    case "21" :
      return img12
    default:
      return img21
  }
}
