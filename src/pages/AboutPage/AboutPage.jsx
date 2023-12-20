import { useEffect } from 'react'

const About = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
      <h1 className="flex justify-center">About</h1>
      <p className="flex justify-center">Este es el componente AboutPage</p>
    </div>
  )
}

export default About
