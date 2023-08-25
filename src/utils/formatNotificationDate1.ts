export function formatNotificationDate1(date: Date){
    const today = new Date();
    const targetDate = date;

  const oneDay = 24 * 60 * 60 * 1000;
  const daysDifference = Math.round((today.getTime() - targetDate.getTime()) / oneDay);

  if (daysDifference === 0) {
    return 'Hoje';
  } else if (daysDifference === 1) {
    return 'Ontem';
  } else if (daysDifference <= 7) {
    return `${daysDifference} dias atrás`;
  } else if (daysDifference <= 14) {
    return '1 semana atrás';
  } else if (daysDifference <= 21) {
    return '2 semanas atrás';
  } else if (daysDifference <= 28) {
    return '3 semanas atrás';
  } else if (daysDifference <= 30) {
    return 'há 1 mês';
  } else if (daysDifference <= 365) {
    const monthsDifference = Math.floor(daysDifference / 30);
    return `${monthsDifference} meses atrás`;
  } else {
    const yearsDifference = Math.floor(daysDifference / 365);
    return `${yearsDifference} anos atrás`;
  }
}