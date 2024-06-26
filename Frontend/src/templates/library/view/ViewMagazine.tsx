import ViewModal from "../../../components/modal/ViewMonal";

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
  edition_number: number;
  editor: string;
  rack: number;
};

type BookModalProps = {
  isVisible: boolean;
  onClose: () => void;
  selectedBook: Book | null;
  setBook: (books: Book[]) => void;
};

const ViewMagazine: React.FC<BookModalProps> = ({
  isVisible,
  onClose,
  selectedBook,
  // setBook,
}) => {
  return (
    <ViewModal isVisible={isVisible} onClose={onClose}>
      {selectedBook && (
        <div className="p-6" style={{ maxHeight: "500px", overflowY: "auto" }}>
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Magazine Info
          </h3>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <p>{selectedBook.title}</p>
          </div>
          {/* author */}

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-bold mb-2"
            >
              Author
            </label>
            <p>{selectedBook.author}</p>
          </div>

          {/* barcode */}
          <div className="mb-4">
            <label
              htmlFor="barcode"
              className="block text-gray-700 font-bold mb-2"
            >
              Barcode
            </label>
            <p>{selectedBook.barcode}</p>
          </div>

          {/* language */}
          <div className="mb-4">
            <label
              htmlFor="language"
              className="block text-gray-700 font-bold mb-2"
            >
              Language
            </label>
            <p>{selectedBook.language}</p>
          </div>

          {/* year_of_prod */}

          <div className="mb-4">
            <label
              htmlFor="year_of_prod"
              className="block text-gray-700 font-bold mb-2"
            >
              Year of production
            </label>
            <p>{selectedBook.year_of_prod}</p>
          </div>

          {/* publisher */}

          <div className="mb-4">
            <label
              htmlFor="publisher"
              className="block text-gray-700 font-bold mb-2"
            >
              Publisher
            </label>
            <p>{selectedBook.publisher}</p>
          </div>

          {/* subjects */}

          <div className="mb-4">
            <label
              htmlFor="subjects"
              className="block text-gray-700 font-bold mb-2"
            >
              Subjects
            </label>
            <p>{selectedBook.subjects}</p>
          </div>

          {/* no_of_pages */}
          <div className="mb-4">
            <label
              htmlFor="no_of_pages"
              className="block text-gray-700 font-bold mb-2"
            >
              Number of pages
            </label>
            <p>{selectedBook.no_of_pages}</p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <p>{selectedBook.price}</p>
          </div>

          {/* edition_number */}
          <div className="mb-4">
            <label
              htmlFor="edition_number"
              className="block text-gray-700 font-bold mb-2"
            >
              Edition Number
            </label>
            <p>{selectedBook.edition_number}</p>
          </div>

          {/* editor */}
          <div className="mb-4">
            <label
              htmlFor="editor"
              className="block text-gray-700 font-bold mb-2"
            >
              Editor
            </label>
            <p>{selectedBook.editor}</p>
          </div>

          {/* rack */}
          <div className="mb-4">
            <label
              htmlFor="rack"
              className="block text-gray-700 font-bold mb-2"
            >
              Rack
            </label>
            <p>{selectedBook.rack}</p>
          </div>

          <div className="mb-4 button">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline test mr-3"
            >
              remove
            </button>
            <button
              type="submit"
              className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline test"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </ViewModal>
  );
};

export default ViewMagazine;
