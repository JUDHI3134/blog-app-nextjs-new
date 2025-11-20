import { Bell } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"

const Notifications = () => {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger className="relative">
              <div className="absolute bg-rose-500 h-5 w-5 rounded-full text-sm flex items-center justify-center bottom-2 left-2">
                  <span className="text-white">5</span>
              </div>
              <Bell size={20}/>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[100%] max-w-[400px]">
              <div className="flex justify-between p-2 gap-4 mb-2">
                  <h3 className="font-bold text-lg">Notifications</h3>
                  <button>Mark all as read</button>
              </div>
          </DropdownMenuContent>
      
    </DropdownMenu>
  )
}

export default Notifications
