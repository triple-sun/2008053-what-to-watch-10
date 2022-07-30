import TReview from '../types/comment';

const mockComments: TReview[] = [
  {
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    date: '2016-11-24',
    id: 0,
    rating: 9,
    user: {
      id: 2,
      name: 'Kate Muir',
    }
  },
  {
    comment: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    date: '2016-10-11',
    id: 1,
    rating: 9,
    user: {
      id: 2,
      name: 'Bill Goodykoontz',
    }
  },
  {
    comment: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    date: '2016-9-22',
    id: 2,
    rating: 9,
    user: {
      id: 3,
      name: 'John Brown',
    }
  },
  {
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    date: '2016-06-03',
    id: 3,
    rating: 5,
    user: {
      id: 4,
      name: 'Helena Brown',
    }
  }
];

export default mockComments;
