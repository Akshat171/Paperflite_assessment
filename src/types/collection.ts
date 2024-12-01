export type ContentType = 'photo' | 'video' | 'document'

export interface CollectionItem {
    id: string
    type: string
    url?: string
    title: string
    createdAt: Date
  }
  
  export interface Collection {
    id: string
    title: string
    thumbnail: string
    type: ContentType[]
      items: CollectionItem[]
      itemCount: number
  }


  interface ContentItem {
    id: string
    type: string
    url?: string
    title: string
    createdAt: Date
  }
  
  export interface ContentDialogProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    selectedItem: ContentItem | null
  }  