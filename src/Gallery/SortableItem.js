// import React from 'react';
// import { useSortable } from "@dnd-kit/sortable";

// const SortableItem = ({ image, images, index, toggleImageSelection, selectedImages, id }) => {
//     console.log('selected image', selectedImages)
//     const {
//         attributes,
//         listeners,
//         setNodeRef,
//         transform,
//         transition
//     } = useSortable({ id });

//     const style = {
//         transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
//         transition
//     };

//     const isLastImage = index === images.length - 1;

//     const handleImageUpload = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             // You can handle the uploaded image here
//         }
//     };

//     const handleCheckboxChange = () => {
//         toggleImageSelection(index);
//     };

//     return (
//         <div
//             className={`${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1'} relative group rounded-lg overflow-hidden`}
//             ref={setNodeRef}
//             style={style}
//             {...attributes}
//             {...listeners}
//         >
//             {isLastImage ? 
//                 <label
//                     className="w-full font-bold text-gray-600 border-dashed border-2 border-indigo-300 h-full bg-white flex items-center justify-center cursor-pointer"
//                 >
//                     Add Images
//                     <input
//                         type="file"
//                         accept="image/*"
//                         style={{ display: 'none' }}
//                         onChange={handleImageUpload}
//                     />
//                 </label>
//             :
//             <>
//                 {/* Checkbox functionality for Every image */}
//                 <div className={`absolute inset-0 bg-gray-700 bg-opacity-0 ${selectedImages.includes(index) ? 'bg-opacity-0' : 'group-hover:bg-opacity-75'} transition duration-300 flex items-center justify-center ${selectedImages.includes(index) ? '' : 'opacity-0 group-hover:opacity-100'}`}>
//                     <input
//                         type="checkbox"
//                         className="w-7 h-7 absolute top-2 left-2"
//                         checked={selectedImages.includes(index)}
//                         onChange={handleCheckboxChange}
//                     />
//                 </div>
//                 <img
//                     src={`${process.env.PUBLIC_URL}/images/${image}`}
//                     alt={`Image ${index + 1}`}
//                     className={`w-full h-auto ${selectedImages.includes(index) ? 'shadow-md' : ''}`} />
//             </>
//             }
//         </div>
//     );
// };

// export default SortableItem;






import React from 'react';
import { useSortable } from "@dnd-kit/sortable";

const SortableItem = ({ image, images, index, toggleImageSelection, selectedImages, id }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });

    const style = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        transition
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // You can handle the uploaded image here
        }
    };

    const handleItemClick = () => {
        toggleImageSelection(index);
    };

    const isSelected = selectedImages.includes(index);

    const isLastImage = index === images.length - 1; // Define isLastImage

    return (
        <div
            className={`${
                index === 0 ? 'col-span-2 row-span-2' : 'col-span-1'
            } relative group rounded-lg overflow-hidden`}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={handleItemClick} // Handle click on the whole div
        >
            {isLastImage ? (
                <label
                    className="w-full font-bold text-gray-600 border-dashed border-2 border-indigo-300 h-full bg-white flex items-center justify-center cursor-pointer"
                >
                    Add Images
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageUpload}
                    />
                </label>
            ) : (
                <>
                    <div className={`absolute inset-0 bg-gray-700 bg-opacity-0 ${isSelected ? 'bg-opacity-0' : 'group-hover:bg-opacity-75'} transition duration-300 flex items-center justify-center ${isSelected ? '' : 'opacity-0 group-hover:opacity-100'}`}>
                        <input
                            type="checkbox"
                            className="w-7 h-7 absolute top-2 left-2"
                            checked={isSelected}
                            readOnly // Use readOnly to avoid changing checkbox state
                        />
                    </div>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/${image}`}
                        alt={`Image ${index + 1}`}
                        className={`w-full h-auto ${isSelected ? 'shadow-md' : ''}`} />
                </>)
            }
        </div>
    );
};

export default SortableItem;
