import './App.css'

import { Welcome } from './welcome';
import { Button } from './button';
import { Hello, HelloWithoutJSX } from './hello';
import { Card } from './Card';
import { UserProfile } from './UserProfile';
import { cardrapper } from './cardrapper';
import { userinfo } from './userinfo';
import { ProductList } from '../productList';

function App() {
  return (
    <div>
      <h1>Codevolution React Course</h1>

      <cardrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batman@jl.com</p>
        <p>Edit Profile</p>
      </cardrapper>

      <ProductList />
      <Welcome />
      <HelloWithoutJSX />
      <Hello />
      <Button />
      <Card />
      <UserProfile />
    </div>
  )
}

export default App;

