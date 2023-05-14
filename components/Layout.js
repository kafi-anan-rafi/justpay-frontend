import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div>
      <div class="flex flex-col h-screen">
        <div class="flex-grow">
          <Header />
          <Navbar />
          <main className='container mx-auto px-4'>{children}</main>
        </div>
        <div class="mt-auto">
          <Footer />
        </div>
      </div>
      {/* <Header title={"Payment Made Easier!"} />
      <Navbar />
      <main className='container mx-auto px-4'>{children}</main>
      <Footer /> */}
    </div>
  )
}