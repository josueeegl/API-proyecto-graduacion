module.exports = {
  formatear: (dia) => {
    if (dia.startsWith("Mon")) return "Lun";
    if (dia.startsWith("Tu")) return "Mar";
    if (dia.startsWith("We")) return "Mier";
    if (dia.startsWith("Th")) return "Jue";
    if (dia.startsWith("Fr")) return "Vier";
    if (dia.startsWith("Sa")) return "Sáb";
    if (dia.startsWith("Su")) return "Dom";
  },
};
