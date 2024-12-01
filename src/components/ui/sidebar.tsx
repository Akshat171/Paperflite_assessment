import { Vibrate, Search,MessageSquareShare,Compass,Send, Layers } from 'lucide-react'

const sidebarItems = [
  { icon: Search, label: 'Search' },
  { icon: Layers, label: 'Data' },
  { icon: Vibrate, label: 'Collection' },
  { icon: MessageSquareShare, label: 'Messages' },
  { icon: Compass, label: 'Profile' },
  { icon: Send, label: 'Share' },
]
import Loader from "../../../public/images/Icons.png";
import Setting from "../../../public/images/setting.png";
export function Sidebar() {
  return (
    <aside className="w-16 h-screen bg-sidebar dark:bg-zinc-800 flex flex-col items-center py-4 fixed left-0 top-0 ">
      <div className="flex-1 w-full flex flex-col items-center gap-6 mt-10 ">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#E51058]/10 dark:hover:bg-slate-700 transition-colors"
          >
            <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-200 " />
            <span className="sr-only">{item.label}</span>
          </button>
        ))}
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
        <img src={ Loader} className='w-5 h-5' />
        <span className="sr-only">Settings</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
        <img src={Setting} className="w-5 h-5 text-gray-400" />
        <span className="sr-only">Settings</span>
      </button>
    </aside>
  )
}

