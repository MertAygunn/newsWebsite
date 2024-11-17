// app/components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.</p>
      </footer>
    );
  };
  
  export default Footer;