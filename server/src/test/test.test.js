import nock from 'nock'

it('Should be', () => {
  const result= nock('http://localhost:3011')
      .get('/api/faq')
      .reply(200)
});

