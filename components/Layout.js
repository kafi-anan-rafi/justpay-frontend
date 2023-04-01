import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className={styles.description}>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}