import Hero from "./Hero"
import Profile from "./Profile"
import Footer from "./Footer"
import NavBar from "./Navbar"
import Staff from "./Staff"

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Staff/>
      {/* <Profile /> */}
      <Footer />
    </>
  )
}

export default LandingPage