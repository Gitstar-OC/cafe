interface StickerProps {
    src: string
    alt: string
    className?: string
    rotation?: number
  }
  
  export function Sticker({ src, alt, className = "", rotation = 0 }: StickerProps) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`sticker ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    )
  }
  
  