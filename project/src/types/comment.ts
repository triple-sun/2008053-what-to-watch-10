type TReview = {
  comment: string
  date: string
  id: number
  rating: number
  user: {
    id: number
    name: string
  }
}

export default TReview;
