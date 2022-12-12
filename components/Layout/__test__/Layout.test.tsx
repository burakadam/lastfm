import { render } from '@testing-library/react';

import Layout from '../Layout';

describe('<Layout> spec', () => {
  let COMP: any;

  beforeEach(() => {
    COMP = render(
      <Layout>
        <p>This is a children</p>
      </Layout>
    );
  });
  it('render layout component', () => expect(COMP).toMatchSnapshot());
});
