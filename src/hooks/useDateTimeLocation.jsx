import {useState, useEffect} from "react";

function useDateTimeLocation() {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState({ lat: null, lon: null, error: null });

  // Actualizar la fecha y hora en tiempo real
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer); // Limpiar el intervalo al desmontar
  }, []);

  // Obtener la ubicación del usuario
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({ lat: null, lon: null, error: error.message });
        }
      );
    } else {
      setLocation({ lat: null, lon: null, error: "La geolocalización no es compatible con este navegador." });
    }
  }, []);

  return { dateTime, location };
}

export default useDateTimeLocation;