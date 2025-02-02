import { Check, X } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"



function Root({ onSubmit, children, className, ...props }: ComponentProps<"form">) {
    return <form className={twMerge("grid grid-cols-2 ", className)} onSubmit={onSubmit} {...props}>
        {children}
    </form>
}


function Control({ children, className, ...props }: ComponentProps<"div">) {
    return (<div className={twMerge("col-span-2 space-y-2 mb-5", className)} {...props}>
        {children}
    </div>)
}

function Label({ children, className, ...props }: ComponentProps<"label">) {
    return <label className={twMerge("text-white text-sm font-normal flex items-center gap-1", className)} {...props}>
        {children}
    </label>
}

function Input({ className, ...props }: ComponentProps<"input">) {
    return (<>
        <input className={twMerge("w-full px-3 py-[12.5px] text-white/80 placeholder-white/40 bg-primary border-primary-foreground border-[3px] rounded-md placeholder-white text-xl focus:outline-none", className)} {...props} /></>)
}


interface FieldStateProps {
    isValid: boolean
}
function FieldState({ isValid }: FieldStateProps) {
    return (<>
        {isValid ? <Check className="w-4 h-4 text-green-400" /> : <X className="w-4 h-4 text-red-400" />}
    </>)
}

const Form = {
    Root,
    Control,
    Label,
    Input,
    FieldState
}

export default Form