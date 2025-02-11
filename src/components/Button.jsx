const Button = ({type,children , onClick : event , className : extraClass,...rest}) => {
    const buttonStyles = {
        white:"py-4 px-6 border-[#D5EA001A] rounded-xl text-[#0A0C11] bg-white",
        outline:"border-[#24A0B5] text-[#24A0B5] py-3 px-6 rounded-lg bg-transparent",
        primary:"bg-[#24A0B5] py-3 px-6 rounded-lg text-white"
    }
  return <button onClick={event} {...rest } className={`flex items-center gap-2 border ${buttonStyles[type??"primary"]} ${extraClass}`}>{children}</button>
}

export default Button
