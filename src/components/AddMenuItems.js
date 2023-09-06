const AddMenuItems = () => {

    const handleAddMenu = () => {

    }
    return (
        <div>
            <div className="m-10">
                <h2 className="text-4xl font-bold text-center mb-5">Add a Toy</h2>
                <form onSubmit={handleAddMenu}>
                    <div className="grid grid-cols-1 gap-6 text-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL" name="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Doll Name</span>
                            </label>
                            <input type="text" name="doll" placeholder="Doll Name" className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="rounded-full bg-blue-700 text-white mx-auto px-4">Add A Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMenuItems;