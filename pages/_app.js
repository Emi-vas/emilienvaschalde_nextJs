import "../styles/style.scss";
import Head from "next/head"
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if(!showChild) {
    return null
  }

  return (
      <>
          <Head >
            <link rel="icon" href="/fav.png" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          </Head>
          <Component {...pageProps} />
      </>
  ) 
}

export default MyApp
