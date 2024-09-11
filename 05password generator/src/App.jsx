import { useCallback, useEffect, useState } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [useNum, setNum] = useState(false);
  const [useChar, setChar] = useState(false);
  const [Password, setPassword] = useState("");
  const [copied,setCopied]=useState(false)

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (useNum) str += "0123456789";
    if (useChar) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //random index
      pass += str.charAt(char);
    }

    setPassword(pass);
    setCopied(false)
  }, [length, useNum, useChar, setPassword]);

const copyPassword = useCallback(()=>{
window.navigator.clipboard.writeText(Password)
setCopied(true)
},[Password])

  useEffect(()=>{passwordGen()},[length,useNum,useChar,passwordGen])

 
 
    
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={Password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3 rounded-md"
            readOnly
          />

          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-0.05 shrink-0"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useNum}
              id="numberInput"
              onChange={(e) => {
                setNum((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={useChar}
              id="charInput"
              onChange={(e) => {
                setChar((prev) => !prev);
              }}
            />

            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
