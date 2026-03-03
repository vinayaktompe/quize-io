import { Copyright, MessageCircleQuestionMark } from "lucide-react"

const Footer = () => {
  return (
    <div className="h-[50%] w-full bg-gray-900 text-gray-300 py-5 px-2 lg:p-20 flex justify-between items-center text-sm lg:text-lg">
      
        <h2 className="text-xl lg:text-3xl flex gap-2 items-center font-bold text-emerald-500 cursor-pointer"><MessageCircleQuestionMark className="hidden lg:block" strokeWidth={3} size={35} color="red" />Quiz.io</h2>
        <div className="flex items-center gap-2">
            <Copyright size={15} />
            2026 Triple Syntax
        </div>
        <div className="">All rights reserved.</div>
    </div>
  )
}

export default Footer