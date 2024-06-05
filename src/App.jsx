import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./App.css";


function App() {
  const [tasks, settasks] = useState([]);
  const [inpvalue, setinpvalue] = useState('');

  const additem = () => {
    if (inpvalue.length === 0) {
      return alert('please enter value')
    }
    settasks([...tasks, { p: inpvalue }])
    setinpvalue('')
  }

  const deleteitem = (index) => {
    settasks((tasks) => tasks.filter((item, i) => i !== index));
  }

  return (
    <div className="bg-gradient-to-l from-[#410B5F] to-[#061F61] h-screen w-full flex justify-center items-center">
      <div className="max-w-72 ml:max-w-80 md:min-w-[550px] h-auto bg-slate-50 rounded-2xl p-7">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-heading">To-Do List</h2>
          <img
            src="data:image/png;base64,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"
            className="w-9"
          />
        </div>
        <div className="flex justify-center my-3">
          <div className="w-full bg-[#EDEEF0] py-1 px-2 text-lg rounded-full flex">
            <input type="text" className="w-9/12 h-full bg-transparent outline-none px-2"
              value={inpvalue}
              onChange={(e) => (setinpvalue(e.target.value))} />
            <button className="bg-orange w-3/12 h-full py-1 md:py-2 px-3 rounded-full text-center text-white font-semibold" onClick={() => additem()}>add</button>
          </div>
        </div>
        <div className="py-1 max-h-60 xl:max-h-80 overflow-y-scroll">
          {
            tasks.map((item, index) => (
              <div className="border-b-2 py-1 px-1 my-4 max-w-full break-words" key={index}>
                {`${item.p}`}
                <FaRegTrashAlt className="mt-3 cursor-pointer" onClick={() => deleteitem(index)} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;


{/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvElEQVR4nGNgGCmggYGB4T8a7iDHoKNYDPpPIj6Mz4LDVLDgEMOwBzMoCJ4ZxFhQTYEFVcRYEItFoxUDA4MNHj4Mg/QSBPZYNMIALj4M2zEQARQpsECBGAtYGRgY/pBhwR+oXqLAEzIseMxAQZFBjAVHGEgAy8mwYBkpFnSSYUEHKRbkkGFBNikW+KJptsFigS2aGpAeooEBGcWEPikWcDMwMHwnwfBvUD0kgXgGBoZXRBgOUhNHquFDBwAAvdXKeCV5nnIAAAAASUVORK5CYII="
    className="cursor-pointer w-7 px-1 mx-2" /> */}