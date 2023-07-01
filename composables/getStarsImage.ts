import fiveStar from "assets/images/reviews/full-five-star.svg";
import notFiveStar from "assets/images/reviews/not-full-five-star.svg";

export const getStarsImage = (star: number): string => {
  return star === 5 ? fiveStar : notFiveStar
}
