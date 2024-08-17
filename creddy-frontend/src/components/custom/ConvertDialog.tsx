"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function ConvertDialog() {
  const { toast } = useToast();

  const handleApplyClick = (courseName: string) => {
    toast({
      title: "Course Applied ✅",
      description: `You have applied for ${courseName} with your NFTs.`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Convert</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Areas of Study</DialogTitle>
          <DialogDescription className="pt-2">
            <div>
              <h2 className="font-semibold">Course:</h2>
              <hr />
              {data.map((course) => (
                <div key={course.id} className="flex justify-between items-center space-y-4">
                  <p>{course.name}</p>
                  <DialogClose asChild>
                    <Button onClick={() => handleApplyClick(course.name)}>Apply</Button>
                  </DialogClose>
                </div>
              ))}
            </div>
            <div className="p-2 border border-purple-500 rounded-md mt-4 bg-purple-100">
              {/* Information Div */}
              <div className="flex items-center space-x-2 text-purple-700">
                <IoMdInformationCircleOutline className="text-[32px]" />
                <p>
                  You have up to <strong>0 (+0) credits</strong> available
                  towards a Bachelor's degree. Credits vary by degree.
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {/* Content here */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/* Content here */}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Cancel</Button>
        </DialogFooter>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
}

const data = [
  { id: 1, name: "Accounting" },
  { id: 2, name: "Software Engineering" },
  { id: 3, name: "Data Analytics" },
  { id: 4, name: "Project Management" },
  { id: 5, name: "Artificial Intelligence" },
];