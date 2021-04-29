import HiddenMessage from './HiddenMessage'

/**
 * This is init component
 */
const Home = props => {
  return (
    <div>
      <h1>Hola Pro!</h1>
      <HiddenMessage>{'Hello Message'}</HiddenMessage>
    </div>
  )
}

export default Home
