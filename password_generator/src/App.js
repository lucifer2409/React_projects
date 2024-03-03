import { useState, useCallback, useEffect , useRef} from 'react';
function App() {
  const [Passwordlength, setPasswordLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charactersallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");
  const [bgcolor , setBgcolor] = useState('bg-blue-700');


  // Useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += '0123456789'
    }
    
    if (charactersallowed) {
      str += '!@#$%^&*()_+-={}[]:;"<>,.?/|';
    }
    for (let i = 1; i <= Passwordlength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [Passwordlength, numberallowed, charactersallowed, setPassword])
  useEffect(() => { passwordGenerator() }, [Passwordlength, numberallowed, charactersallowed, passwordGenerator])
  const copypasswordtoclipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    setBgcolor('bg-orange-700');
    window.navigator.clipboard.writeText(password);
    setTimeout(() => {
      setBgcolor('bg-blue-700');
    }, 100);
  } , [password])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700" >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} placeholder='password' readOnly className='outline-none w-full py-1 px-3' ref={passwordRef}/>
          <button className={`outline-none ${bgcolor} text-white px-3 py-0.5 shrink-0`} onClick={copypasswordtoclipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" name="" id="" min={6} max={100} value={Passwordlength} className='cursor-pointer'
              onChange={(e) => { setPasswordLength(e.target.value) }} />
            <label style={{ color: 'orange' }}>Length : {Passwordlength}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput" defaultChecked={numberallowed}
              onChange={() => {
                setNumberallowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Numbers</label>
          </div>
          <input type="checkbox" defaultChecked={charactersallowed}
            onChange={() => {
              setCharallowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;

