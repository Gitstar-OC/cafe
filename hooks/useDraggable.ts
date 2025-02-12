"use client"

import { useState, useEffect, useCallback } from "react"

export const useDraggable = (id: string) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleDragStart = useCallback(
    (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (e.dataTransfer) {
        e.dataTransfer.setData("text/plain", id)
        e.dataTransfer.effectAllowed = "move"
      }
      if (target) {
        const rect = target.getBoundingClientRect()
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    },
    [id],
  )

  const handleDrag = useCallback(
    (e: DragEvent) => {
      if (e.clientX && e.clientY) {
        const target = document.getElementById(id)
        if (target) {
          target.style.left = `${e.clientX - position.x}px`
          target.style.top = `${e.clientY - position.y}px`
        }
      }
    },
    [id, position],
  )

  useEffect(() => {
    const element = document.getElementById(id)
    if (element) {
      element.draggable = true
      element.addEventListener("dragstart", handleDragStart)
      element.addEventListener("drag", handleDrag)

      return () => {
        element.removeEventListener("dragstart", handleDragStart)
        element.removeEventListener("drag", handleDrag)
      }
    }
  }, [id, handleDragStart, handleDrag])

  return { id }
}

