"use client"

import React, { useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button" // Assuming you have a Button component

interface WalletConnectionDialogProps {
  connectWallet: () => Promise<React.JSX.Element | undefined>;
  isConnected: boolean;
}

export function WalletConnectionDialog({ connectWallet, isConnected }: WalletConnectionDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    setIsOpen(!isConnected)
  }, [isConnected])

  const handleConnectWallet = async () => {
    await connectWallet()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Your Wallet</DialogTitle>
          <DialogDescription>
            To cast a vote, you need to connect your wallet. Click the button below to connect.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button onClick={handleConnectWallet}>
            Connect Wallet
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}