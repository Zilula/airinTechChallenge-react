const paging = (filtered, currentPage, direction) => {
    return new Promise((resolve, reject) => {
        const itemsPerPage = 25;
        if(direction === 1) {

            const startAt = itemsPerPage * currentPage;
            const endAt = startAt + itemsPerPage;
            resolve(filtered.slice(startAt, endAt));
        }

        const startAt = itemsPerPage * currentPage;
        const endAt = startAt + itemsPerPage;
        const reversed = filtered.reverse().slice(startAt, endAt);

        resolve(reversed.reverse());
    });

};

export default paging;
