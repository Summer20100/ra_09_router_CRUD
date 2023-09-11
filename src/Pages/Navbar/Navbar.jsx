import s from './Navbar.module.css'
import { MyLinkButton, NameLesson } from './../../mystyle.jsx'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      {/* <NameLesson /> */}
      {/* <MyLinkButton link='/posts/'>MENU</MyLinkButton>*/}
      <MyLinkButton link='/posts/'>CRUD</MyLinkButton>
      {/* <MyLinkButton link='/posts/'>AUTHENTICATION</MyLinkButton>*/}
    </div>
  )
}

export default Navbar 
