module.exports = {
  gxIngresos: (x) => {
    if (x.length > 0) {
      var array = [];
      var arr = [];
      var salario = 0.0,
        aguinaldo = 0.0,
        premio = 0.0,
        inversiones = 0.0,
        otro = 0.0;
      x.forEach((item) => {
        item.tipo === "Ingreso" ? array.push(item) : null;
      });

      array.forEach((z) => {
        z.nombre === "Salario" ? (salario += z.valor) : null;
        z.nombre === "Aguinaldo" ? (aguinaldo += z.valor) : null;
        z.nombre === "Premio" ? (premio += z.valor) : null;
        z.nombre === "Inversiones" ? (inversiones += z.valor) : null;
        z.nombre === "Otro" ? (otro += z.valor) : null;
      });

      salario > 0
        ? arr.push({
            name: "Salario",
            population: salario,
            color: "#005F73",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

      aguinaldo > 0
        ? arr.push({
            name: "Aguinaldo",
            population: aguinaldo,
            color: "rgba(105, 99, 185, 0.8)",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

      premio > 0
        ? arr.push({
            name: "Premios",
            population: premio,
            color: "#05464B",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

      inversiones > 0
        ? arr.push({
            name: "Inversiones",
            population: inversiones,
            color: "#03151B",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;
      otro > 0
        ? arr.push({
            name: "Otros",
            population: otro,
            color: "#0A9396",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

      return arr;
    } else {
      return [];
    }
  },

  gxGastos: (x) => {
    if (x.length > 0) {
      var array = [];
      var arr = [];
      var trans = 0.0, edu = 0.0, com = 0.0, salu = 0.0, entre = 0.0, vacas = 0.0, fies = 0.0, serv = 0.0, otro = 0.0;
      x.forEach((item) => {
        item.tipo === "Gasto" ? array.push(item) : null;
      });

      array.forEach((z) => {
        z.nombre === "Transporte" ? (trans += z.valor) : null;
        z.nombre === "Educación" ? (edu += z.valor) : null;
        z.nombre === "Comida" ? (com += z.valor) : null;
        z.nombre === "Salud" ? (salu += z.valor) : null;
        z.nombre === "Entretenimiento" ? (entre += z.valor) : null;
        z.nombre === "Vacaciones" ? (vacas += z.valor) : null;
        z.nombre === "Fiesta" ? (fies += z.valor) : null;
        z.nombre === "Servicios" ? (serv += z.valor) : null;
        z.nombre === "Otro" ? (otro += z.valor) : null;
      });

      trans > 0
        ? arr.push({
            name: "Transporte",
            population: trans,
            color: "#D0D3D4",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

        edu > 0
        ? arr.push({
            name: "Educación",
            population: edu,
            color: "#CD6155",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

        com > 0
        ? arr.push({
            name: "Comida",
            population: com,
            color: "#DC7633",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

      salu > 0
        ? arr.push({
            name: "Salud",
            population: salu,
            color: "#78281F",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;
      entre > 0
        ? arr.push({
            name: "Entretenimiento",
            population: entre,
            color: "#9D6455",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;
        vacas > 0
        ? arr.push({
            name: "Vacaciones",
            population: vacas,
            color: "#16A085",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;
        fies > 0
        ? arr.push({
            name: "Fiesta",
            population: fies,
            color: "#F5CBA7",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;
        serv > 0
        ? arr.push({
            name: "Servicios",
            population: serv,
            color: "#D5F5E3",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;
        otro > 0
        ? arr.push({
            name: "Otros",
            population: otro,
            color: "#D6EAF8",
            legendFontColor: "rgba(255,255,255,0.7)",
            legendFontSize: 14,
          })
        : null;

      return arr;
    } else {
      return [];
    }
  },
};
