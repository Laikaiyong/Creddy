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

export default function MintNFTDialog() {
  return (
    <Dialog>
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
            <Input id="name" defaultValue="Big Sexy Gorilla" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              NFT Address
            </Label>
            <Input id="nft_address" defaultValue="0x..." className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            Mint ✨
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
