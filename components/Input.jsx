const  Input = ({label, type, name, placeholder})=>{

   const  isLsableRequired = label && (
        <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="grid-password"
            >{label}
        </label>
    )
    return(
        <div className="w-full mb-2">
        {isLsableRequired}
        <input
        type={type}
        name={name}
        // onChange={handleInputChange}
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder={placeholder}
        />
        </div>
        )
    }


    export default Input
