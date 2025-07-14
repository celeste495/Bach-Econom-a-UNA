const courses = [
  { code: "EGC", name: "Estudios Generales Ciencias", req: [] },
  { code: "EGS", name: "Estudios Generales Sociales", req: [] },
  { code: "ECF400", name: "Introducción a la Economía I", req: [] },
  { code: "LIX", name: "Inglés Integrado I", req: [] },
  { code: "MAT001", name: "Matemática General", req: [] },
  { code: "ECF", name: "Estudios Generales Filosofía", req: [] },
  { code: "EGA", name: "Estudios Generales Artes", req: [] },
  { code: "ECF402", name: "Introducción a la Economía II", req: ["ECF400"] },
  { code: "ECF403", name: "Estadística I", req: ["ECF400", "MAT001"] },
  { code: "MAT002", name: "Cálculo I", req: ["MAT001"] },
  { code: "ECF404", name: "Microeconomía I", req: ["ECF400", "MAT002"] },
  { code: "ECF405", name: "Macroeconomía I", req: ["ECF402", "MAT002"] },
  { code: "ECF406", name: "Economía Política", req: ["ECF402", "MAT001"] },
  { code: "MAT050", name: "Cálculo II para Economía", req: ["MAT002"] },
  { code: "ECF407", name: "Estadística II", req: ["ECF403", "MAT002"] },
  { code: "ECF408", name: "Microeconomía II", req: ["ECF404", "MAT002"] },
  { code: "ECF409", name: "Macroeconomía II", req: ["ECF405", "MAT002"] },
  { code: "ECF410", name: "Economía Política II", req: ["ECF406"] },
  { code: "MAT005", name: "Álgebra Lineal", req: ["MAT002"] },
  { code: "ECF411", name: "Econometría I", req: ["MAT050", "ECF404", "ECF405", "ECF406"] },
  { code: "ECF412", name: "Microeconomía III", req: ["ECF408", "MAT050"] },
  { code: "ECF413", name: "Macroeconomía III", req: ["ECF409", "MAT050"] },
  { code: "ECF414", name: "Economía Política III", req: ["ECF410"] },
  { code: "ECF415", name: "Economía Ambiental", req: ["ECF408", "ECF411"] },
  { code: "ECF416", name: "Econometría II", req: ["ECF408", "ECF409", "ECF411"] },
  { code: "ECF417", name: "Macroeconomía de economías abiertas", req: ["ECF413", "ECF416"] },
  { code: "ECF423", name: "Comercio internacional", req: ["ECF412", "ECF413", "ECF416"] },
  { code: "ECF420", name: "Economía ecológica", req: ["ECF414", "ECF415"] },
  { code: "ECF421", name: "Econometría III", req: ["ECF416"] },
  { code: "ECF422", name: "Teorías del desarrollo", req: [] },
  { code: "ECF418", name: "Evaluación de proyectos", req: [] },
  { code: "ECF424", name: "Economía del sector público", req: [] },
  { code: "ECF419", name: "Modelos multisectoriales", req: ["ECF423"] },
  { code: "ECF425", name: "Temas de economía del desarrollo", req: ["ECF422"] },
  { code: "ECF426", name: "Práctica profesional", req: [] },
  { code: "ECF4500", name: "Taller investigación", req: [] },
];

const state = {};

const grid = document.getElementById("grid");

function renderCourses() {
  grid.innerHTML = "";
  for (const course of courses) {
    const div = document.createElement("div");
    div.className = "course";
    div.id = course.code;
    div.textContent = course.name;

    const unmetReqs = course.req.filter(r => !state[r]);
    if (unmetReqs.length > 0) {
      div.classList.add("locked");
    } else if (state[course.code]) {
      div.classList.add("approved");
    }

    div.addEventListener("click", () => {
      if (unmetReqs.length > 0) return;
      state[course.code] = !state[course.code];
      renderCourses();
    });

    grid.appendChild(div);
  }
}

renderCourses();

