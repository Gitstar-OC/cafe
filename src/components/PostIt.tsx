import type { ReactNode } from "react"
import Draggable from "react-draggable"
import { clsx } from "clsx"

interface PostItProps {
  children: ReactNode
  color: "neon-green" | "cyan" | "peach"
  rotation?: number
  className?: string
  draggable?: boolean
}

export function PostIt({ children, color, rotation = 0, className, draggable = false }: PostItProps) {
  const content = (
    <div
      className={clsx(
        "post-it p-4 rounded-lg w-[180px] h-[180px] flex items-center justify-center text-center",
        {
          "bg-neon-green": color === "neon-green",
          "bg-cyan": color === "cyan",
          "bg-peach": color === "peach",
        },
        className,
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <p className="font-comic text-lg leading-tight">{children}</p>
    </div>
  )

  if (draggable) {
    return (
      <Draggable bounds="parent" handle=".post-it">
        {content}
      </Draggable>
    )
  }

  return content
}

