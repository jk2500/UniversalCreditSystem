import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {agent} from '../veramo/setup';

function Verifier() {

  // const [credentialString, setCredentialString] = useState('');
  const [result, setResult] = useState('');
  const [count, setCount] = useState(0);

    // async function verify() {

    //   const string = '{"credential":{"credentialSubject":{"RollNo":"AA00A0000","id":"did:ethr:goerli:0x03bbe111dc9d0cb60ad85bad8ab1d461c727f7aae11a8dff370e40682868af230d"},"issuer":{"id":"did:ethr:goerli:0x03ba0a0eeb5f854f9a3318e067c21d76e3cb0ed406aaef3027a7bd71e9b7e40a3d"},"type":["VerifiableCredential"],"@context":["https://www.w3.org/2018/credentials/v1"],"issuanceDate":"2023-01-10T15:47:22.000Z","proof":{"type":"JwtProof2020","jwt":"eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7IlJvbGxObyI6IkFBMDBBMDAwMCJ9fSwic3ViIjoiZGlkOmV0aHI6Z29lcmxpOjB4MDNiYmUxMTFkYzlkMGNiNjBhZDg1YmFkOGFiMWQ0NjFjNzI3ZjdhYWUxMWE4ZGZmMzcwZTQwNjgyODY4YWYyMzBkIiwibmJmIjoxNjczMzY1NjQyLCJpc3MiOiJkaWQ6ZXRocjpnb2VybGk6MHgwM2JhMGEwZWViNWY4NTRmOWEzMzE4ZTA2N2MyMWQ3NmUzY2IwZWQ0MDZhYWVmMzAyN2E3YmQ3MWU5YjdlNDBhM2QifQ.niAibSrU5ESYum4yepKYQKrCKGw2yLBAyH-i1mWsvXrDrattVuWFMGoIAMxwyGeLxUdtO70o5Z4yaMWHVsR6Nw"}}}'
 
    //   const credential = JSON.parse(string);
    
    //    const verification = await agent.verifyCredential(credential)
      
    //   console.log(`Credential verified`,verification)


      
    // }


    useEffect(()=> {
      const verify = async () => {
        try {
          const string = '{"credential":{"credentialSubject":{"RollNo":"AA00A0000","id":"did:ethr:goerli:0x03bbe111dc9d0cb60ad85bad8ab1d461c727f7aae11a8dff370e40682868af230d"},"issuer":{"id":"did:ethr:goerli:0x03ba0a0eeb5f854f9a3318e067c21d76e3cb0ed406aaef3027a7bd71e9b7e40a3d"},"type":["VerifiableCredential"],"@context":["https://www.w3.org/2018/credentials/v1"],"issuanceDate":"2023-01-10T15:47:22.000Z","proof":{"type":"JwtProof2020","jwt":"eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7IlJvbGxObyI6IkFBMDBBMDAwMCJ9fSwic3ViIjoiZGlkOmV0aHI6Z29lcmxpOjB4MDNiYmUxMTFkYzlkMGNiNjBhZDg1YmFkOGFiMWQ0NjFjNzI3ZjdhYWUxMWE4ZGZmMzcwZTQwNjgyODY4YWYyMzBkIiwibmJmIjoxNjczMzY1NjQyLCJpc3MiOiJkaWQ6ZXRocjpnb2VybGk6MHgwM2JhMGEwZWViNWY4NTRmOWEzMzE4ZTA2N2MyMWQ3NmUzY2IwZWQ0MDZhYWVmMzAyN2E3YmQ3MWU5YjdlNDBhM2QifQ.niAibSrU5ESYum4yepKYQKrCKGw2yLBAyH-i1mWsvXrDrattVuWFMGoIAMxwyGeLxUdtO70o5Z4yaMWHVsR6Nw"}}}'
          const credential = JSON.parse(string);
          const verification = await agent.verifyCredential(credential);
          console.log(verification);


        } catch(e) {
          console.log(e);
        }
      }
      verify();
    }, [count, setCount])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const string = '{"credential":{"credentialSubject":{"RollNo":"AA00A0000","id":"did:ethr:goerli:0x03bbe111dc9d0cb60ad85bad8ab1d461c727f7aae11a8dff370e40682868af230d"},"issuer":{"id":"did:ethr:goerli:0x03ba0a0eeb5f854f9a3318e067c21d76e3cb0ed406aaef3027a7bd71e9b7e40a3d"},"type":["VerifiableCredential"],"@context":["https://www.w3.org/2018/credentials/v1"],"issuanceDate":"2023-01-10T15:47:22.000Z","proof":{"type":"JwtProof2020","jwt":"eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7IlJvbGxObyI6IkFBMDBBMDAwMCJ9fSwic3ViIjoiZGlkOmV0aHI6Z29lcmxpOjB4MDNiYmUxMTFkYzlkMGNiNjBhZDg1YmFkOGFiMWQ0NjFjNzI3ZjdhYWUxMWE4ZGZmMzcwZTQwNjgyODY4YWYyMzBkIiwibmJmIjoxNjczMzY1NjQyLCJpc3MiOiJkaWQ6ZXRocjpnb2VybGk6MHgwM2JhMGEwZWViNWY4NTRmOWEzMzE4ZTA2N2MyMWQ3NmUzY2IwZWQ0MDZhYWVmMzAyN2E3YmQ3MWU5YjdlNDBhM2QifQ.niAibSrU5ESYum4yepKYQKrCKGw2yLBAyH-i1mWsvXrDrattVuWFMGoIAMxwyGeLxUdtO70o5Z4yaMWHVsR6Nw"}}}'
 
    const credential = JSON.parse(string);

    setCount(1)

  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
// setCredentialString(e.target.value);

  }

  return (
    
    
      
        <div>
      <header className='header'>
          <h2 className='container'></h2>
          <h2 className = "header_title">
          </h2>
          <nav className="header-menu">
            <a className = "selected" href="">ISSUE</a>
            <a className = "header-menu-item"href="">ITEM2</a>
          </nav>
        </header>

      <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                  VC Verifier
                </label>
            </h2>
            <input onChange={handleChange} type="text" 
            
            />
            <button type="submit" className="btn btn__primary btn__lg">
              verify
            </button>
      </form>

      <p>{result}</p>
      </div>


  
  )
}

export default Verifier
