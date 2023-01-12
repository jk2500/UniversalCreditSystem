import React, { ChangeEvent, FormEvent, useState } from 'react'
import { agent } from '../veramo/setup'

function Issuer() {
  const [name,setName] = useState('')
  const [roll,setRoll] = useState('')
  const [did,setDid] = useState('')

  const createCredential = async() => {
    console.log('hello')
    
  const credential = await agent.createVerifiableCredential({
    credential: {
      issuer: 'did:ethr:goerli:0x020c0005d3181855f75bcc959e9d82c9e6b6d4b1c472fb309d5635d965376f5587',
      credentialSubject: {
        id: did,
        RollNo: roll,
      },
    },
    proofFormat: 'jwt',

  });

  console.log(credential);

}

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() ;
    const details = {name, roll, did};
    console.log(details);
    createCredential();
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
        <h2 className='title-issuer'>ISSUE NEW VC</h2>
        <label className='student-details-issuer'>Student Details</label>
        
        <form className='form_issuer' onSubmit={handleSubmit}>
          <label className='Name_field_issuer_text'>Name</label>
          <input className='textbox_name_issuer'type = "text" required
            value = {name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
          <label className='Roll_field_issuer_text'>Roll No</label>
          <input className='textbox_roll_issuer'type = "text" required
            value = {roll}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setRoll(e.target.value)}/>
          <label className='did_issuer_text'>DID</label>
          <input className='textbox_did_issuer'type = "text" required
            value = {did}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setDid(e.target.value)}/>
          <button className='button-issue'>Create</button>
        </form>

    </div>
  )
}

export default Issuer