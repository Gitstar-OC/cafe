import { PostIt } from "./PostIt"
import { Sticker } from "./Sticker"

export function Cafe() {
  return (
    <div className="w-[1200px] h-[800px] relative mx-auto overflow-hidden p-8">
      {/* Header */}
      <div className="header-card bg-header-black p-6 rounded-lg inline-block transform -rotate-2">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src="/coffee-icon.svg" alt="" className="w-12 h-12" />
            <div className="absolute inset-0 bg-gradient-to-r from-hot-pink to-cyan opacity-50 mix-blend-overlay" />
          </div>
          <h1 className="font-comic text-white text-4xl tracking-wide">
            cafe mode <span className="text-gradient">ON</span>
          </h1>
        </div>
      </div>

      {/* Hack Club Stickers */}
      <Sticker src="/hack-club-foot.svg" alt="" className="absolute top-0 left-0 w-24 h-24" />
      <Sticker src="/hack-club-mascot.svg" alt="" className="absolute top-40 right-20 w-16 h-16" rotation={15} />

      {/* Announcement Card */}
      <div className="absolute top-32 left-20 bg-hot-pink p-8 rounded-lg w-[360px] text-white transform rotate-1">
        <h2 className="font-comic text-3xl mb-6">are YOU a hacker???</h2>
        <p className="font-comic text-xl mb-6 leading-snug">
          do YOU want to work on personal projects while on huddle with others?????
        </p>
        <div className="bg-white/20 p-4 rounded-lg text-center mb-6">
          <p className="font-comic font-bold text-2xl">come join #cafe!!!!!</p>
          <p className="font-comic text-xl">open feb 10-17th</p>
        </div>
        <p className="font-comic text-lg">get a cup* every hour!! we serve coffee,,, and tea,, and celsius,,</p>
        <p className="font-comic text-sm mt-2 opacity-75">*cups being fictional currency ofc</p>

        {/* Purple Character */}
        <img src="/bubble-tea-character.svg" alt="" className="absolute -bottom-20 -left-20 w-40 h-40" />
      </div>

      {/* Instructions Card */}
      <div className="absolute top-40 right-32 bg-cyan p-8 rounded-lg w-[440px] transform -rotate-1">
        <ol className="font-comic text-xl space-y-4">
          <li>1 - join the #cafe huddle!</li>
          <li>2 - tell others what you're working on for that session</li>
          <li>3 - post scraps as you work</li>
          <li>4 - leave the huddle + post what you've made in that session!</li>
          <li>5 - get a cup for every hour you're in the huddle!!!</li>
        </ol>
      </div>

      {/* Draggable Post-its */}
      <PostIt color="neon-green" draggable className="absolute top-20 right-96">
        a new personal site!
      </PostIt>

      <PostIt color="cyan" draggable className="absolute top-80 right-80">
        rubber ducky pcb :3
      </PostIt>

      <PostIt color="peach" draggable className="absolute top-60 right-64">
        a slack bot that tracks time
      </PostIt>

      {/* Fixed Post-its */}
      <PostIt color="neon-green" rotation={-2} className="absolute top-40 left-96">
        a really really big rc car :O
      </PostIt>

      <PostIt color="cyan" rotation={2} className="absolute top-80 left-80">
        idk, something cool!!
      </PostIt>

      {/* Lost Dino Card */}
      <div className="absolute top-60 right-20 bg-[#f1d5e3] p-4 rounded-lg w-[300px] transform rotate-3">
        <h3 className="font-comic text-xl mb-2">URGENT: LOST DINO</h3>
        <img src="/lost-dino.jpg" alt="Lost dinosaur" className="w-full rounded-md mb-2" />
        <p className="font-comic text-right">
          please help me find her :( <br />- heidi :3
        </p>
      </div>

      {/* Bottom Note */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-cyan p-4 text-center rounded-lg w-[600px]">
        <p className="font-comic text-xl">note: you must ship a project at the end for your cups to count</p>
      </div>

      {/* Decorative Elements */}
      <img
        src="/hack-chinese.svg"
        alt=""
        className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-[200px]"
      />
      <img src="/hack-club-cola.svg" alt="" className="absolute bottom-20 left-20 w-[120px] transform rotate-15" />
    </div>
  )
}

