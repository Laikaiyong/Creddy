import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AttributeSelector from "@/components/custom/AttributeSelector";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function MintNFTDialog() {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [nftAddress, setNftAddress] = useState(""); // State to track NFT address

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleApplyClick = () => {
    toast({
      title: "Transaction Created ☑️",
      description: `You have queued an NFT for minting with the address of ${nftAddress}.`,
    });
    // Ensure the dialog closes and the preview is cleared
    setIsDialogOpen(false);
    setImagePreview(null); // Clear the image preview
  };

  const handleDialogChange = (open: boolean) => {
    if (!open) {
      // Reset the image states and NFT address when the dialog is closed
      setSelectedImage(null);
      setImagePreview(null);
      setNftAddress("");
    }
    setIsDialogOpen(open);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-purple-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Mint NFT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mint New NFTs</DialogTitle>
          <DialogDescription>
            Add in the attributes to mint a new NFT.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Web3 Poppins" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nft_address" className="text-right">
              NFT Address
            </Label>
            <Input
              id="nft_address"
              placeholder="0x..."
              className="col-span-3"
              value={nftAddress}
              onChange={(e) => setNftAddress(e.target.value)} // Update NFT address state
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="attribute" className="text-right">
              Attribute
            </Label>
            <AttributeSelector />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image_upload" className="text-right">
              Image Upload
            </Label>
            <Input
              id="image_upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="col-span-3"
            />
          </div>
          {imagePreview && (
            <div className="col-span-4 text-center mt-4">
              <img
                src={imagePreview}
                alt="NFT Preview"
                className="w-full max-w-xs h-auto max-h-64 object-contain rounded-md mx-auto"
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={handleApplyClick} // Call handleApplyClick on click
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            Mint ✨
          </Button>
        </DialogFooter>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
}