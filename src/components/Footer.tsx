export function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="text-primary font-bold tracking-tight">barebear // consortium</span>
        </div>
        <p className="text-secondary text-sm">
          &copy; {new Date().getFullYear()} barebear curriculum project. Open source pedagogy for a complex world.
        </p>
      </div>
    </footer>
  );
}
