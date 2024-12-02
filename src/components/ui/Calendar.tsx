import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"

export interface AddContentDialogProps {
  collectionType: string
  onAddContent: (content: { url: string; title: string; type: string; createdAt: Date }) => void
}

export function AddContentDialog({ collectionType, onAddContent }: AddContentDialogProps) {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | null>(new Date())
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    type: collectionType
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (date) {
      onAddContent({
        ...formData,
        createdAt: date
      })
      setOpen(false)
      setFormData({ url: '', title: '', type: collectionType })
      setDate(new Date())
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl gap-2">
          <Plus className="h-4 w-4" />
          Add Content
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New {collectionType}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
              required
            />
          </div>
          <div>
            <Label htmlFor="url">Content URL</Label>
            <Input 
              id="url"
              value={formData.url}
              onChange={(e) => setFormData(prev => ({...prev, url: e.target.value}))}
              required
            />
          </div>
          <div>
            <Label>Created Date</Label>
            <div className="relative">
              <DatePicker
                selected={date}
                onChange={(date: Date | null) => setDate(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                customInput={
                  <div className="flex items-center cursor-pointer">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>{date ? date.toLocaleDateString() : "Pick a date"}</span>
                  </div>
                }
              />
            </div>
          </div>
          <Button type="submit" className="w-full">Add Content</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}