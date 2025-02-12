"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"

interface DraggableElementProps {
  children: React.ReactNode
  className?: string
  defaultPosition: { x: number; y: number }
}

export function DraggableElement({ children, className = "", defaultPosition }: DraggableElementProps) {
  const [position, setPosition] = useState(defaultPosition)
  const [isDragging, setIsDragging] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      setIsDragging(true)
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top
      elementRef.current.dataset.offsetX = offsetX.toString()
      elementRef.current.dataset.offsetY = offsetY.toString()
    }
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && elementRef.current) {
        const offsetX = Number.parseFloat(elementRef.current.dataset.offsetX || "0")
        const offsetY = Number.parseFloat(elementRef.current.dataset.offsetY || "0")
        const newX = e.clientX - offsetX
        const newY = e.clientY - offsetY

        // Ensure the element stays within the window bounds
        const maxX = window.innerWidth - elementRef.current.offsetWidth
        const maxY = window.innerHeight - elementRef.current.offsetHeight
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        })
      }
    },
    [isDragging],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  return (
    <div
      ref={elementRef}
      className={`absolute select-none ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "move" : "pointer",
        touchAction: "none",
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  )
}

