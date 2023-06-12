import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  // console.log(img_hosting_url);

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, email, availableSeats, instructor, price, students } =
            data;
          const newClass = {
            name,
            image: imgURL,
            instructor,
            email,
            availableSeats: parseFloat(availableSeats),
            price: parseFloat(price),
            students: parseFloat(students),
          };
          console.log(newClass);
          axiosSecure.post("/classes", newClass).then((data) => {
            console.log("After posting new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire("Good job!", "Item added successfully!", "success");
            }
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>ACraft | Add Class</title>
      </Helmet>

      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mt-10 mb-3 xl:mt-14 text-center">
        Add Class
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Class Name*</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-red-500">
                You must give class name here
              </span>
            )}
          </div>
          <div className="form-control  w-full">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
              {...register("instructor", { required: true })}
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email</span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue={user?.email}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100"
            {...register("email", { required: true })}
          />
        </div>

        <div className="md:flex gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Choose an Image*</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500">
                You must choose an image file here
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.price && (
              <span className="text-red-500">You must give price</span>
            )}
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Available Seats*</span>
            </label>
            <input
              type="number"
              placeholder="Available Seats"
              {...register("availableSeats", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.availableSeats && (
              <span className="text-red-500">
                You must give available seats here
              </span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Students</span>
            </label>
            <input
              type="number"
              defaultValue="0"
              placeholder="Students"
              {...register("students", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#133795] via-yellow-700 to-[#f14e4c] px-4 py-2 rounded-md text-white mt-3 lg:mb-4 w-full"
          >
            <span className="mr-2">Add Class</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
