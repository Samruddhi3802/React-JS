import { useState, useEffect, useCallback, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|\:;\"'<>,.?/~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setLength]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="ml-auto mr-auto mt-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-10 text-white text-center">Password Generator</h1>
      <div className="flex w-1/2 h-12 items-center justify-center">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          placeholder="Password"
          className="w-3/4 h-12 bg-white focus:outline-none text-center text-xl text-[#003049]"
        />
        <button className="w-1/6 h-12 bg-[#669bbc] text-white text-center text-2xl" onClick={copyToClipboard}>Copy</button>
      </div>
      <div className="flex w-1/2 h-12 mt-5 items-center justify-center">
        <div className='flex items-center px-4'>
          <input
            type='range'
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-white text-lg px-4">Length {length}</label>
        </div>
        <div className='flex items-center px-4'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            className='cursor-pointer mr-2'
            onChange={(e) => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label className="text-white text-lg">Numbers</label>
        </div>
        <div className='flex items-center px-4'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            className='cursor-pointer mr-2'
            onChange={(e) => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label className="text-white text-lg">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
