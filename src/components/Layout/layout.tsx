import { Sidebar } from "../ui/sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen bg-background font-poppins">
        <Sidebar />
        <main className="flex-1 ml-14">
          {children}
        </main>
      </div>
    )
  }
  
  