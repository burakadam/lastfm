import { render } from '@testing-library/react';

import ListCard from '../ListCard';

const MOCK_CARD = {
  artist: 'Taylor Swift',
  name: 'Love Story',
  playcount: '8215136',
  listeners: '947798',
  image:
    'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
  index: '1',
};

describe('<ListCard> spec', () => {
  let CARD: any;

  beforeEach(() => {
    CARD = render(
      <ListCard
        key={MOCK_CARD.index}
        name={MOCK_CARD.artist}
        title={MOCK_CARD.name}
        playcount={MOCK_CARD.playcount}
        image={MOCK_CARD.image}
        listeners={MOCK_CARD.listeners}
      />
    );
  });

  it('render a artist list component', () => expect(CARD).toMatchSnapshot());

  it('render artist name', () =>
    expect(CARD.getByText(MOCK_CARD.artist)).toBeTruthy());

  it('render album or track name', () =>
    expect(CARD.getByText(MOCK_CARD.name)).toBeTruthy());

  it('render album or track play', () =>
    expect(CARD.getByText(`${MOCK_CARD.playcount} play`)).toBeTruthy());

  it('render track listeners', () =>
    expect(CARD.getByText(`${MOCK_CARD.listeners} listeners`)).toBeTruthy());
});
