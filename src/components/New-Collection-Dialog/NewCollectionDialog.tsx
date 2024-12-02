import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Plus, Image, Video, FileText } from "lucide-react"

interface NewCollectionDialogProps {
  onCreateCollection: (data: {
    title: string;
    thumbnail: string;
    itemCount: number;
    type: string[];
  }) => void;
}

export function NewCollectionDialog({ onCreateCollection }: NewCollectionDialogProps) {
    const [open, setOpen] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    thumbnail: '',
    itemCount: 0,
    type: ['photo'] as string[]
  })

  const collectionTypes = [
    { id: 'photo', icon: Image, label: 'Photos' },
    { id: 'video', icon: Video, label: 'Videos' },
    { id: 'document', icon: FileText, label: 'Documents' }
  ]

  const handleTypeSelect = (type: string) => {
    setFormData(prev => ({...prev, type: [type]}))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCreateCollection(formData)
    setOpen(false) 
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-xl gap-2">
          <Plus className="h-4 w-4 text-[#E51058] border rounded-full border-[#E51058]" />
          <span className="hidden sm:inline text-black dark:text-slate-50">Create new collection</span>
          <span className="sm:hidden">Create</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Collection</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {collectionTypes.map(({ id, icon: Icon, label }) => (
              <div
                key={id}
                onClick={() => handleTypeSelect(id)}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  formData.type[0] === id 
                    ? 'border-primary bg-primary/10' 
                    : 'hover:border-primary/50'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <Icon className={`h-6 w-6 ${formData.type[0] === id ? 'text-primary' : ''}`} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Label htmlFor="title">Collection Name</Label>
            <Input 
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
              required
            />
          </div>
          <div>
            <Label htmlFor="thumbnail">Thumbnail URL</Label>
            <Input 
              id="thumbnail"
              value={formData.thumbnail}
              onChange={(e) => setFormData(prev => ({...prev, thumbnail: e.target.value}))}
              required
            />
          </div>
          <div>
            <Label htmlFor="itemCount">Number of Items</Label>
            <Input 
              id="itemCount"
              type="number"
              min="1"
              value={formData.itemCount}
              onChange={(e) => setFormData(prev => ({...prev, itemCount: parseInt(e.target.value)}))}
              required
            />
          </div>
          <Button type="submit" className="w-full">Create Collection</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
