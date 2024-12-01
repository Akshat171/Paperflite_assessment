import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { collections } from '../../src/data/collections'
import { formatDistance } from 'date-fns'
import { Image, Video, FileText, Calendar, Clock, Info, ChevronsUpDown, ListFilter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContentDialog } from '@/components/ContentDialog'
import { CollectionItem } from '@/types/collection'

export function CollectionView() {
  const { id } = useParams()
  const collection = collections.find(c => c.id === id)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  if (!collection) return <div>Collection not found</div>

  const handleItemClick = (item: CollectionItem) => {
    setSelectedItem(item)
    setDialogOpen(true)
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

  const sortedItems = [...collection.items].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
  })

  const toggleSort = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')
  }

    return (
      <>
    <div className="min-h-screen bg-sidebar dark:bg-zinc-800 p-3 sm:p-4 md:p-2 font-poppins">
    <div className="mx-auto max-w-[1400px] rounded-xl bg-background p-4 sm:p-5 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-2">{collection.title}</h1>
            <p className="text-slate-600">
              {collection.items.length} {collection.type[0]}
              {collection.items.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={toggleSort}
              className="flex items-center gap-2"
            >
              <span className="text-sm">Sort by</span>
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium">Created date</span>
                <span className="text-xs text-muted-foreground">
                  {sortOrder === 'asc' ? 'Oldest first' : 'Newest first'}
                </span>
              </div>
              <ChevronsUpDown className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl h-8 w-8 sm:h-10 sm:w-10"
            >
              <ListFilter />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedItems.map((item) => (
            <div key={item.id} className="group rounded-lg overflow-hidden border border-slate-200 bg-background hover:shadow-lg transition-shadow"   onClick={() => handleItemClick(item)}
>
              <div className="relative aspect-video">
                {item.type === 'photo' && (
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                )}
                {item.type === 'video' && (
                  <video src={item.url} className="w-full h-full object-cover" controls />
                )}
                {item.type === 'document' && (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-slate-400" />
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {getFileIcon(item.type)}
                  <h3 className="font-medium truncate">{item.title}</h3>
                </div>
                
                <div className="space-y-1 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.createdAt.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{formatDistance(item.createdAt, new Date(), { addSuffix: true })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    <span className="capitalize">{item.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
            </div>
            <ContentDialog
        isOpen={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedItem={selectedItem}
      />
            </>
  )
}