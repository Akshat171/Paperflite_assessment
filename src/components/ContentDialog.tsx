import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
// import { formatDistance } from 'date-fns'
import { Calendar, Download, FileText, Image, Info, Share2, Video } from "lucide-react"
import { CollectionItem } from "@/types/collection"

interface ContentDialogProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    selectedItem: CollectionItem | null
  }
const getFileIcon = (type: string) => {
  switch (type) {
    case 'photo':
      return <Image className="w-5 h-5" />
    case 'video':
      return <Video className="w-5 h-5" />
    case 'document':
      return <FileText className="w-5 h-5" />
    default:
      return null
  }
}

export function ContentDialog({ isOpen, onOpenChange, selectedItem }: ContentDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {selectedItem?.type && getFileIcon(selectedItem.type)}
            {selectedItem?.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {selectedItem?.type === 'photo' && (
            <img 
              src={selectedItem.url} 
              alt={selectedItem.title} 
              className="w-full rounded-lg object-contain max-h-[500px]"
            />
          )}
          {selectedItem?.type === 'video' && (
            <video 
              src={selectedItem.url} 
              controls 
              className="w-full rounded-lg"
            />
          )}
          {selectedItem?.type === 'document' && (
            <div className="w-full h-96 bg-slate-100 rounded-lg flex items-center justify-center">
              <FileText className="w-20 h-20 text-slate-400" />
            </div>
          )}

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Details</h3>
                <div className="space-y-1">
                  <p className="text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                                      Created
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Type: {selectedItem?.type}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Actions</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
