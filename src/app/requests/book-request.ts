interface CreateBookRequest {
    title: string,
    authors: string,
    isbn: string,
    description?: string,
}

interface UpdateBookRequest {
    id: string,
    isbn?: string,
    title?: string,
    authors?: string,    
    description?: string,
}