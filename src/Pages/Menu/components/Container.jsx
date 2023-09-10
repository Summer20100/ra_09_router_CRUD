import MyMenu from './MyMenu'

function Container({children}) {
  return (
    <div className='mainContainer'>
      <MyMenu />
      <div className="page">
        { children }
      </div>
    </div>
  )
}

export default Container