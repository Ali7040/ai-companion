"use client"

import { cn } from "@/lib/utils"
import { Home, Plus, Settings } from "lucide-react"


export const Sidebar = ()=>{
    const Routes = [
        {
            icon: Home,
            herf: '/',
            label: 'Home',
            pro: false,
        },
        {
            icon: Plus,
            herf: '/companion/new',
            label: 'Create',
            pro: true,
        },
        {
            icon: Settings,
            herf: '/settings',
            label: 'Settings',
            pro: false,
        },
    ]


    return(
        <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
            <div className="p-3 flex-1 justify-center">
                <div className=" space-y-2">
                    {Routes.map((route)=>(
                        <div className={cn ("")} key={route.herf}></div>
                    ))}
                </div>
            </div>

        </div>
    )
}