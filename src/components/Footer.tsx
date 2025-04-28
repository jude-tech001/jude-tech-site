
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-auto">
      <div className="container">
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
