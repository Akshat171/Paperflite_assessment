// import { Collection } from "../../types/collection";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Link } from "react-router-dom";

// interface CollectionCardProps {
//   collection: Collection;
//   onRename: (id: string, newTitle: string) => void;
//   onStartEdit: (id: string) => void;
//   isEditing: boolean;
//   editingTitle: string;
//   setEditingTitle: (title: string) => void;
// }


// //
// export function CollectionCard({
//   collection,
//   onStartEdit,
//   isEditing,
//   editingTitle,
//   setEditingTitle,
// }: CollectionCardProps) {
//   return (
//     <div className="space-y-2 font-poppins bg-card">
//       {/** Added to move on the particular collection based on the collection-id clicked */}
//       <Link to={`/collections/${collection.id}`}>
//         <Card className="overflow-hidden border border-card rounded-2xl transition-transform duration-300 hover:scale-[1.02]">
//           <CardContent className="p-0">
//             <div className="relative group">
//               <img
//                 src={collection.thumbnail}
//                 alt={collection.title}
//                 className="w-full aspect-[4/3] object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
//             </div>
//           </CardContent>
//         </Card>
//       </Link>

//       {/**Input if any one want to change the collection name */}
//       <div className="px-1">
//         {isEditing ? (
//           <Input
//             value={editingTitle}
//             onChange={(e) => setEditingTitle(e.target.value)}
//             autoFocus
//             className="mb-1"
//           />
//         ) : (
//           <h3
//             className="font-medium cursor-pointer hover:text-primary"
//             onClick={() => onStartEdit(collection.id)}
//           >
//             {collection.title}
//           </h3>
//         )}

//         <p className="text-sm text-muted-foreground">
//           {collection.itemCount} {collection.type[0]}
//           {collection.itemCount !== 1 ? "s" : ""}
//         </p>
//       </div>
//     </div>
//   );
// }

import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { deleteCollection } from "@/redux/Slices/collectionsSlice";
import { Collection } from "@/types/collection";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";

interface CollectionCardProps {
  collection: Collection;
  onRename: (id: string, newTitle: string) => void;
  onStartEdit: (id: string) => void;
  isEditing: boolean;
  editingTitle: string;
  setEditingTitle: (title: string) => void;
}

export function CollectionCard({
  collection,
  onStartEdit,
  isEditing,
  editingTitle,
  setEditingTitle,
}: CollectionCardProps) {
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    dispatch(deleteCollection(collection.id));
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    onStartEdit(collection.id);
  };

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
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-white/20 hover:bg-white/40"
                    onClick={handleEdit}
                  >
                    <Pencil className="h-4 w-4 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-white/20 hover:bg-red-500/40"
                    onClick={handleDelete}
                  >
                    <Trash2 className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
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
