import { SideNav } from './components/SideNav'
import { OverviewSection } from './components/OverviewSection'
import { FoundationsSection } from './components/FoundationsSection'
import { ComponentsSection } from './components/ComponentsSection'
import { PatternsSection } from './components/PatternsSection'
import { AssetsSection } from './components/AssetsSection'
import { IconLibrarySection } from './components/IconLibrarySection'
import { ContentSection } from './components/ContentSection'
import { AccessibilitySection } from './components/AccessibilitySection'
import { ResourcesSection } from './components/ResourcesSection'

function App() {
  return (
    <div className="guidelines-layout">
      <SideNav />
      <main className="guidelines-main">
        <div className="guidelines-content">
          <OverviewSection />
          <FoundationsSection />
          <ComponentsSection />
          <PatternsSection />
          <AssetsSection />
          <IconLibrarySection />
          <ContentSection />
          <AccessibilitySection />
          <ResourcesSection />
        </div>
      </main>
    </div>
  )
}

export default App