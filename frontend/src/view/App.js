import React from 'react';
import Footer from '../components/footer'
import Header from '../components/header'
import Team from '../components/team'
import ComingSoon from '../components/coming-soon'
import Partners from '../components/partners'
import Icons from '../components/icons'
// import NavBar from './components/navbar'
// import Register from './components/register'
import Mui from '../components/mui'
// import Why from './components/why'
// git config --global core.autocrlf false
class App extends React.Component {
  render() {
    return (
      <div >
        {/* <NavBar /> */}
        <Header />
        <ComingSoon />
        <Mui />
        {/* <Why /> */}
        <Icons />
        <Team />
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default App;
