import './App.css'
import { CollectionView } from './collections/CollectionView'
import { Collections } from './components/Collections/collections'
import { Layout } from './components/Layout/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  //this is the App.tsx file

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
