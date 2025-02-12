"use client"

import Image from "next/image"
import { DraggableElement } from "./components/draggable-element"
import { Footer } from "./components/footer"
import { LAYOUT } from "./constants/layout"
import { useWindowSize } from "./components/useWindowSize"

const postItNotes = [
  { id: "note1", text: "a new\npersonal\nsite!", color: "bg-[#71F1A4]" },
  { id: "note2", text: "rubber\nducky pcb\n:3", color: "bg-[#17E3EC]" },
  { id: "note3", text: "a slack bot\nthat tracks\ntime", color: "bg-[#CCFE5D]" },
  { id: "note4", text: "a really\nreally big\nrc car :O", color: "bg-[#F8C18B]" },
  { id: "note5", text: "idk,\nsomething\ncool!!", color: "bg-[#17E3EC]" },
]

export default function CafeMode() {
  const windowSize = useWindowSize()

  return (
    <main className="bg-[#CD9D66] font-inter min-h-screen relative overflow-hidden">
      {/* Hack Club Flag (not draggable) */}
      <div className="fixed top-0 left-0 z-50">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HC-flag-l4s76l4dDLu7vkuf6C9YnE5YTFracX.png"
          alt="Hack Club Flag"
          width={LAYOUT.hackClubFlag.width}
          height={LAYOUT.hackClubFlag.height}
          className="select-none"
        />
      </div>

      {/* Content Area */}
      <div className="pt-20 pb-40 min-h-screen">
        {/* Cafe Mode Banner */}
        <DraggableElement className="z-20" defaultPosition={LAYOUT.banner}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cafe%20Mode%20On-rDlshibxtREUN7EMHXKTY3Aekd7n7s.png"
            alt="Cafe Mode On"
            width={LAYOUT.banner.width}
            height={LAYOUT.banner.height}
            className="select-none"
          />
        </DraggableElement>

        {/* What will you make heading */}
        <DraggableElement className="z-20" defaultPosition={{ x: 800, y: 40 }}>
          <div className="bg-white px-16 py-4">
            <h2 className="text-xl font-normal">what will you make this week?</h2>
          </div>
        </DraggableElement>

        {/* Post-it Notes */}
        {postItNotes.map((note, index) => (
          <DraggableElement
            key={note.id}
            className={`z-30 ${note.color}`}
            defaultPosition={{
              x: 200 + index * LAYOUT.postItNotes.spacing,
              y: LAYOUT.postItNotes.startY,
            }}
          >
            <div
              className={`w-40 h-40 p-4 flex items-center justify-center transform rotate-${LAYOUT.postItNotes.rotations[index]}`}
              style={{ width: LAYOUT.postItNotes.width, height: LAYOUT.postItNotes.height }}
            >
              <p className="text-center whitespace-pre-line">{note.text}</p>
            </div>
          </DraggableElement>
        ))}

        {/* Pink Card */}
        <DraggableElement className="z-20" defaultPosition={{ x: 40, y: LAYOUT.banner.height + LAYOUT.banner.y + 20 }}>
          <div
            className="bg-[#F24C9E] p-6 text-white transform rotate-1"
            style={{ width: LAYOUT.cards.pink.width, height: LAYOUT.cards.pink.height }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2021-NVzy8x2uJ2m6sNRSP0rrYsSrzd6ly5.png"
              alt="Cat"
              width={60}
              height={60}
              className="mb-4"
            />
            <h2 className="text-2xl mb-4">are YOU a hacker???</h2>
            <p className="mb-4">do YOU want to work on personal projects while on huddle with others?????</p>
            <div className="text-center">
              <p className="font-bold mb-2">come join #cafe!!!!!</p>
              <p className="mb-4">open feb 10-17th</p>
              <p className="mb-2">get a cup* every hour!! we serve coffee,,, and tea,, and celsius,,,</p>
              <p className="text-sm italic">*cups being fictional currency, ofc</p>
              <p className="mt-2">pls come</p>
            </div>
          </div>
        </DraggableElement>

        {/* Cyan Card */}
        <DraggableElement className="z-20" defaultPosition={{ x: 480, y: 380 }}>
          <div
            className="bg-[#17E3EC] p-6 transform -rotate-1"
            style={{ width: LAYOUT.cards.cyan.width, height: LAYOUT.cards.cyan.height }}
          >
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>join the #cafe huddle!</li>
              <li>tell others what you're working on for that session</li>
              <li>post scraps as you work</li>
              <li>leave the huddle + post what you've made in that session!</li>
              <li>get a cup for every hour you're in the huddle!!!</li>
            </ol>
          </div>
        </DraggableElement>

        {/* Lost Dino Card */}
        <DraggableElement
          className="z-20 p-6 transform rotate-3"
          defaultPosition={{ x: 920, y: 280 }}
          style={{ width: LAYOUT.cards.lostDino.width, height: LAYOUT.cards.lostDino.height }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cafe_mode_on-hg15ESpsAWpSpxe8BMTdonfZgHQs0k.png"
            alt="Lost Dino"
            width={320}
            height={240}
            className="mb-6 select-none"
          />
        </DraggableElement>

        {/* Stickers */}
        {LAYOUT.stickers.map((sticker, index) => (
          <DraggableElement key={index} className="z-40" defaultPosition={{ x: sticker.x, y: sticker.y }}>
            <Image
              src={sticker.src || "/placeholder.svg"}
              alt={sticker.alt}
              width={sticker.width}
              height={sticker.height}
              className="select-none"
            />
          </DraggableElement>
        ))}

        {/* Hack Club Logo */}
        <DraggableElement className="z-40" defaultPosition={{ x: windowSize.width - 100, y: windowSize.height - 100 }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hackclub-JiG8VM2wdaqKMhlt3AnrHCzc8PzC4J.png"
            alt="Hack Club"
            width={80}
            height={80}
            className="select-none"
          />
        </DraggableElement>

        {/* Bottom Note */}
        <DraggableElement className="z-20" defaultPosition={{ x: 480, y: 720 }}>
          <div className="bg-[#17E3EC] p-4 text-center max-w-lg">
            <p className="text-lg">note: you must ship a project at the end for your cups to count</p>
          </div>
        </DraggableElement>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}

