import { useState } from "react";
import { useParams } from "react-router-dom";
// import { collections } from "../../src/data/collections";
import { formatDistance } from "date-fns";
import {
  Image,
  Video,
  FileText,
  Calendar,
  Clock,
  Info,
  ChevronsUpDown,
  ListFilter,
  ArrowLeft,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentDialog } from "@/components/ContentDialog";
import { Collection, CollectionItem } from "@/types/collection";
import ImageFormat from "./Collection-Formats/ImageFormat";
import VideoFormat from "./Collection-Formats/VideoFormat";
import FileFormat from "./Collection-Formats/FileFormat";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/Store/store";
import { updateCollection } from "@/redux/Slices/collectionsSlice";
import { AddContentDialog } from "@/components/AddContentDialog/AddContentDialog";
import { useNavigate } from "react-router-dom";

//Collection View file shows the collection items in a grid layout. It shows all the content available in the particular collection.
//It also has a filter button to sort the collection items in ascending or descending order.
//It also has a dialog box
// It fetches the collection id from the params.

export function CollectionView() {
  const collections = useSelector((state: RootState) => state.collections) as {
    id: string;
    title: string;
    type: string[];
    items: CollectionItem[];
  }[];
  const { id } = useParams();
  const collection = collections.find((c) => c.id === id);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc"); //Sort order state
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null); //Selected item state
  const [dialogOpen, setDialogOpen] = useState(false); //Dialog open state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!collection) return <div>Collection not found</div>;

  // Function to handle item click
  const handleItemClick = (item: CollectionItem) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleAddContent = (newContent: {
    url: string;
    title: string;
    createdAt: Date;
    type: string;
  }) => {
    if (collection) {
      const updatedCollection = {
        ...collection,
        items: [
          ...collection.items,
          {
            id: `${collection.id}-${collection.items.length + 1}`,
            ...newContent,
          },
        ],
        itemCount: collection.items.length + 1,
      };
      dispatch(updateCollection(updatedCollection as Collection));
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "photo":
        return <Image className="w-5 h-5" />;
      case "video":
        return <Video className="w-5 h-5" />;
      case "document":
        return <FileText className="w-5 h-5" />;
      default:
        return null;
    }
  };

  // Sort the items based on the sort order
  const sortedItems = [...collection.items].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  // Function to toggle sort order
  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };


  const handleDeleteContent = (itemId: string) => {
    if (collection) {
      const updatedItems = collection.items.filter(item => item.id !== itemId);
      const updatedCollection = {
        ...collection,
        items: updatedItems,
        itemCount: updatedItems.length
      };
      dispatch(updateCollection(updatedCollection as Collection));
    }
  };

  return (
    <>
      <div className="min-h-screen bg-sidebar dark:bg-zinc-800 p-3 sm:p-4 md:p-2 font-poppins">
        <div className="mx-auto max-w-[1400px] rounded-xl bg-background p-4 sm:p-5 md:p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate(-1)}
                className="rounded-full hover:bg-slate-100"
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
              <div>
                <h1 className="text-2xl font-semibold">
                  {collection.title}
                </h1>
                <p className="text-slate-600">
                  {collection.items.length} {collection.type[0]}
                  {collection.items.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            {/** Filter button */}
            <div className="flex items-center gap-3">
              <AddContentDialog
                collectionType={collection.type[0]}
                onAddContent={handleAddContent}
              />
              <Button
                variant="ghost"
                onClick={toggleSort}
                className="flex items-center gap-2"
              >
                <span className="text-sm">Sort by</span>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium">Created date</span>
                  <span className="text-xs text-muted-foreground">
                    {sortOrder === "asc" ? "Oldest first" : "Newest first"}
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
              <div
                key={item.id}
                className="group rounded-lg overflow-hidden border border-slate-200 bg-background hover:shadow-lg transition-shadow"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative aspect-video">
                  {item.type === "photo" && (
                    <ImageFormat src={item.url || ""} title={item.title} />
                  )}
                  {item.type === "video" && (
                    <VideoFormat src={item.url || ""} />
                  )}
                  {item.type === "document" && <FileFormat />}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteContent(item.id);
                    }}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-red-500/60"
                  >
                    <Trash2 className="h-4 w-4 text-white" />
                  </Button>
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
                      <span>
                        {formatDistance(item.createdAt, new Date(), {
                          addSuffix: true,
                        })}
                      </span>
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
      {/* Dialog Box Imported Here passed props to handle open, handleClose, selectedItem */}
      <ContentDialog
        isOpen={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedItem={selectedItem}
      />
    </>
  );
}
