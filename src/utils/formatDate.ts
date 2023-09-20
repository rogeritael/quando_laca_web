const months: { [key: string]: string } = {
    Jan: "Janeiro",
    Feb: "Fevereiro",
    Mar: "Março",
    Apr: "Abril",
    May: "Maio",
    Jun: "Junho",
    Jul: "Julho",
    Aug: "Agosto",
    Sep: "Setembro",
    Oct: "Outubro",
    Nov: "Novembro",
    Dec: "Dezembro"
}

export function formatDate(date: Date){
    // const date = new Date(dataStr);
    const day = date.getDate();
    const month = months[date.toString().split(" ")[1]];
    const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

export function formatDateMinified(date: Date){
  // const date = new Date(dataStr);
  const day = date.getDate();
  const month = months[date.toString().split(" ")[1]];

  const formattedDate = `${day} de ${month}`;
  return formattedDate;
}