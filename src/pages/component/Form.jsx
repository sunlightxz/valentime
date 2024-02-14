import React ,{useState} from 'react'

const Form = ({ onSubmit }) => {

  const [sendTo, setSendto] = useState("");
  const [sender, setSender] = useState("");
  const [keyword, setKeyword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInput1Change = (event) => {
    setSendto(event.target.value);
  };

  const handleInput2Change = (event) => {
    setSender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ sendTo, sender, keyword ,submitted});
    setSubmitted(true);

  };

  return (
    <div className="">
      {!submitted ? (
    <form className="mx-auto pt-14" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="mr-2 relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_password"
            id="floating_password"
            value={sendTo}
            onChange={handleInput1Change}
            className="block px-0 w-full text-sm text-gray-900  border-0 border-b-2 pt-5 pb-2 pl-3 pr-20 peer"
          />
          <label
            htmlFor="floating_password"
            className="z-10 pl-2 peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform  scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            To
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="from"
            id="from"
            value={sender}
            onChange={handleInput2Change}
            className="block px-0 w-full text-sm text-gray-900  border-0 border-b-2 pt-5 pb-2 pl-3 pr-20 peer"
          />
          <label
            htmlFor="from"
            className={`z-10 pl-2 ${
              sender
                ? "peer-focus:font-medium transform scale-75 top-1 peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:scale-75 peer-focus:-translate-y-5"
                : "top-3"
            } absolute text-lg text-gray-400 duration-300 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            From
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          value={keyword}
          onChange={(e)=>setKeyword(e.target.value)}
          type="text"
          name="keyword"
          id="keyword"
          className="block px-0 w-full text-sm text-gray-900  border-0 border-b-2 pt-5 pb-2 pl-3 pr-20 peer"
        />
        <label
          htmlFor="keyword"
          className="z-10 pl-2 peer-focus:font-medium absolute text-xl text-gray-400 duration-300 transform  scale-75 top-3 peer-focus:text-base  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
        >
          ADD A KEYWORD (ie: Kittens)
        </label>
      </div>

      <div className="mt-4 mx-auto flex items-center w-full justify-center">
        <button type="submit"
          className={`py-3 px-9 rounded-3xl  text-black text-xl transition-all ease-in-out ${
            sendTo && sender
              ? "bg-[#ef7d98] hover:bg-[#AE4661] hover:text-gray-200"
              : "bg-[#434b54]"
          }`}
          disabled={!sendTo || !sender}
        >
          Generate Your Message 
        </button>
      </div>
    </form>
     ) : null}
  </div>
  )
}

export default Form