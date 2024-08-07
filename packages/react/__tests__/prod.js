/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import renderer from 'react-test-renderer'

gate({ development: false }, ({ test }) => {
  test('css works', () => {
    // css has a different return in prod so this is just making sure that isn't broken

    expect(css({ color: 'hotpink' })).toMatchInlineSnapshot(`
{
  "name": "1lrxbo5",
  "next": undefined,
  "styles": "color:hotpink;",
}
`)
  })

  test('props work', () => {
    let tree = renderer.create(<div css={{ color: 'hotpink' }} hidden />)
    expect(tree.toJSON().props.hidden).toBe(true)
  })
})
