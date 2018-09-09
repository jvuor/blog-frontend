const data = [
  {
    id: '5b58dce799f2274cc85b0933',
    title: 'Markdown Test',
    content: '### Subheader\n\nHi, this text has *markdown*! **Hell yeah**\n\n[link]\n\n* List Item\n* Another Item\n\n## Another Subheader\n\n__Still marking down like a boss yeaaaaaahhhh__',
    created: '2018-07-25T20:26:15.201Z',
    sticky: false,
    user: {
      _id: '5b50cb8ca769d33c18087f81',
      username: 'testuser',
      name: 'Test User'
    }
  },
  {
    id: '5b5895867296874dacbc9d6d',
    title: 'Test Post From Admin Panel',
    content: 'content here',
    created: '2018-07-25T15:21:42.149Z',
    sticky: false,
    user: {
      _id: '5b50cb8ca769d33c18087f81',
      username: 'testuser',
      name: 'Test User'
    }
  },
  {
    id: '5b55dd6774d88b36481f5607',
    title: 'Second Test Post',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    created: '2018-07-23T13:51:35.639Z',
    sticky: true,
    user: {
      _id: '5b50cb8ca769d33c18087f81',
      username: 'testuser',
      name: 'Test User'
    }
  },
  {
    id: '5b55dcdb74d88b36481f5606',
    title: 'Test post',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    created: '2018-07-23T13:49:15.875Z',
    sticky: false,
    user: {
      _id: '5b50cb8ca769d33c18087f81',
      username: 'testuser',
      name: 'Test User'
    }
  }
]

describe('Test blog data', () =>{
  test('appears valid', () => {
    expect(data.length).toBe(4)
  })
})

export default data