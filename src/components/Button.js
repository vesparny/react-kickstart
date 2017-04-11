import glamorous from 'glamorous'

const Button = glamorous.button(
  {
    border: 'none',
    color: 'white',
    padding: '1em',
    borderRadius: 3,
    cursor: 'pointer'
  },
  (p, t) => ({ backgroundColor: t.colors.blue })
)

export default Button
