import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              placeholder="Type here"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full"
            />
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
              {...register("instructorName", { required: true })}
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
            {...register("instructorEmail", { required: true })}
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
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Available Seats*</span>
          </label>
          <input
            type="number"
            placeholder="Available Seats"
            {...register("seats", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#133795] via-yellow-700 to-[#f14e4c] px-4 py-2 rounded-md text-white mt-3 w-full"
          >
            <span className="mr-2">Add Class</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
