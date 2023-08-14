export function countdown(targetDate: Date) {
    const currentDate = new Date();
    const targetDateTime = new Date(targetDate).getTime(); // Convertendo a data alvo para milissegundos
    const currentTime = currentDate.getTime();

    const timeDiff = targetDateTime - currentTime;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff > 0) {
        return `Lança em ${daysDiff} dias`;
    } else if (daysDiff < 0) {
        return `Lançado há ${Math.abs(daysDiff)} dias`;
    } else {
        return 'lançado hoje!';
    }
}