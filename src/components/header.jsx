import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MeuHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  return (
    <header className="site-header">
      <img
        data-aos="fade-down" data-aos-duration="1000"
        src="src/assets/k-high-resolution-logo-removebg-preview.png"
        alt="LogoMark"
      />
      <nav className="nav-inline">
        <a href="#SobreMim" data-aos="fade-down" data-aos-duration="1000">Sobre mim</a>
        <a href="#Habilidades" data-aos="fade-down" data-aos-duration="1500">Habilidades</a>
        <a href="#Projetos" data-aos="fade-down" data-aos-duration="2000">Projetos</a>
        <a href="#Contato" data-aos="fade-down" data-aos-duration="2500">Contato</a>
      </nav>
      <button
        className="menu-toggle"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="sideMenu"
              role="dialog"
              aria-modal="true"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <button className="close" onClick={() => setOpen(false)} aria-label="Fechar menu">×</button>
              <nav className="nav-drawer" onClick={() => setOpen(false)}>
                <a href="#SobreMim">Sobre mim</a>
                <a href="#Habilidades">Habilidades</a>
                <a href="#Projetos">Projetos</a>
                <a href="#Contato">Contato</a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default MeuHeader;
