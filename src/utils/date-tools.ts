/* formata a data para Day(dia), Month(mês), Year(ano)*/
const formatDateDMY = (bDay: Date) => {
    const date = new Date(bDay);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() +1;
    return `${(day < 10 && "0" + day) || day}/${
        (month < 10 && "0" + month) || month
    }/${year}`;
};

// yyyy/mm/dd
const formatDateYMD = (bDay: Date) => {
    const date = new Date(bDay);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() + 1;
    return `${year}-${(month < 10 && "0" + month) || month}-${
        (day < 10 && "0" + day) || day
    }`;
};

export const dateTools = {
    formatDateDMY,
    formatDateYMD,
};
