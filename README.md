# 💡 SportBoard – Módulo de Estadísticas Deportivas (L4)

## Interfaces Web

![image](https://github.com/user-attachments/assets/ef17b3b9-5309-459d-9c8e-70fef82595e9)

![image](https://github.com/user-attachments/assets/1cd2f895-def0-4f0c-b266-ae5e1e8085ea)

![image](https://github.com/user-attachments/assets/3a5dbe1e-cebc-4920-b078-87e5c6cc73c2)

![image](https://github.com/user-attachments/assets/e657c981-8ce7-4a42-b64c-3402ac9e9844)

![image](https://github.com/user-attachments/assets/2b2226fa-a610-4185-89ff-a030263a372d)

![image](https://github.com/user-attachments/assets/237723cb-ed83-45e1-834a-354c49d7f673)

## Interfaces Mobiel

![image](https://github.com/user-attachments/assets/f10326b6-9b10-4cce-ac34-494677622c0d)


![image](https://github.com/user-attachments/assets/99b4d439-18cf-4038-9207-64bf70d73aeb)

![image](https://github.com/user-attachments/assets/3b363942-231e-43aa-96fe-8f1ab25cbf88)

![image](https://github.com/user-attachments/assets/129a9412-eb4e-46b3-b3df-a8280e435315)

![image](https://github.com/user-attachments/assets/6fff6ded-1004-43c8-b426-13bca7bb314c)

![image](https://github.com/user-attachments/assets/3c963f09-22b5-45f7-a4aa-bbda57c21eb7)

![image](https://github.com/user-attachments/assets/64908332-103a-4dbd-870d-9c4a3233d76a)


## Objetivo
Diseñar un conjunto de interfaces modernas, accesibles y centradas en el usuario para el módulo de estadísticas de SportBoard, basándose en el modelo de clases proporcionado. La aplicación debe permitir visualizar, gestionar y analizar datos relacionados con competiciones, equipos, atletas y estadísticas individuales/colectivas, según el diagrama UML.

## 🧩 Entidades clave a representar
- **Team**: Información básica del equipo, con relación a atletas y estadísticas colectivas.
- **Athlete**: Datos del deportista y su historial de desempeño.
- **Match (Partido)**: Registro de partidos, fecha, lugar, participantes y resultados.
- **Scoreboard**: Muestra el resultado del partido y estadísticas generadas.
- **Result**: Almacena los resultados y los asocia con el Scoreboard.
- **StatisticTeam / StatisticIndividual / StatisticSeason / StatisticCompetition**: Diferentes tipos de estadísticas, según contexto (equipo, jugador, temporada o competencia).
- **EventMatch**: Eventos ocurridos dentro de un partido (goles, faltas, etc.).
- **PositionTable y TableStanding**: Tabla de posiciones y puntajes por jornada.
- **Competition y Season**: Información contextual de temporada y torneo.

## 🖥️ Interfaces a diseñar (mínimo 6 pantallas)

### 🏠 Dashboard General
- Resumen de competiciones, equipos y partidos.
- Estadísticas destacadas por temporada y competencia.
- Acceso rápido a tablas de posiciones y próximos partidos.

### 📊 Detalle de Estadísticas por Equipo
- Listado de equipos.
- Al seleccionar un equipo, mostrar estadísticas agregadas, historial de partidos y posición en la tabla.

### 👤 Vista de Atleta
- Perfil detallado del atleta.
- Estadísticas individuales, eventos en los que participó, equipo actual y temporadas jugadas.

### 📅 Gestión de Partidos (Match)
- Lista de partidos (pasados y futuros).
- Detalles del partido: fecha, lugar, equipos, resultado, eventos registrados (EventMatch).

### 🏆 Tabla de Posiciones
- Mostrar posiciones en una competencia específica.
- Acceso al detalle de puntos, goles, partidos ganados/empatados/perdidos (relación con TableStanding).

### 📈 Panel de Estadísticas Avanzadas
- Comparación de estadísticas por jugador y equipo.
- Gráficos de desempeño por temporada o competencia.
- Filtros dinámicos para tipo de estadísticas: individuales, colectivas, por competencia, etc.

## 🌐 Requisitos UX/UI
- 100% en español.
- Estilo moderno y responsivo.
- Accesibilidad (lectores de pantalla, colores contrastados).
- Navegación fluida entre entidades (relaciones navegables como en el modelo UML).
- Visualización clara de datos complejos (tablas, gráficos, relaciones).

## ⚙️ Implementación sugerida
- Prototipo: Google Stitch, Figma o Adobe XD.
- Desarrollo Web (opcional): HTML5 + CSS3 + JavaScript (Vanilla o con frameworks como Vue/React).
- Bibliotecas de visualización: Chart.js, D3.js para estadísticas.
- Diseño modular adaptable a microservicios.
