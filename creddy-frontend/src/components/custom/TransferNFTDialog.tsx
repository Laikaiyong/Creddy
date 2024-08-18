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
  DialogClose, // Import DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function TransferNFTDialog() {
  const { toast } = useToast();
  const [walletAddress, setWalletAddress] = useState("");
  const [nftAddress, setNftAddress] = useState("");

  const handleApplyClick = () => {
    toast({
      title: "Transaction Created ☑️",
      description: `You have queued an NFT transfer to ${walletAddress}.`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-purple-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Send NFTs
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send NFTs</DialogTitle>
          <DialogDescription>
            Key in the wallet address of the recipient.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="wallet_address" className="text-right">
              Wallet Address
            </Label>
            <Input
              id="wallet_address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nft_address" className="text-right">
              NFT Address
            </Label>
            <Input
              id="nft_address"
              value={nftAddress}
              onChange={(e) => setNftAddress(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={handleApplyClick}
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md"
            >
              Send 🚀
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
}
