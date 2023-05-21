import React, { useContext, useState, ChangeEvent, useEffect } from "react";
import "./AddForm.css";
import { AuthContext } from "../Authcheck";
import { db, storage } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface FormData {
  pg_name: string;
  owner_name: string | null;
  ownerimg: string | null;
  owneremail: string | null;
  description: string;
  location: string;
  facilities: string[];
  price: string;
  photo: File | null;
  photoURL: string | null;
}

const AddForm: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormData>({
    pg_name: "",
    owner_name: null,
    ownerimg: null,
    owneremail: user?.email ?? null,
    description: "",
    location: "",
    facilities: [],
    price: "",
    photo: null,
    photoURL: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFacilitiesChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedFacilities: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedFacilities.push(options[i].value);
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      facilities: selectedFacilities,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: file || null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.photo) {
      return; // Handle error, image is required
    }

    setLoading(true);

    const storageRef = ref(storage, `images/${formData.photo.name}`);

    try {
      await uploadBytes(storageRef, formData.photo);
      const imageUrl = await getDownloadURL(storageRef);

      const formDataWithImage: FormData = {
        ...formData,
        photoURL: imageUrl,
      };

      await addDoc(collection(db, "pgs"), formDataWithImage);

      setFormData({
        pg_name: "",
        owner_name: user?.displayName ?? null,
        ownerimg: null,
        owneremail: user?.email ?? null,
        description: "",
        location: "",
        facilities: [],
        price: "",
        photo: null,
        photoURL: "",
      });

      setShowModal(true);
    } catch (error) {
      console.error("Error adding PG:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 3000); // Close modal after 3 seconds
    }
  }, [showModal]);

  return (
    <div className="addForm">
      <div className="filleradd"></div>
      <h1>Add Form</h1>
      <p>Fill the form to add a new PG</p>
      <hr />
      <form onSubmit={handleSubmit} className="form-add">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="pg_name"
            id="name"
            value={formData.pg_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            className="custom-file-input"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="facilities">Facilities</label>
          <select
            name="facilities"
            id="facilities"
            multiple
            value={formData.facilities}
            onChange={handleFacilitiesChange}
          >
            <option key="wifi" value="Wifi">
              Wifi
            </option>
            <option key="ac" value="AC">
              AC
            </option>
            <option key="tv" value="TV">
              TV
            </option>
            <option key="laundry" value="Laundry">
              Laundry
            </option>
            <option key="food" value="Food">
              Food
            </option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {showModal && (
        <div className="modal">
          <p>Successfully added!</p>
        </div>
      )}
    </div>
  );
};

export default AddForm;
