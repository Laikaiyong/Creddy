import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AttributeSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Attribute" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Attributes</SelectLabel>
          <SelectItem value="apple">Solution Architecture</SelectItem>
          <SelectItem value="banana">Teamwork</SelectItem>
          <SelectItem value="blueberry">Communication</SelectItem>
          <SelectItem value="grapes">Project Management</SelectItem>
          <SelectItem value="pineapple">BlockChain Development</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
