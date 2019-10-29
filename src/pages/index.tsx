import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import ExternalLink, {
  ExternalLinkList
} from '../components/externallink/externallink'

const App = () => (
  <Layout>
    <SEO />
    <div>
      <h2>Social</h2>
      <ExternalLinkList>
        <ExternalLink href="https://reddit.com/">Reddit</ExternalLink>
        <ExternalLink href="https://youtube.com/">YouTube</ExternalLink>
      </ExternalLinkList>
    </div>
    <div>
      <h2>Coding</h2>
      <ExternalLinkList>
        <ExternalLink href="https://github.com/">GitHub</ExternalLink>
        <ExternalLink href="https://gitlab.com/">GitLab</ExternalLink>
        <ExternalLink href="https://stackoverflow.com/">
          StackOverflow
        </ExternalLink>
      </ExternalLinkList>
    </div>
    <div>
      <h2>News</h2>
      <ExternalLinkList>
        <ExternalLink href="https://news.ycombinator.com">
          Hacker News
        </ExternalLink>
        <ExternalLink href="https://arstechnica.com">Ars Technica</ExternalLink>
      </ExternalLinkList>
    </div>
  </Layout>
)

export default App
