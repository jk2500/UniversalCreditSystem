import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { agent } from '../veramo/setup';
function Home() {
  const [didDoc, setDidDoc] = useState<any>()
  const resolve = async () => {
    const doc = await agent.resolveDid({
      didUrl: 'did:ethr:goerli:0x847c34B56c0203A193d3CD3B96b8915C044fFfC7',
    })

    setDidDoc(doc)
  }

  useEffect(() => {
    resolve()
  }, [])
  return (
    <div>
      <nav>
        <Link to="/issuer">Issuer  </Link>
        <Link to="/verifier">Verifier  </Link>
        <Link to="/reciever">Receiver</Link>
      </nav>
      <header className="App-header">
        <pre id="result">{didDoc && JSON.stringify(didDoc, null, 2)}</pre>
      </header>
    </div>
  )
}

export default Home
