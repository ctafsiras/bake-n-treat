"use client"
import React, { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type IEntry={
    id: string,
    date: Date
}
interface ITab{
    name: string;
    id: string;
    entries?: IEntry[]
}

export default function Component() {
  const [tabs, setTabs] = useState<ITab[]>([{ id: "1", name: "Tab 1", entries: [] }])
  const [activeTab, setActiveTab] = useState("1")
  const [isNewTabDialogOpen, setIsNewTabDialogOpen] = useState(false)
  const [newTabName, setNewTabName] = useState("")
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState<string | null>(null)
  const [tabDeleteConfirmOpen, setTabDeleteConfirmOpen] = useState<string | null>(null)

  const addTab = () => {
    if (newTabName) {
      const newTab = { id: Date.now().toString(), name: newTabName, entries: [] }
      setTabs([...tabs, newTab])
      setNewTabName("")
      setIsNewTabDialogOpen(false)
      setActiveTab(newTab.id)
    }
  }

  const addEntry = () => {
    if (selectedDate) {
      const updatedTabs = tabs.map(tab => {
        if (tab.id === activeTab) {
          return {
            ...tab,
            entries: [...tab.entries!, { id: Date.now().toString(), date: selectedDate }],
          }
        }
        return tab
      })
      setTabs(updatedTabs)
      setIsCalendarOpen(false)
    }
  }

  const deleteEntry = (tabId: string, entryId: string) => {
    const updatedTabs = tabs.map(tab => {
      if (tab.id === tabId) {
        return {
          ...tab,
          entries: tab.entries?.filter(entry => entry.id !== entryId),
        }
      }
      return tab
    })
    setTabs(updatedTabs)
    setDeleteConfirmOpen(null)
  }

  const deleteTab = (tabId: string) => {
    const updatedTabs = tabs.filter(tab => tab.id !== tabId)
    setTabs(updatedTabs)
    if (activeTab === tabId && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0]!.id)
    }
    setTabDeleteConfirmOpen(null)
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center mb-4">
          <TabsList>
            {tabs.map(tab => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex items-center">
                {tab.name}
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    setTabDeleteConfirmOpen(tab.id)
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </TabsTrigger>
            ))}
          </TabsList>
          <Button variant="ghost" size="icon" onClick={() => setIsNewTabDialogOpen(true)} className="ml-2">
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        {tabs.map(tab => (
          <TabsContent key={tab.id} value={tab.id}>
            <ul className="space-y-2">
              {tab.entries?.map(entry => (
                <li key={entry.id} className="flex items-center justify-between bg-muted p-2 rounded">
                  <span>{format(entry.date, "MMMM d, yyyy")}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDeleteConfirmOpen(entry.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isNewTabDialogOpen} onOpenChange={setIsNewTabDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Tab</DialogTitle>
          </DialogHeader>
          <Input
            value={newTabName}
            onChange={(e) => setNewTabName(e.target.value)}
            placeholder="Enter tab name"
          />
          <DialogFooter>
            <Button onClick={addTab}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Date</DialogTitle>
          </DialogHeader>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          <DialogFooter>
            <Button onClick={() => setIsCalendarOpen(false)} variant="outline">Cancel</Button>
            <Button onClick={addEntry}>Okay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteConfirmOpen} onOpenChange={() => setDeleteConfirmOpen(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the entry.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteEntry(activeTab, deleteConfirmOpen!)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!tabDeleteConfirmOpen} onOpenChange={() => setTabDeleteConfirmOpen(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Tab</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this tab? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteTab(tabDeleteConfirmOpen!)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button
        className="fixed bottom-4 right-4 rounded-full"
        size="icon"
        onClick={() => setIsCalendarOpen(true)}
      >
        <CalendarIcon className="h-6 w-6" />
      </Button>
    </div>
  )
}