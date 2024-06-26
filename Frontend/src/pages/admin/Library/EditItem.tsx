import React, { useState } from "react";
import socket from "../../../socket";
import BookModal from "../../../components/modal/ViewMonal";

type Book = {
  id: number;
  image: string;
  genre: string;
  title: string;
  copies: number;
  author: string;
  barcode: number;
  language: string;
  year_of_prod: number;
  publisher: string;
  subjects: string;
  price: number;
  type: string;
  no_of_pages: number;
  isbn: string;
  rack: string;
};
type BookModalProps = {
  isVisible: boolean;
  onClose: () => void;
  selectedBook: Book | null;
};
const EditItem: React.FC<BookModalProps> = ({
  isVisible,
  onClose,
  selectedBook,
}) => {
  let [updateData, setUpdateData] = useState({
    title: selectedBook?.title,
    author: selectedBook?.author,
    barcode: selectedBook?.barcode,
    language: selectedBook?.language,
    year_of_prod: selectedBook?.year_of_prod,
    publisher: selectedBook?.publisher,
    subjects: selectedBook?.subjects,
    no_of_pages: selectedBook?.no_of_pages,
    price: selectedBook?.price,
    rack: selectedBook?.rack,
    image: selectedBook?.image,
  });

  console.log("this is the selected book", selectedBook);
  const handleUpdatingData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const language = formData.get("language") as string;
    const year_of_prod = formData.get("year_of_prod") as string;
    const publisher = formData.get("publisher") as string;
    const subjects = formData.get("subjects") as string;
    const no_of_pages = formData.get("no_of_pages") as string;
    const price = formData.get("price") as string;
    const rack = formData.get("rack") as string;
    const image = formData.get("image") as string;

    const barcode = formData.get("barcode") as string;

    if (
      !title ||
      !author ||
      !language ||
      !year_of_prod ||
      !publisher ||
      !subjects ||
      !no_of_pages ||
      !price ||
      !rack ||
      !image ||
      !barcode
    ) {
      console.log("fields' values are missing");
      return;
    }
    console.log(updateData);
    updateData.barcode = Number(updateData.barcode);
    updateData.year_of_prod = Number(updateData.year_of_prod);
    updateData.no_of_pages = Number(updateData.no_of_pages);
    updateData.price = Number(updateData.price);
    updateData.rack = updateData.rack?.toString();

    console.log(
      "this is what the update request get when updating",
      updateData
    );
    socket.emit("update-book", updateData);

    socket.once("update-book-response", (response) => {
      console.log(
        "This is the response from the update  book request: ",
        response
      );
    });
  };

  type Book = {
    [key: string]: any;
  };
  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData((prevState) => ({
      ...prevState,
      [name]:
        value.trim() === "" || Number(value) === 0
          ? (selectedBook as Book)[name]
          : value,
    }));
  };

  return (
    <BookModal isVisible={isVisible} onClose={onClose}>
      <div className="p-6" style={{ maxHeight: "500px", overflowY: "auto" }}>
        <h3 className="text-xl font-semibold text-gray-900 mb-5">
          Update a book
        </h3>
        <form onSubmit={handleUpdatingData}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook ? selectedBook.title : ""}
            />
          </div>
          {/* author */}

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-bold mb-2"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.author}
            />
          </div>

          {/* barode */}

          <div className="mb-4">
            <label
              htmlFor="barcode"
              className="block text-gray-700 font-bold mb-2"
            >
              barcode
            </label>
            <input
              type="text"
              id="barcode"
              name="barcode"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.barcode}
            />
          </div>

          {/* language */}
          <div className="mb-4">
            <label
              htmlFor="language"
              className="block text-gray-700 font-bold mb-2"
            >
              Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.language}
            />
          </div>

          {/* year_of_prod */}

          <div className="mb-4">
            <label
              htmlFor="year_of_prod"
              className="block text-gray-700 font-bold mb-2"
            >
              Year of production
            </label>
            <input
              type="number"
              id="year_of_prod"
              name="year_of_prod"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.year_of_prod}
            />
          </div>

          {/* publisher */}

          <div className="mb-4">
            <label
              htmlFor="publisher"
              className="block text-gray-700 font-bold mb-2"
            >
              Publisher
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.publisher}
            />
          </div>

          {/* subjects */}

          <div className="mb-4">
            <label
              htmlFor="subjects"
              className="block text-gray-700 font-bold mb-2"
            >
              Subjects
            </label>
            <input
              type="text"
              id="subjects"
              name="subjects"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.subjects}
            />
          </div>

          {/* no_of_pages */}

          <div className="mb-4">
            <label
              htmlFor="no_of_pages"
              className="block text-gray-700 font-bold mb-2"
            >
              Number of pages
            </label>
            <input
              type="number"
              id="no_of_pages"
              name="no_of_pages"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.no_of_pages}
            />
          </div>

          {/* price */}

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.price}
            />
          </div>

          {/* rack */}

          <div className="mb-4">
            <label
              htmlFor="rack"
              className="block text-gray-700 font-bold mb-2"
            >
              Rack
            </label>
            <input
              type="number"
              id="rack"
              name="rack"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.rack}
            />
          </div>

          {/* image */}

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleUpdate}
              defaultValue={selectedBook?.image}
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </BookModal>
  );
};

export default EditItem;
