import './App.css'
import { CollectionView } from './collections/CollectionView'
import { Collections } from './components/Collections/Collections'
import { Layout } from './components/Layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/collections/:id" element={<CollectionView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
