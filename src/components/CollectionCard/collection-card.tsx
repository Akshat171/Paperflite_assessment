// import { useState } from "react";
import { Collection } from "../../types/collection";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

interface CollectionCardProps {
    collection: Collection
    onRename: (id: string, newTitle: string) => void
    onStartEdit: (id: string) => void
    isEditing: boolean
    editingTitle: string
    setEditingTitle: (title: string) => void
  }
  
  

export function CollectionCard({ collection, 
    onStartEdit, 
    isEditing,
    editingTitle,
    setEditingTitle  }: CollectionCardProps) {


  return (
    <div className="space-y-2 font-poppins bg-card">
      <Link to={`/collections/${collection.id}`}>
        <Card className="overflow-hidden border border-card rounded-2xl transition-transform duration-300 hover:scale-[1.02]">
          <CardContent className="p-0">
            <div className="relative group">
              <img
                src={collection.thumbnail}
                alt={collection.title}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </CardContent>
        </Card>
      </Link>
      
      <div className="px-1">
      {isEditing ? (
        <Input
          value={editingTitle}
          onChange={(e) => setEditingTitle(e.target.value)}
          autoFocus
          className="mb-1"
        />
      ) : (
        <h3
          className="font-medium cursor-pointer hover:text-primary"
          onClick={() => onStartEdit(collection.id)}
        >
          {collection.title}
        </h3>
      )}

        <p className="text-sm text-muted-foreground">
          {collection.itemCount} {collection.type[0]}
          {collection.itemCount !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
