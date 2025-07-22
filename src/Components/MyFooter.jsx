const MyFooter = function () {
  return (
    <footer className="bg-dark">
      <p className="text-center text-white">
        footer della pagina / {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default MyFooter;
