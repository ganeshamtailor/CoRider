import { FC } from 'react'
import { Users2 , MoreVertical, Phone , MailWarning } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

interface MenuProps {
  
}

const Menu: FC<MenuProps> = ({}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
        <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white ' align='end'>
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <Users2 className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        <DropdownMenuItem>
            <Phone className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        <DropdownMenuItem>
            <MailWarning className="mr-2 h-4 w-4" />
            <span>Report</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Menu