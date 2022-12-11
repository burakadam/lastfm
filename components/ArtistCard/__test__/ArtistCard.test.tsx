import { render } from '@testing-library/react';

import ArtistCard from '../ArtistCard';

const MOCK_ARTIST = {
  name: 'The Weeknd',
  playcount: '378836644',
  listeners: '2940862',
  mbid: 'c8b03190-306c-4120-bb0b-6f2ebfc06ea9',
  url: 'https://www.last.fm/music/The+Weeknd',
  streamable: '0',
  image:
    'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
};

describe('<ArtistCard> spec', () => {
  let CARD: any;

  beforeEach(() => {
    CARD = render(
      <ArtistCard
        name={MOCK_ARTIST.name}
        playcount={MOCK_ARTIST.playcount}
        listeners={MOCK_ARTIST.listeners}
        image={MOCK_ARTIST.image}
      />
    );
  });

  it('render a artist card component', () => expect(CARD).toMatchSnapshot());

  it('render artist name', () =>
    expect(CARD.getByText(MOCK_ARTIST.name)).toBeTruthy());

  it('render artist playcount', () =>
    expect(
      CARD.getByText(`Play Count : ${MOCK_ARTIST.playcount}`)
    ).toBeTruthy());

  it('render artist listeners', () =>
    expect(
      CARD.getByText(`Listeners : ${MOCK_ARTIST.listeners}`)
    ).toBeTruthy());
});
