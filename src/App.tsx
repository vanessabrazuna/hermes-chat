import { Helmet, HelmetProvider } from 'react-helmet-async'

import { AutomatedService } from './components/AutomatedService'
import { CommonQuestions } from './components/CommonQuestions'
import { ConversationPlans } from './components/ConversationPlans'
import { ConversationTools } from './components/ConversationTools'
import { CustomeExperience } from './components/CustomeExperience'
import { DemoWatch } from './components/DemoWatch'
import { Demonstration } from './components/Demonstration'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VideoSession } from './components/VideoSession'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Chat Bot para WhatsApp" prioritizeSeoTags />

      <div
        className="h-screen max-w-6xl mx-auto text-zinc-950 flex 
      items-center justify-start flex-col"
      >
        <Header />
        <Hero />
        <VideoSession />
        <Demonstration />
        <ConversationTools />
        <CustomeExperience />
        <AutomatedService />
        <DemoWatch />
        <ConversationPlans />
        <CommonQuestions />
        <Footer />
      </div>
    </HelmetProvider>
  )
}
