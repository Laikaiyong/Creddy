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

export default function TransferNFTDialog() {
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
            <Label htmlFor="name" className="text-right">
              Wallet Address
            </Label>
            <Input id="address" defaultValue="0x..." className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            Send 🚀
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
