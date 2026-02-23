import Book from "../models/bookModel.js"
export async function getAllBooks(_, res) {
    try {
        const books = await Book.find().sort({ CreatedAt: -1 })
        res.status(200).json(books)
    } catch (error) {
        console.error("Error in getAllBooks Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }

}
export async function getBookById(req, res) {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({ message: "Book not Found" })
        res.status(200).json(book)
    } catch (error) {
        console.error("Error in getBookById Controller", error)
        res.status(500).json({ message: "Internal Server error" })

    }
}
export async function createBook(req, res) {
    try {
        const { title, author, publishYear } = req.body
        if (!title || !author || !publishYear) {
            return res.status(404).json({
                Message: "All field are required"
            })
        }
        const book = new Book({ title, author, publishYear })
        const SavedBook = await book.save()
        res.status(200).json({ SavedBook })
    } catch (error) {
        console.error("Error Create Book Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}
export async function updateBook(req, res) {
    try {
        const { title, author, publishYear } = req.body
        const updateBook = await
            Book.findByIdAndUpdate(req.params.id, { title, author, publishYear }, { new: true })
        if (!updateBook) return res.status(404).json({ meaage: "Book not Found" })
        res.status(200).json(updateBook)
    } catch (error) {
        console.error("Error in updateBook Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}
export async function deleteBook(req, res) {
    try {
        const deleteBook = await
            Book.findByIdAndDelete(req.params.id)
        if (!deleteBook) return res.status(404).json({ message: "Book delete Successfully" })
            res.status(200).json({message:"Book Deleted Successfully"})
    } catch (error) {
        console.error("Error in deleteBook Controller", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}

