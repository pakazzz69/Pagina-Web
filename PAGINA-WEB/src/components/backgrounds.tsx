export default function Backgrounds() {
  const backgrounds = [
    {
      nombre: "Batalla en el Prado Paceño",
      descripcion:
        "La batalla se desarrolla en el Prado Paceño, recreado en estilo pixel art. Este escenario muestra escombros y estructuras dañadas, pero conserva elementos reconocibles de La Paz.",
      imagen: "/backgrounds/batalla.png",
    },
    {
      nombre: "Mapa inicial - Ciudad del Alto",
      descripcion:
        "El primer mapa ocurre en un entorno urbano pixel art de la ciudad del Alto, con autos, micros y minibuses. La zona se encuentra desolada y polvorienta.",
      imagen: "/backgrounds/escenario1.png",
    },
    {
      nombre: "Mapa secundario - Ciudad del Alto",
      descripcion:
        "El mapa secundario también se desarrolla en la ciudad del Alto, con pisos terrosos, microbuses y otros elementos urbanos, incluyendo pixel art de pollos Cochabamba.",
      imagen: "/backgrounds/escenario2.png",
    },
  ];

  return (
    <section style={{ padding: "40px", backgroundColor: "#1e1e1e", color: "#f0f0f0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px", color: "#00ffcc" }}>
        Backgrounds de Intromission to the Dark
      </h1>
      <p style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 40px auto", fontSize: "16px" }}>
        Estos son ejemplos temporales de los escenarios del juego. Más adelante se reemplazarán con los fondos reales.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
        }}
      >
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#2a2a2a",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,255,204,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.5)";
            }}
          >
            <img
              src={bg.imagen}
              alt={bg.nombre}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ marginBottom: "8px", color: "#00ffcc" }}>{bg.nombre}</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.4" }}>{bg.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
