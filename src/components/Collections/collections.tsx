import { useState } from "react";
import { Collection, ContentType } from "../../types/collection";
import { collections as initialCollections } from "../../data/collections";
import { CollectionCard } from "../CollectionCard/collection-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"


import {
  Search,
  Plus,
  Copy,
  Trash2,
  ListFilter,
  ChevronsUpDown,
  Check,
  CirclePlus,
} from "lucide-react";
import Loader from "../../../public/images/Icons.png";
import Text from "../../../public/images/text.png";
import { ThemeToggle } from "../ThemeToggle";

const filterTypes: { label: string; value: ContentType | "all" }[] = [
  { label: "All Files", value: "all" },
  { label: "Photos", value: "photo" },
  { label: "Videos", value: "video" },
  { label: "Documents", value: "document" },
];

export function Collections() {
  const [collections, setCollections] =
    useState<Collection[]>(initialCollections);
  const [activeFilter, setActiveFilter] = useState<ContentType | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingCollectionId, setEditingCollectionId] = useState<string | null>(
    null
  );
  const { toast } = useToast()
  const filteredCollections = collections.filter((collection) => {
    const matchesFilter =
      activeFilter === "all" ||
      collection.type.includes(activeFilter as ContentType);
    const matchesSearch = collection.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStartEdit = (id: string) => {
    setIsEditing(true);
    setEditingCollectionId(id);
    const collection = collections.find((c) => c.id === id);
    setEditingTitle(collection?.title || "");
  };

  const handleSave = () => {
    if (editingCollectionId) {
      handleRename(editingCollectionId, editingTitle);
    }
    setIsEditing(false);
      setEditingCollectionId(null);
      
      toast({
        title: "Changes saved successfully",
        description: "Your collection has been updated",
        className: "bg-green-50 border-green-200",
      })
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingCollectionId(null);

    toast({
        title: "Changes discarded",
        description: "Your changes have been cancelled",
        className: "bg-slate-50 border-slate-200",
      })
  };

  const handleRename = (id: string, newTitle: string) => {
    setCollections((prev) =>
      prev.map((collection) =>
        collection.id === id ? { ...collection, title: newTitle } : collection
      )
    );
  };

  return (
    <div className="min-h-screen bg-sidebar dark:bg-zinc-800 p-3 sm:p-4 md:p-2 font-poppins">
      <div className="mx-auto max-w-[1400px] rounded-xl bg-background p-4 sm:p-5 md:p-6">
        <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Collections</h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                personalized content storyboards
              </p>
            </div>

            {isEditing ? (
              <div className="flex items-center gap-4 md:my-7">
                <p className="text-xs text-muted-foreground flex-1 text-right">
                  All changes made to this section will reflect for <br />
                  all users in the content hub.
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleSave}
                    className="rounded-full bg-[#E51058] hover:bg-[#E51058]/90 text-white"
                  >
                    <Check /> Save
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCancel}
                    className="rounded-full"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 sm:gap-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Type here to search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 w-full sm:w-[300px] rounded-xl text-sm"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl h-8 w-8 sm:h-10 sm:w-10"
                  >
                   
                      <img
                        src={Loader}
                        className="h-[14px] w-[14px]"
                        alt="loader"
                      />
                   
                  </Button>
                  <ThemeToggle />
                </div>
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <img src={Text} className="h-[14px] w-[14px]" alt="text" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <span className="font-mono text-xs text-gray-400 dark:text-slate-50">
                      <Trash2 />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <span className="font-mono text-xs text-gray-400 dark:text-slate-50">
                      <Copy />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl gap-2 h-10 sm:h-10 text-sm sm:text-base bg-background shadow-none"
                  >
                    <Plus className="h-4 w-4 text-[#E51058] border rounded-full border-[#E51058]" />
                    <span className="hidden sm:inline text-black dark:text-slate-50">
                      Create new collection
                    </span>
                    <span className="sm:hidden">Create</span>
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8 sm:h-10 sm:w-10 border-dashed border-gray-400 "
              >
                <CirclePlus />
              </Button>
              {filterTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={activeFilter === type.value ? "default" : "ghost"}
                  onClick={() => setActiveFilter(type.value)}
                  className={`rounded-full text-xs sm:text-sm px-3 sm:px-4 ${
                    activeFilter === type.value ? "" : "border-2"
                  }`}
                >
                  {type.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap w-full sm:w-auto gap-3">
              <p className="whitespace-nowrap flex flex-col text-xs text-right">
                Sort by
                <span className="text-muted-foreground text-black font-medium text-base flex items-center gap-1">
                  Created date <ChevronsUpDown className="w-4 h-4" />
                </span>
              </p>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl h-8 w-8 sm:h-10 sm:w-10"
              >
                <ListFilter />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {filteredCollections.map((collection) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                onRename={handleRename}
                onStartEdit={handleStartEdit}
                isEditing={isEditing && editingCollectionId === collection.id}
                editingTitle={editingTitle}
                setEditingTitle={setEditingTitle}
              />
            ))}
          </div>
        </div>
          </div>
          <Toaster/>
    </div>
  );
}
